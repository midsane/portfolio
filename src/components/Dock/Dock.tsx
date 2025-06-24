import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type MotionValue,
  type SpringOptions,
} from "framer-motion";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type DockItemData = {
  icon: ReactNode;
  label: ReactNode;
  onClick: () => void;
  className?: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  dockHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

function isMotionValue<T = any>(val: any): val is MotionValue<T> {
  return val && typeof val.get === "function" && typeof val.on === "function";
}

function DockLabel({
  label,
  isHovered,
}: {
  label: ReactNode;
  isHovered: MotionValue<number>;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isMotionValue(isHovered)) return;

    const unsubscribe = isHovered.on("change", (v) => {
      setVisible(v === 1);
    });

    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute -top-6 left-1/2 w-fit whitespace-nowrap rounded-md border border-neutral-700 bg-[#060010] px-2 py-0.5 text-xs text-white"
          style={{ x: "-50%" }}
        >
          {label}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockItem({
  icon,
  label,
  onClick,
  className,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}: {
  icon: ReactNode;
  label: ReactNode;
  onClick?: () => void;
  className?: string;
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  distance: number;
  magnification: number;
  baseItemSize: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect();
    const center = rect ? rect.x + rect.width / 2 : 0;
    return val - center;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );

  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center rounded-full bg-[#060010] border-neutral-700 border-2 shadow-md ${className}`}
      tabIndex={0}
    >
      <div className="flex items-center justify-center">{icon}</div>
      <DockLabel label={label} isHovered={isHovered} />
    </motion.div>
  );
}

export function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );

  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div style={{ height }} className="mx-2 flex max-w-full items-center">
      <motion.div
        onMouseMove={(e) => {
          isHovered.set(1);
          mouseX.set(e.pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 transform flex w-fit items-end gap-4 rounded-2xl border-2 border-neutral-700 px-4 pb-2 ${className}`}
        style={{ height: panelHeight }}
      >
        {items.map((item, idx) => (
          <DockItem
            key={idx}
            icon={item.icon}
            label={item.label}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

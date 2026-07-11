import { useState } from "react";
import { Download, FileText } from "lucide-react";
import resumelink from "/resume.pdf";

type Props = {
  href?: string;
  filename?: string;
};

export function ResumeButton({
  href = resumelink,
  filename = "Resume.pdf",
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      download={filename}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="select-none active:scale-98 transition-transform inline-block group"
      rel="noopener noreferrer"
    >
      <div className="flex items-center gap-3 font-mono text-sm sm:text-base text-orange-500 tracking-wider bg-orange-500/5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-orange-500/20 shadow-sm transition-colors duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-500/[0.08]">
        <span>~/aditya-raj</span>
        <span className="text-muted-foreground/30">|</span>
        <div className="flex items-center gap-1.5 text-muted-foreground transition-colors duration-300 group-hover:text-orange-500">
          <span className="text-xs sm:text-sm tracking-normal uppercase text-muted-foreground/80 font-semibold group-hover:text-orange-500">
            cv
          </span>
          <div className="relative w-4 h-4 flex items-center justify-center">
            {hovered ? (
              <FileText className="w-4 h-4 text-orange-500 absolute transition-all duration-300" strokeWidth={2} />
            ) : (
              <Download className="w-4 h-4 text-muted-foreground group-hover:text-orange-500 absolute transition-all duration-300 animate-pulse" strokeWidth={2.5} />
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
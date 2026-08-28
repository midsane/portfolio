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
      rel="noopener noreferrer"
      className="group inline-flex select-none items-center gap-2.5 border border-border/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
    >
      <span>~/aditya-raj</span>
      <span className="text-border">|</span>
      <span className="inline-flex items-center gap-1.5">
        CV
        {hovered ? (
          <FileText className="h-3.5 w-3.5" strokeWidth={2} />
        ) : (
          <Download className="h-3.5 w-3.5" strokeWidth={2} />
        )}
      </span>
    </a>
  );
}

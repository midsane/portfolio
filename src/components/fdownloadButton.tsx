import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import resumelink from "/resume.pdf"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
    href?: string;
    filename?: string;
};

export  function ResumeButton({
    href = resumelink,
    filename = "Resume.pdf",
}: Props) {
    const [morphed, setMorphed] = useState(false);

    return (
        <div className="fixed right-6 bottom-6 z-50 select-none">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <a
                            href={href}
                            download={filename}
                            onMouseEnter={() => setMorphed(true)}
                            onMouseLeave={() => setMorphed(false)}
                            onFocus={() => setMorphed(true)}
                            onBlur={() => setMorphed(false)}
                            aria-label="Download resume"
                            title="Download resume"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="secondary"
                                size="icon"
                                className="group cursor-pointer relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg  hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-indigo-400"
                            >
                                <span className="absolute inset-0 -z-10 animate-float opacity-70" />

                                {/* Lucide icons morph simulation */}
                                <div className="transition-all duration-500 ease-in-out">
                                    {morphed ? (
                                        <FileText className="w-8 h-8" strokeWidth={2.2} />
                                    ) : (
                                        <Download className="w-8 h-8" strokeWidth={2.2} />
                                    )}
                                </div>

                                <span className="sr-only">Download resume</span>
                            </Button>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent side="left" className=" rounded-md px-2 py-1 text-sm">
                        Resume
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

        <style>
    {`
    @keyframes floatY {
      0% { transform: translateY(0); }
      50% { transform: translateY(-6px); }
      100% { transform: translateY(0); }
    }
    .animate-float { animation: floatY 3.6s ease-in-out infinite; }
    `}
        </style>
        </div>
    );
}

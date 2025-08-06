import ThemeToggleButton from "./ui/theme-toggle-button";
import favicon from "/favicon.png";
import github from "/social.png";
import LinkedIn from "/linkedin.png";
import twitter from "/twitter.png";
import Medium from "/medium.png";

export const Navigation = () => {
    return (
        <nav
            className="flex items-center fixed shadow shadow-accent gap-4 sm:gap-4 top-4 sm:top-5 left-1/2 -translate-x-1/2 right-0 z-50 p-2 sm:p-3
  min-w-[400px]:w-[75%] w-[90%] justify-center sm:w-fit border border-border rounded-full bg-background backdrop-blur-sm"
        >
            <a href="/">
                <img src={favicon} alt="aditya_raj_portfolio" className="w-10 h-10 rounded-full" />
            </a>
            <div className="h-10 w-[1px] bg-border" />

            <a
                target="_blank"
                href="https://github.com/midsane">
                <img src={github} alt="GitHub" className="w-7 h-7 cursor-pointer" />
            </a>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/aditya-raj-846018294/">
                <img src={LinkedIn} alt="LinkedIn" className="w-7 h-7 cursor-pointer" />
            </a>
            <a
                target="_blank"
                href="https://x.com/no_more_mid">
                <img src={twitter} alt="Twitter" className="w-7 h-7 cursor-pointer" />
            </a>
            <a target="_blank" href="https://medium.com/@adityaraj10544">
                <img src={Medium} alt="Medium" className="w-7 h-7 cursor-pointer" />
            </a>

            <ThemeToggleButton />
        </nav>
    );
};

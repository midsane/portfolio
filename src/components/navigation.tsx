import ThemeToggleButton from "./ui/theme-toggle-button";
import favicon from "/favicon.ico";
import github from "/social.png";
import LinkedIn from "/linkedin.png";
import twitter from "/twitter.png";
import Medium from "/medium.png";

export const Navigation = () => {
    return (
        <nav
            className=" flex items-center fixed shadow shadow-accent gap-2 sm:gap-4 top-4 sm:top-5 left-1/2 -translate-x-1/2 right-0 z-50 p-1 sm:p-2
  min-w-[400px]:w-[75%] w-[90%] justify-center sm:w-fit border border-border rounded-full bg-background backdrop-blur-sm"
        >
            <a className="flex gap-2 items-end" href="/">
                <img src={favicon} alt="aditya_raj_portfolio" className="w-7 h-7 cursor-pointer rounded-full" />
                midsane
                <div className="h-7 w-[1px] bg-chart-4" />
            </a>


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

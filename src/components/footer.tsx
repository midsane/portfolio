import twitter from "/twitter.png";
import gmail from "/gmail.png";
import github from "/social.png";
import isagi from "/isagiclean.jpg";
import LinkedIn from "/linkedin.png";
export const Footer = () => {
  return (
    <section className="w-full my-20 overflow-x-hidden p-0 m-0">
      <div className="mx-auto max-w-4xl rounded-[40px]  p-2 shadow-sm">
        <div className="relative mx-auto h-[400px] max-w-4xl overflow-hidden rounded-[38px] bg-accent p-2 shadow-sm">
          <p className="mt-20 text-center font-semibold text-accent-foreground">Making Web Dev Great Again!</p>

          <div className="flex justify-center w-full">
            <a
              href="#"
              className="items-center mt-10 rounded-full   text-sm p-1 font-medium"
            >
              <p
                className="mx-auto max-w-md text-accent-foreground/60 dark:text-neutral-400/70 animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80 inline-flex group items-center  justify-center rounded-full px-4 py-1 transition ease-out"
              >
                <span className="" > If you are looking to work together, Drop a mail or DM on X <span className="flex mt-5 relative" >
                  <img
                    style={{ objectPosition: 'center -50px' }}
                    className="absolute  rounded-full top-0 left-0" src={isagi} />
                  <div className="absolute border-2 border-bg-chart-4 rounded-full 
                  bg-background sm:w-20 w-16 aspect-square flex justify-center items-center  
                  top-20 -left-9">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/aditya-raj-846018294/"
                    ><img className="w-8 sm:w-10" src={LinkedIn} /></a>
                  </div>

                  <div className="absolute border-2 border-bg-chart-4 rounded-full bg-background sm:w-20 w-16 aspect-square flex justify-center items-center  
                  -top-4 left-5">
                    <a
                      target="_blank"
                      href="https://x.com/no_more_mid">
                      <img className="w-8 sm:w-10" src={twitter} />
                    </a>
                  </div>

                  <div className="absolute border-2 border-bg-chart-4 rounded-full  bg-background sm:w-20 w-16  aspect-square flex justify-center items-center  
                  top-20 -right-10">
                    <a
                      target="_blank"
                      href="mailto:adityaraj10544@gmail.com">
                      <img className="w-8 sm:w-10" src={gmail} />
                    </a>
                  </div>
                  <div className="absolute border-2 border-bg-chart-4 rounded-full  bg-background sm:w-20 w-16  aspect-square flex justify-center items-center  
                  -top-3 right-3">
                    <a
                      target="_blank"
                      href="https://github.com/midsane">
                      <img className="w-8 sm:w-10" src={github} />
                    </a>
                  </div>

                </span></span>&nbsp;

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-1 size-3  transition-all duration-300 ease-in-out group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </p>
            </a>
          </div>

          {/* <h1 className="stroked-text  absolute inset-x-0 mt-[120px] text-center text-[100px] font-semibold text-[#ff4017] sm:mt-[30px] sm:text-[190px]">
            midsane
          </h1>
          <h1 className="absolute inset-x-0 mt-[120px] text-center text-[100px] font-semibold text-background sm:mt-[30px] sm:text-[190px]">
            midsane
          </h1> */}
        </div>
      </div>
    </section>
  );
};

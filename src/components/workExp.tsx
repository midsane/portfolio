import { Building } from 'lucide-react'
import photogpt from '/photogpt.png';
export function WorkExp() {
  return (
    <div id='work_exp' className="max-w-2xl mx-auto p-2 sm:p-6 ">
      <div className="bg-background rounded-2xl shadow-sm border border-border overflow-hidden">
        {/* macOS window controls */}
        <div className="flex items-center gap-2 px-4 py-3 bg-accent border-b border">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-10">
          <h1 className="text-2xl font-bold text-foreground mb-8">Experience</h1>

          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 relative z-10">
                <img src={photogpt} alt="PhotoGPT Logo" className="w-8 h-8 rounded-full" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 relative z-10">
                  <h3 className="text-md sm:text-lg font-semibold text-foreground/90">PhotoGPT</h3>
                </div>

                {/* Software Engineer II */}
                <div className="mb-4 relative">
                  <div className="flex items-center gap-2 mb-2 relative z-10">
                    <h4 className="text-sm sm:text-base font-medium text-foreground/80">Frontend Engineer</h4>
           
                  </div>
                  <p className="text-sm text-foreground/70">
                    August 2025 - Current • Remote • Internship
                  </p>
                </div>

              
              </div>
            </div>

            {/* Curved branch lines for Postman positions */}
            <svg className="absolute left-6 top-12 w-16 h-8 pointer-events-none z-0" viewBox="0 0 64 32">
              <path
                d="M 6 0 Q 6 16 32 20"
                stroke="#22c55e"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* <svg className="absolute left-6 top-28 w-16 h-8 pointer-events-none z-0" viewBox="0 0 64 32">
              <path
                d="M 6 0 Q 6 16 32 20"
                stroke="#22c55e"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            <svg className="absolute left-6 top-44 w-16 h-8 pointer-events-none z-0" viewBox="0 0 64 32">
              <path
                d="M 6 0 Q 6 16 32 20"
                stroke="#22c55e"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg> */}
          </div>
          <div className="mb-8 relative">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center flex-shrink-0 relative z-10">
                <Building />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 relative z-10">
                  <h3 className="text-lg font-semibold text-foreground/90">NewsNest</h3>
                </div>
                <div className="flex items-center gap-2 mb-2 relative z-10">
                  <h4 className="text-base font-medium text-foreground/80">Founding Backend Engineer</h4>
                </div>
                <p className="text-sm text-foreground/70">
                  May 2025 - August 2025 (3 m) • Remote • Internship
                </p>
              </div>
            </div>

            <svg className="absolute left-6 top-12 w-16 h-8 pointer-events-none z-0" viewBox="0 0 64 32">
              <path
                d="M 6 0 Q 6 16 32 20"
                stroke="#22c55e"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Postman */}

        </div>
      </div>
    </div>
  )
}

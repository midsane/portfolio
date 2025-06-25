import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import { Carousel } from "./Carousel/Carousel"


export const Project = ({ name, description, imgLinks, githubLink, liveLink }:
  ({ name: string, description: string, imgLinks: string[], githubLink: string, liveLink: string })) => {
  return <div className="flex  md:flex-col gap-6 max-[450px]:gap-3 md:gap-10" >
    <Carousel images={imgLinks} />
    <div className="flex flex-col gap-2 justify-center items-start w-full">
      <span className="flex justify-between items-center w-full" >
        <h3 className="max-[450px]:text-sm text-xl md:text-2xl ">{name}</h3>
        <div className="flex w-fit gap-1" >
          <a target="_blank" href={githubLink}>
            <GithubIcon color="white" size={15} />
          </a>
          <a target="_blank" href={liveLink}>
            <ExternalLinkIcon color="white" size={15} />
          </a>

        </div>
      </span>
      <p className="max-[450px]:text-xs  md:text-lg opacity-75" >{description}</p>
    </div>
  </div>
}

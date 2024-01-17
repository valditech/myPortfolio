import { DefaultTemplate } from "../../components/DefaultTemlate/DefaultTemplate"
import { AboutMe } from "../../components/sections/AboutSection/AboutSection"
import { BannerSection } from "../../components/sections/BannerSection/BannerSection"
import { ProjectList } from "../../components/sections/ProjectSection/ProjectList/ProjectList"
import { TechList } from "../../components/sections/TechSection/TechList/TechList"

export const HomePage = ()=>{
    return (
        <DefaultTemplate>
            <BannerSection/>
           <AboutMe/>
            <TechList/>
            <ProjectList/>
        </DefaultTemplate>
        
    )
}
import Header from ".//header/header"
import Home from './home/home'
import AboutMe from "./aboutMe/aboutMe"
import Contact from "./contact/contact"
import ProjectGroup from "@/components/projectGroup/projectGroup"
import { SiGmail } from 'react-icons/si'
import Footer from "@/components/footer/footer"
export default function Portifolio() {
    return (
        <div>
            
            <Header />
            <Home />
            <div id="aboutMe">
            <AboutMe />
            </div>
            <div id="projects">
            <ProjectGroup />
            </div>
            <Contact />
            <Footer/>
        </div>
    )
}


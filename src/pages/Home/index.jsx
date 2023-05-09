import AboutSection from '../../sections/AboutSection'
import ContactSection from '../../sections/ContactSection'
import FooterSection from '../../sections/FooterSection'
import HomeSection from '../../sections/HomeSection'
import ProjectsSection from '../../sections/ProjectsSection'

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}

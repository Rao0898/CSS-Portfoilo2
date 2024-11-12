import styles from './page.module.css'

import SkillsSection from './components/SkillsSection'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  )
}
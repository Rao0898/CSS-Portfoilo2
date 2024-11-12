

import styles from './page.module.css'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'

export function BlockPage() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  )
}
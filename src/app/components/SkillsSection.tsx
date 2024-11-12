import styles from './SkillsSection.module.css'

const SkillsSection = () => {
  const skills = ['React', 'Next.js', 'TypeScript', 'CSS', 'Node.js', 'GraphQL']

  return (
    <section className={styles.skills}>
      <h2>My Skills</h2>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>{skill}</div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
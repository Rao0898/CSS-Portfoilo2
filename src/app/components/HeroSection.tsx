import styles from './HeroSection.module.css'
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1>Welcome to My Portfolio</h1>
      <p>Im a passionate developer creating amazing web experiences</p>
      <Link href="#project"> {/* Add the target path inside the href attribute */}
        <button className={styles.cta}>View My Projects</button>
      </Link>
    </section>
  )
}

export default HeroSection;

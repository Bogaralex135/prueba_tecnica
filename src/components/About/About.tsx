import styles from './About.module.css'

export default function About(): JSX.Element {
  return (
    <section>
      <h2 className='section-title'>Sobre Mi</h2>
      <p className={styles.sectionText}>
        I'm a passionate software engineer with a love for building innovative
        and user-friendly applications. I have a strong background in full-stack
        development, with expertise in technologies like React, Node.js, and
        SQL. In my free time, I enjoy exploring new technologies, reading about
        the latest industry trends, and contributing to open-source projects.
      </p>
    </section>
  )
}

import styles from './styles.module.css'

interface Props {}

export default function Header({}: Props): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.avatar}>
          <img
            src='/avatar.png'
            alt='Foto de perfil'
            className={styles.avatarImage}
          />
        </div>
        <div className={styles.headerInfo}>
          <h1 className={styles.headerTitle}>Bogar Alejandro Vazquez Mata</h1>
          <p className={styles.headerSubtitle}>FullStack Developer</p>
        </div>
      </div>
    </header>
  )
}

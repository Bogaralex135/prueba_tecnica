import InterestItem from './InterestItem'
import styles from './Interests.module.css'

export default function Interests(): JSX.Element {
  return (
    <section>
      <h2 className='section-title'>Mis intereses</h2>
      <ul className={styles.interestsList}>
        <InterestItem>Web Development</InterestItem>
        <InterestItem>Web Development</InterestItem>
        <InterestItem>Web Development</InterestItem>
        <InterestItem>Web Development</InterestItem>
        <InterestItem>Web Development</InterestItem>
        <InterestItem>Web Development</InterestItem>
      </ul>
    </section>
  )
}

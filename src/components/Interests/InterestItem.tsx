import styles from './Interests.module.css'

interface Props extends React.HTMLAttributes<HTMLLIElement> {
  children: string
}

export default function InterestItem({
  children,
  ...props
}: Props): JSX.Element {
  return (
    <li className={styles.interestItem} {...props}>
      {children}
    </li>
  )
}

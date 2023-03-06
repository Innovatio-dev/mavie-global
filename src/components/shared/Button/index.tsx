// Styles
import styles from './styles.module.scss'

export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            <div className={styles.firstRing} />
            <div className={styles.secondRing} />
            <div className={styles.thirdRing} />
            <div className={styles.content}>
                { children }
            </div>
        </div>
    )
}

// Styles
import styles from './styles.module.scss'

export default function IconScroll () {
    return <div className={styles.mouseElement}>
        <div className={styles.path}>
            <span/>
            <span/>
            <span/>
        </div>
        <div className={styles.mouse}>
            <span/>
        </div>
    </div>
}

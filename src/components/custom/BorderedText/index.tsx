import styles from './styles.module.scss'

const Borderedtext = ({ children, className, duplicate }: { children: React.ReactNode, className: string, duplicate: boolean }) => {
    return (
        <div data-text={ children } className={`${styles.text} ${className}`}>
            <h2 className={`${styles.content} ${className}`}>{ children }</h2>
            <span data-text={ children } className={duplicate ? styles.duplicates : ''}></span>
        </div>
    )
}

export default Borderedtext

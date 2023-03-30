import styles from './styles.module.sass'

export interface IItemProps {
    id: number,
    title: string,
    subtitle: string,
    startColor: string,
    endColor: string,
    tags?: string[]
}

export default function Item(props: IItemProps) {
    return <div className={styles.item}>
        <div className={styles.leading}>
            <div className={styles.line} style={{ background: props.startColor }}/>
        </div>
        <div className={styles.content}>
            <div className={styles.body}>
                <div className={styles.title}>{props.title}</div>
            </div>
            <div className={styles.trailing}>
                {props.tags?.map((tag, i) => <span key={i} style={{ borderColor: props.startColor }}>{tag}</span>)}
            </div>
        </div>
        <div className={styles.contextual}>
            <div className={styles.background}
                style={{ background: `linear-gradient(90deg, ${props.startColor}, ${props.endColor})` }}
            ></div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.subtitle}>{props.subtitle}</div>
        </div>
    </div>
}

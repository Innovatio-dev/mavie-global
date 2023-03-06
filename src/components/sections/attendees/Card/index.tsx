import Image from 'next/image'
import { BsCheck } from 'react-icons/bs'
import styles from './styles.module.sass'
export interface Post{
    message: string,
    author: string,
    from: string
}
export default function Card(props: Post) {
    return <div className={styles.item}>
        <div className={styles.header}>
            <div className={styles.avatar}>

                <Image alt="profilePicture" fill src={'/assets/svg/quotes.svg'} style={{ objectFit: 'contain' }}/>
            </div>
            <div className={styles.information}>
                <div className={`${styles.coloredText} ${styles.author}`}>
                    {props.author}
                </div>
                <div className={styles.from}>
                    {props.from}
                </div>
            </div>
            <div className={styles.verification}>
                <Image alt="blue_check" fill src={'/assets/svg/blue_star.svg'}/>
                <div className={styles.check}>
                    <BsCheck/>
                </div>
            </div>
        </div>
        <div className={styles.body} dangerouslySetInnerHTML={{ __html: props.message }}>
        </div>
    </div>
}

import Image from 'next/image'
import styles from './styles.module.sass'

export interface IHoverBoxProps {
  title: string,
  content: string,
  icon: string,
  startColor: string,
  endColor: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any,
  active: boolean
}

export default function HoverBox(props: IHoverBoxProps) {
    return (
        <>
            <div
                onClick={props.onClick}
                className={`${styles.item} w-[180px] lg:w-[250px] h-[220px] mx-[8px] lg:mx-[16px]`}
                style={{ borderColor: props.startColor }}
            >
                <div
                    className={styles.content}>
                    <Image src={`/assets/svg/${props.icon}.svg`} alt={props.icon} width="50" height="50" />
                    <p className="pt-2">{props.title}</p>
                </div>
                <div className={styles.background}
                    style={{ background: `linear-gradient(0deg, ${props.startColor}, ${props.endColor})`, display: props.active ? 'flex' : 'none' }}
                >
                    <p className='absolute w-full bottom-6 font-thin text-center mx-auto text-xs lg:text-base' dangerouslySetInnerHTML={{ __html: props.content }} />
                </div>
            </div>
        </>
    )
}

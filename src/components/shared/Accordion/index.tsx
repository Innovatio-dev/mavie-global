import { useCallback, useState, useMemo, createRef } from 'react'
import { useTranslation } from 'next-i18next'
import styles from './styles.module.sass'
export interface IAccordionItem {
    title: string,
    content: string;
}
interface ExpandedItems {
    [index: number]: boolean
}

export default function Accordion({ items }: { items: IAccordionItem[] }) {
    const [expandedItems, setExpandedItems] = useState<ExpandedItems>({})
    const itemsRef = useMemo(() => {
        return items.map(() => createRef<HTMLDivElement>())
    }, [items])
    const { t } = useTranslation('faq')
    const handleClick = useCallback((index: number) => {
        setExpandedItems({
            ...expandedItems,
            [index]: !expandedItems[index]
        })
        const panel = itemsRef[index].current
        if (!panel) return
        if (!expandedItems[index]) {
            panel.style.maxHeight = panel?.scrollHeight + 'px'
            panel.style.opacity = '1'
        } else {
            panel.style.maxHeight = ''
            panel.style.opacity = '0'
        }
    }, [expandedItems, itemsRef])

    return <div className={styles.container}>
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <div onClick={() => handleClick(index)} className={styles.itemHeader}>
                        <div className={styles.leading}>
                            <div className={`${styles.icon} ${expandedItems[index] ? styles.expanded : ''}`} >
                                {/* <Image fill alt='arrow_collapsed' src={'/assets/svg/arrow_collapsed.svg'} /> */}
                            </div>

                        </div>
                        <div className={styles.title}>
                            {t(item.title)}
                        </div>
                    </div>
                    <div ref={itemsRef[index]} className={styles.itemContent} dangerouslySetInnerHTML={{ __html: t(item.content) }} />
                </li>
            ))}
        </ul>
    </div>
}

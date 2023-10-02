import Image from 'next/image'
import { useState, useRef, useEffect, useMemo } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import styles from './styles.module.scss'

type Item = {
    icon: string,
    text: string,
    id: string | number
}
export interface IDropdownProps{
    items: Item[],
    onChange?: (item: Item, index: number)=>void,
    selectedIndex?:number
}

export default function Dropdown({ items, onChange, selectedIndex }:IDropdownProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(items[0])
    const [listStyle, setListStyle] = useState({})
    const listRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const unsortedItems = useMemo(() => {
        const index = items.findIndex((value) => selected === value)
        const result = [...items]
        result[0] = items[index]
        result[index] = items[0]
        return result
    }, [selected, items])

    const handleItemClick = (item: Item) => {
        if (!listRef.current || !containerRef.current) return
        if (isOpen) {
            setSelected(item)
            setIsOpen(false)
            const index = items.findIndex((value) => item === value)
            const htmlItem = listRef.current.children[index]
            const itemRect = htmlItem.getBoundingClientRect()
            containerRef.current.style.height = itemRect.height + 'px'
            if (onChange) {
                onChange(item, index)
            }
        } else {
            setIsOpen(true)
        }
    }

    useEffect(() => {
        if (selectedIndex === undefined) return
        setSelected(items[selectedIndex])
    }, [selectedIndex, items])

    useEffect(() => {
        if (!listRef.current || !containerRef.current) return
        const htmlItem = listRef.current.children[0]
        const itemRect = htmlItem.getBoundingClientRect()
        containerRef.current.style.height = itemRect.height + 'px'
        containerRef.current.style.width = itemRect.width + 'px'
    }, [])

    useEffect(() => {
        const onClick = (event: MouseEvent) => {
            if (!containerRef.current) return
            if (!containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        window.addEventListener('click', onClick)
        return () => {
            window.removeEventListener('click', onClick)
        }
    }, [isOpen])

    useEffect(() => {
        if (!listRef.current || !containerRef.current) return
        const itemRect = containerRef.current.getBoundingClientRect()

        if (isOpen) {
            setListStyle({
                position: 'absolute',
                left: '0px',
                top: '0px',
                width: '100%',
                maxHeight: listRef.current.scrollHeight + 'px'
            })
        } else {
            setListStyle({
                position: 'absolute',
                left: '0px',
                top: '0px',
                width: '100%',
                maxHeight: itemRect.height + 'px'
            })
        }
    }, [isOpen])

    return (
        <div ref={containerRef} className={styles.container} >
            <div ref={listRef} className={styles.list} style={listStyle} >
                {
                    unsortedItems.map((item, index) =>
                        <div key={item.id} className={styles.item} onClick={() => handleItemClick(item)}>
                            <div className={styles.leading}>
                                <Image src={item.icon} alt={'icon'} fill />
                            </div>
                            <div className={styles.body}>
                                {item.text}
                            </div>
                            {index === 0 && <div className={`${styles.arrow} ${isOpen ? styles.rotated : ''}`}>
                                <IoIosArrowDown/>
                            </div>}
                        </div>)
                }
            </div>

        </div>
    )
}

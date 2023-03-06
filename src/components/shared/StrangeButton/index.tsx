import React, { CSSProperties } from 'react'
import styles from './styles.module.scss'

interface StrangeButtonProps {
    children: React.ReactNode;
    style?: CSSProperties;
    onClick?: () => void;
  }

const StrangeButton = ({ children, style, onClick }: StrangeButtonProps) => {
    return (
        <div style={style} onClick={onClick} className={`${styles.shadow} hover:scale-[1.1] rounded-xl  transition-all ease-in-out cursor-pointer absolute z-10`}>
            <div className={`${styles.button} w-full h-full flex text-3xl items-center gap-2 absolute`}>
                { children }
            </div>
        </div>
    )
}

export default StrangeButton

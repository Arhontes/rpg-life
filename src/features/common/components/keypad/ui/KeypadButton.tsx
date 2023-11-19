import cn from 'classnames'
import { useState } from 'react'
import { KeypadValueType } from './Keypad'
import s from './keypad.module.scss'

type KeypadButtonProps = {
    value: KeypadValueType
}
export const KeypadButton = ({ value }: KeypadButtonProps) => {
    const [isClicked, setIsClicked] = useState(false)

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setIsClicked(true)
    }
    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setIsClicked(false)
    }
    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className={cn(s.startButton, { [s.clicked]: isClicked })}
        >
            {value.value}
        </div>
    )
}

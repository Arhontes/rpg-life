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

        setIsClicked(true)
    }
    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        e.preventDefault()

        setIsClicked(false)
    }
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        // Ваш код обработки клика
    }
    return (
        <div
            style={{ userSelect: 'none', touchAction: 'manipulation' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={(e) => e.preventDefault()}
            onTouchCancel={(e) => e.preventDefault()}
            onTouchCancelCapture={(e) => e.preventDefault()}
            onTouchEndCapture={(e) => e.preventDefault()}
            onTouchMoveCapture={(e) => e.preventDefault()}
            onTouchStartCapture={(e) => e.preventDefault()}
            className={cn(s.startButton, { [s.clicked]: isClicked })}
        >
            {value.value}
        </div>
    )
}

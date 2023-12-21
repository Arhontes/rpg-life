import BackspaceIcon from '@mui/icons-material/Backspace'
import DoneIcon from '@mui/icons-material/Done'
import { KeypadButton } from './KeypadButton'
type KeypadProps = {
    onClick: (value: number) => void
    onDelete: () => void
    onSubmit: () => void
}

export type KeypadValueType = {
    value: number | React.ReactElement
    action: 'number' | 'delete' | 'submit'
    id: string
}

const keypadNumbers: Array<KeypadValueType> = [
    { action: 'number', value: 1, id: '1' },
    { action: 'number', value: 2, id: '2' },
    { action: 'number', value: 3, id: '3' },
    { action: 'number', value: 4, id: '4' },
    { action: 'number', value: 5, id: '5' },
    { action: 'number', value: 6, id: '6' },
    { action: 'number', value: 7, id: '7' },
    { action: 'number', value: 8, id: '8' },
    { action: 'number', value: 9, id: '9' },
    { action: 'submit', value: <DoneIcon style={{ userSelect: 'none' }} />, id: 'done' },
    { action: 'number', value: 0, id: '0' },
    { action: 'submit', value: <BackspaceIcon style={{ userSelect: 'none' }} />, id: 'delete' },
]
export const Keypad = () => {
    return (
        <div
            onClick={(e) => e.preventDefault()}
            onTouchStart={(e) => e.preventDefault()}
            onTouchEnd={(e) => e.preventDefault()}
            onTouchMove={(e) => e.preventDefault()}
            onTouchCancel={(e) => e.preventDefault()}
            onTouchCancelCapture={(e) => e.preventDefault()}
            onTouchEndCapture={(e) => e.preventDefault()}
            onTouchMoveCapture={(e) => e.preventDefault()}
            onTouchStartCapture={(e) => e.preventDefault()}
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                maxWidth: '100%',
                justifyContent: 'center',
                userSelect: 'none',
            }}
        >
            {keypadNumbers.map((el) => (
                <KeypadButton key={el.id} value={el} />
            ))}
        </div>
    )
}

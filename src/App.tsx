import cn from 'classnames'
import s from './App.module.css'
import { CircleButton } from './features/calculator'
function App() {
    return (
        <div className={cn(s.app)}>
            <CircleButton />
        </div>
    )
}

export default App

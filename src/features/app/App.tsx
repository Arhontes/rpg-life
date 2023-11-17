import cn from 'classnames'
import { CircleButton } from '../calculator'
import s from './App.module.css'
function App() {
    return (
        <div className={cn(s.app)}>
            <CircleButton />
        </div>
    )
}

export default App

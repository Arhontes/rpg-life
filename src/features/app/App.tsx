import cn from 'classnames'
import { CentralNavigaton } from '../central-navigation'
import s from './App.module.css'
function App() {
    return (
        <div className={cn(s.app)}>
            <CentralNavigaton />
        </div>
    )
}

export default App

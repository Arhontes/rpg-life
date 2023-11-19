import { createBrowserRouter } from 'react-router-dom'
import { CalculatorPage } from '../../../../pages/calculator-page/CalculatorPage'
import App from '../../../app/App'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'calculator',
        element: <CalculatorPage />,
    },
])

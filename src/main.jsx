import { createRoot } from 'react-dom/client'
import { Provider } from "./context/Context.jsx"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <Provider>
        <App />
    </Provider>
)

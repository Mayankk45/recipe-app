import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import Recipecontext from './context/Recipecontext.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
    <Recipecontext>
        <HashRouter>
            <App />
            <ToastContainer />
        </HashRouter>
    </Recipecontext>
)

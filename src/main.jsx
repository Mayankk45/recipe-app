import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Recipecontext from './context/Recipecontext.jsx'
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
    <Recipecontext>
        <BrowserRouter>
            <App />
            <ToastContainer />
        </BrowserRouter>
    </Recipecontext>
)
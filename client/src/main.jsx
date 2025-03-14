import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../src/assets/css/fullScreenLoader.css';
import '../src/assets/css/dropdownmenu.css';
import '../src/assets/css/sidebar.css';
import '../src/assets/css/extraSmallChanges.css';
import '../src/assets/css/style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Provider} from "react-redux";
import store from "./redux/store/Store.js";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
)

import {StrictMode, Suspense} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import './18n';
import App from "./App.jsx";
import {Preloader} from "./components/Preloader/Preloader.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";
import {HelmetProvider} from "react-helmet-async";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <HelmetProvider>
                <Suspense fallback={<Preloader/>}>
                    <App/>
                </Suspense>
            </HelmetProvider>
        </AuthProvider>
    </StrictMode>,
)

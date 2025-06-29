import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Footer} from "./components/Footer/Footer.jsx";
import {ROUTES} from "./config/routes.js";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import {NavbarComponent} from "./components/Navbar/Navbar.jsx";
import {About} from "./components/Abot/About.jsx";
import {Serveses} from "./components/Serveses/Serveses.jsx";
import {Contacts} from "./components/Contacts/Contacts.jsx";


const Layout = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <NavbarComponent/>
            <div className="flex-grow-1">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};


const App = () => {
    const router = createBrowserRouter([
        {
            path: ROUTES.HOME,
            element: <Layout/>,
            errorElement: <NotFound/>,
            children: [
                {
                    path: ROUTES.HOME,
                    element: <Home/>
                },
                {
                    path: ROUTES.NOT_FOUND,
                    element: <NotFound/>
                },
                {
                    path: ROUTES.ABOUT_US,
                    element: <About/>
                },
                {
                    path: ROUTES.SERVICES,
                    element: <Serveses/>
                },
                {
                    path: ROUTES.CONTACT,
                    element: <Contacts/>
                },
            ]
        },
    ]);

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;
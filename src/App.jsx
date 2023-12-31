import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import './index.css'
import {history} from "./lib/history";
import {isAuth} from "./lib/helper";
import LocationsPage from "./pages/locationsPage";
import ToursPage from "./pages/toursPage";


function App() {
    const isAuthenticated = localStorage.getItem('isAuth')

    return (
        <>
              <BrowserRouter history={history}>
                    <Routes>
                        <Route path={'/'} element={<HomePage/>}/>
                        <Route path={'/tours'} element={<ToursPage/>}/>
                        <Route path={'/locations'} element={<LocationsPage/>}/>
                        <Route path={'/login'} element={<LoginPage/>}/>

                        {/*<Route path={'/register'} element={<RegisterPage/>}/>*/}
                        {/*<Route path={'/'} element={*/}
                        {/*    <PrivateRoute auth={{isAuthenticated: isAuth}}>*/}
                        {/*        <ProfilePage/>*/}
                        {/*    </PrivateRoute>*/}
                        {/*}/>*/}

                    </Routes>
              </BrowserRouter>
        </>
    );
}

export default App;

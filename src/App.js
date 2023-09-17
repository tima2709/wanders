import LocationPage from "./pages/LocationPage/LocationPage";
import Header from "./components/header/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<LocationPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

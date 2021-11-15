import {
    Routes,
    Route,
} from "react-router-dom";
// PAGES
import HomeComponent from '../Pages/Home/home';

const RoutesPage = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/home" element={<HomeComponent />} />
        </Routes>
    )
}

export default RoutesPage

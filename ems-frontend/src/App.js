import "./App.css";
import { ListEmployeesPage } from "./pages/ListEmployeesPage";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/welcome" element={<WelcomePage />} />
                    <Route path="/employees" element={<ListEmployeesPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

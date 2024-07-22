import "./App.css";
import EditEmployee from "./pages/EditEmployee";
import { ListEmployeesPage } from "./pages/ListEmployeesPage";
import LoginPage from "./pages/LoginPage";
import ViewEmployee from "./pages/ViewEmployee";
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
                    <Route path="/employees/:id" element={<ViewEmployee />} />
                    <Route path="/employees/:id/edit" element={<EditEmployee />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

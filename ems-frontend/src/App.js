import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import {ListEmployeesPage} from "./pages/ListEmployeesPage";
import ViewEmployee from "./pages/ViewEmployee";
import EditEmployee from "./pages/EditEmployee";
import AddEmployee from "./pages/AddEmployee";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/welcome" element={<WelcomePage />}/>
                    <Route path="/employees" element={<ListEmployeesPage />}/>
                    <Route path="/employees/:id" element={<ViewEmployee />}/>
                    <Route path="/employees/:id/edit" element={<EditEmployee />}/>
                    <Route path="/employees/add" element={<AddEmployee />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/login';
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails"; // Update the import to match the correct filename
//Fvse98YP4aSCqmJceUsv2e3My7JUgq6TdgWHqknfSw7KlgMYlwqEDbNSaDa1HPaD
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Login />} />
                <Route path="/add-employee" element={<AddEmployee/>}/>
                <Route path="/view-employees" element={<EmployeeList />} />
            </Routes>
        </Router>
    );
}

export default App;

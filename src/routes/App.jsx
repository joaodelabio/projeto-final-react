import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "../views/Main"
import Loja from "../views/Loja"

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/grid-loja" element={<Loja />} />
        </Routes>
    </Router>
);
}
export default App

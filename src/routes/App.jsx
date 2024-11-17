import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "../views/Main"
import Loja from "../views/Loja"
import Carrinho from '../views/Carrinho';

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/Loja" element={<Loja/>}/>
            <Route path="/Carrinho" element={<Carrinho/>}/>
        </Routes>
    </Router>
);
}
export default App

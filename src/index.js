import { render } from "react-dom";
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import{BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
import App from "./App";
import Usuarios from "./components/Usuarios";
import Menu from "./components/Menu";
import Usuario from "./components/Usuario";

const rootElement = document.getElementById("root");
render(
  <Router>
    <Menu/>
    <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route path="/usuarios" element={<Usuarios/>}/>
      <Route  path="/usuario/:id" element={<Usuario/>}/>
    </Routes>
    
  </Router>,
  rootElement
);
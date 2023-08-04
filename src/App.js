import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Popup from "reactjs-popup";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

//route import
import Sider from './components/views/Sider';
import Home from './components/views/Home';



function App () {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Sider />}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;

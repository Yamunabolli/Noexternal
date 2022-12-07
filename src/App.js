import './App.css';
import Sign from './Sign';
import Login from './Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Form  from './Form';


function App() {
  return (
 <div>
<Routes>
  <Route  path='/' element={<Sign/>}></Route>
  <Route  path='/Login' element={<Login/>}></Route>

</Routes>
{/* <Form/> */}
  
 </div>


  );
}

export default App;

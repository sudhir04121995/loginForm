
import {BrowserRouter as Route, Router, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/logInForm';
import UserDetailForm from './components/UserDetailForm';




function App() {
  return (

  <div className='App'>
<Router>
  <Routes>
    <Route  path='/' element={<LoginForm/>}/>
    <Route path='/Fill' element={<UserDetailForm/>}/>
     </Routes>
</Router>

  </div>
    
  );
}

export default App;





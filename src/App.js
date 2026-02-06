import './App.css';
import SignUp from './component/signup/signup';
import Login from './component/login/login';
import {useState} from 'react';

function App() {
 const [page,setPage]=useState("signup");
  return (
   <>
    {page === "signup" && <SignUp goToLogin={()=>setPage("login")}/>}
      {page === "login" && <Login goToSignup={()=>setPage("signup")}/>}
   </>
  );
}

export default App;

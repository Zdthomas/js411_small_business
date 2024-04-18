import React from 'react'
import { Switch, Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Dashboard  from './containers/Dashboard';
import Business from './containers/Business';
import Home from './containers/Home';
// import AddBusiness from './containers/AddBusiness';
import Login from './components/Login';
import Admin from './containers/Admin'
// import {Switch} from 'react-router-dom';

const checkAuth = () => {

    const cookies = cookie.parse(document.cookie);

    return cookies["loggedIn"] ? true : false;

  };

  const ProtectedRoute = (props) => {

    const { component: Component, ...rest } = props;
  
    return (
      checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/login" /> )
    );
  };


const Router = () => {






    return (
        
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/dashboard" element={<ProtectedRoute component={ Dashboard }/>} />
                
                <Route path="/business/:id" element = {<Business/>}></Route>
                <Route path="/login" element={<Login/>} />
                <Route path="/admin" element={<ProtectedRoute component={ Admin }/>}/>
               

            </Routes>

           
            
        
    );
};


export default Router;
import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { productInputs, userInputs } from './formSource';
import './style/dark.scss';
import Home2 from './pages/home/Home2';
import Sidebar from './components/sidebar/Sidebar';


export default function Routees() {
  return (
    <div>
 <BrowserRouter>
  <Routes>
    {/* Default route to Login */}
    <Route exact path="/" element={<Login />} />

    {/* Home route */}
    <Route exact path="/nursehome" element={<Home/>} />
    <Route exact path="/new" element={<Sidebar/>} />
    {/* Users routes */}
    <Route exact path="/users" element={<List />} />
    <Route exact path="/users/:userId" element={<Single />} />
    <Route exact path="/users/new" element={<New inputs={userInputs} title="Add New User" />} />

    {/* Products routes */}
    <Route exact path="/products" element={<List />} />
    <Route exact path="/products/:productId" element={<Single />} />
    <Route exact path="/products/new" element={<New inputs={productInputs} title="Add New Product" />} />
  </Routes>
</BrowserRouter>

    </div>
  )
}

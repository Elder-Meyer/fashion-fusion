import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Box }                  from '@mui/material'

import AppFooter from '../components/layout/footer/AppFooter';
import AppAppBar from '../components/layout/navbar/AppAppBar';
import Home from "../views/Home/Home";
import Tienda  from '../views/Shop/Tienda'
import SignIn from "../views/SignIn/SignIn";
import SignUp from "../views/SignUp/SignUp";
import Terms from "../views/Terms/Terms";
import Privacy from "../views/Privacy/Privacy";
import Man from "../views/Shop/Man"
import Women from "../views/Shop/Women"
import Child from "../views/Shop/Child"
import LittleGirl from "../views/Shop/LittleGirl"
import DetalleProduct from "../views/Shop/DetalleProduct"

import ForgotPassword from "../views/ForgotPassword/ForgotPassword";
import ScrollToTop from "../components/items/ScrollToTop";
import { Fab, Toolbar } from "@mui/material";
import { BtnScrollTop } from "../components/items/btnScrollTop";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { getProducts } from '../utils/fnTienda'
import { useEffect, useState } from 'react'

function Router(props){
    const [productos, setProductos] = useState(null);

    const getProductsData = async() =>{
        const p = await getProducts();
        setProductos(p.docs);
        // console.log(p.docs)
    }

    useEffect(() => {
        getProductsData();
    }, [])

    return(
        <BrowserRouter>
            <AppAppBar />   

            <ScrollToTop>
                <Routes>
                    <Route path='/' element={<Navigate to='/inicio'/>} />
                    <Route path='/inicio'           element={<Home/>} />
                    <Route path='/sign-in'          element={<SignIn/>} />
                    <Route path='/sign-up'          element={<SignUp/>} />
                    <Route path='/terms'            element={<Terms/>} />
                    <Route path='/privacy'          element={<Privacy/>} />
                    <Route path='/forgot-password'  element={<ForgotPassword/>} />

                    {/* SubRutas -- tienda */}
                    <Route path="/tienda/" >
                        <Route index                    element={<Tienda/>} />
                        <Route path="hombre"            element={<Man/>} />
                        <Route path="mujer"             element={<Women/>} />
                        <Route path="niño"              element={<Child/>} />
                        <Route path="niña"              element={<LittleGirl/>} />
                        <Route path="*"                 element={"error"} />
                    </Route>

                    <Route path='tienda/:id'    element={<DetalleProduct productos={productos}/> } />

                    <Route path='*'  element={"error"} />
                </Routes>


                <BtnScrollTop {...props}>
                    <Fab size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </BtnScrollTop>
            </ScrollToTop>
            
            <AppFooter />
        </BrowserRouter>
    )
}

export default Router;
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppFooter from '../components/layout/footer/AppFooter';
import AppAppBar from '../components/layout/navbar/AppAppBar';
import Home from "../views/Home/Home";
import SignIn from "../views/SignIn/SignIn";
import SignUp from "../views/SignUp/SignUp";
import Terms from "../views/Terms/Terms";
import Privacy from "../views/Privacy/Privacy";
import ForgotPassword from "../views/ForgotPassword/ForgotPassword";
import ScrollToTop from "../components/items/ScrollToTop";
import { Fab, Toolbar } from "@mui/material";
import { BtnScrollTop } from "../components/items/btnScrollTop";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Router(props){
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
                    <Route path='*'                 element={"error"} />
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
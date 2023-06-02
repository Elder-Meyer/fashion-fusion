import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppAppBar';
import Home from "../Home";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Terms from "../Terms";
import Privacy from "../Privacy";
import ForgotPassword from "../ForgotPassword";
import ScrollToTop from "../modules/components/ScrollToTop";
import { Fab, Toolbar } from "@mui/material";
import { BtnScrollTop } from "../modules/components/btnScrollTop";
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
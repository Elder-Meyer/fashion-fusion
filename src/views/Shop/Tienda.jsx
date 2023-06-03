import React from 'react'
import { Grid } from '@mui/material'
import  {WrapperSingleRoute}  from '../../components/customs/WrapperSingleRoute';
import ProductCategories from './ProductCategories';
import {Bread} from '../../components/customs/Bread'
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';

const Tienda = () => {
  return (
    <WrapperSingleRoute>
      <Grid container>
        {/* B R E A D C R U M B S */}
        <Grid item xs={12}>
          <Bread migas={[{ miga: "INICIO", ruta: "/inicio", icono: <HomeIcon/> }, { miga: "TIENDA", ruta: "/tienda", icono: <StoreIcon/> }]} />
        </Grid>
      </Grid>
      <ProductCategories />
    </WrapperSingleRoute>
  )
}

export default Tienda
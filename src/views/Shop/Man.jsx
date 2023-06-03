import React, { useState, useEffect } from 'react'
import { Box, Grid, Toolbar, TextField, MenuItem, Button } from '@mui/material'
import  {WrapperSingleRoute}  from '../../components/customs/WrapperSingleRoute';
import {Bread} from '../../components/customs/Bread'
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import ManIcon from '@mui/icons-material/Man';
import { ItemListCard } from '../../components/customs/ItemListCard';
import { styled, alpha } from '@mui/material/styles';
import { Form } from "semantic-ui-react"
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import GroupSkeleton from './GroupSkeleton';

const Man = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <WrapperSingleRoute>
      <Grid container>
        {/* B R E A D C R U M B S */}
        <Grid item xs={12}>
          <Bread migas={[{ miga: "INICIO", ruta: "/inicio", icono: <HomeIcon/> }, { miga: "TIENDA", ruta: "/tienda", icono: <StoreIcon/> }, { miga: "HOMBRE", ruta: "/tienda/hombre", icono: <ManIcon/> }]} />
        </Grid>
      </Grid>

      {/* Contenido */}
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        sx={{bgcolor: "background.paper", p:1}}
      >
        {/* B U S C A D O R 1 */}
        <Grid item xs={12} >
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ 'aria-label': 'search' }}
                // value={busqueda}
                // onChange={handleChange}
                />
            </Search>
          </Toolbar>
        </Grid>

        {/* B U S C A D O R 2 -- FIltros*/}
        <Grid item  md={4} sm={6} xs={6}>
          <TextField
            component={Form.Input}
            fullWidth
            select
            label="Color"
            type="text"
            name="color"
            // onChange={(e) => setColor(e.target.value)}
            // value={color || ""}
            autoComplete="off"
            >
            {/* {colores.map((color) => (
              <MenuItem key={color.value} value={color.value}>
                {color.label}
              </MenuItem>
            ))} */}
          </TextField>
        </Grid>

        <Grid item  md={4} sm={6} xs={6}>
          <TextField
            component={Form.Input}
            fullWidth
            select
            label="Talla"
            type="text"
            name="talla"
            // onChange={(e) => setColor(e.target.value)}
            // value={color || ""}
            autoComplete="off"
            >
            {/* {colores.map((color) => (
              <MenuItem key={color.value} value={color.value}>
                {color.label}
              </MenuItem>
            ))} */}
          </TextField>
        </Grid>

        <Grid item  md={4} sm={12} xs={12}>
          <Box display="flex" height="100%">
            <Button fullWidth  variant="contained" > {/* onClick={handleSearch} */}
              Buscar
            </Button>
          </Box>
        </Grid>
      </Grid>



      <Box sx={{ m: 3, flexGrow: 1 }}>{/*O R A N G E*/}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        </Grid>      
      </Box> 
    
    </WrapperSingleRoute>
  )
}


// DISEÑOS DEL BUSCADOR
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.palette.primary.main,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
})); //FIN DE DISEÑO DE BUSCADOR

export default Man
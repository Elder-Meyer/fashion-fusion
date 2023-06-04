import React, { useState, useEffect } from 'react'
import { Box, Grid, Toolbar, TextField, MenuItem, Button } from '@mui/material'
import  {WrapperSingleRoute}  from '../../components/customs/WrapperSingleRoute';
import {Bread} from '../../components/customs/Bread'
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import WomanIcon from '@mui/icons-material/Woman';
import { ItemListCard } from '../../components/customs/ItemListCard';
import { styled, alpha } from '@mui/material/styles';
import { Form } from "semantic-ui-react"
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import GroupSkeleton from './GroupSkeleton';
import { app } from '../../config/firebaseConnection';
import { tallas, colores, marcas, tipos } from "./optionListNiña"

const LittleGirl = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [proyectos, setProyectos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [tablaProyectos, setTablaProyectos] = useState([]);
  const [docs, setDocs] = useState([]);

  const [color, setColor] = useState("");
  const [talla, setTalla] = useState("");
  const [marca, setMarca] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSearch = async () => {
    try {
      const collectionRef = app.firestore().collection("producto");
      let query = collectionRef.where('categoria', '==', 'niña');
  
      if (color !== "Todos" && color !== "") {
        query = query.where('color', '==', color);
      }
  
      if (talla !== "Todos" && talla !== "") {
        query = query.where('talla', '==', talla);
      }
  
      if (tipo !== "Todos" && tipo !== "") {
        query = query.where('nombre', '==', tipo);
      }
  
      if (marca !== "Todos" && marca !== "") {
        query = query.where('marca', '==', marca);
      }
  
      const snapshot = await query.get();
      setProyectos(snapshot.docs.map((doc) => doc));
  
    } catch (error) {
      console.error(error);
    }
  };

  const obtenerInfo = async () => {
    const docList = await app.firestore().collection("producto").get();
    const listHombre = docList.docs.filter((doc) => doc.data().categoria === 'niña');
    setProyectos(listHombre);    
    setDocs(listHombre);
    setTablaProyectos(listHombre);
  }

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value.toString().toUpperCase());
    console.log(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    // eslint-disable-next-line
   var resultadoBusqueda = tablaProyectos.filter((elemento) => {
     if (elemento.data().nombre.includes(terminoBusqueda)) {
       return elemento;
     }
   });
   setProyectos(resultadoBusqueda);
   setDocs(resultadoBusqueda);
  }

  useEffect(() => {   
    obtenerInfo()
    // Simulamos una carga de datos de 2 segundos
    const timeoutId = setTimeout(() => {
      // Una vez que se han cargado los datos, actualizamos el estado
      setIsLoading(false);
    }, 1000);
    // Limpiamos el timeout si el componente se desmonta antes de que termine la carga
    return () => clearTimeout(timeoutId);
  }, [])
  return (
    <WrapperSingleRoute>
      <Grid container>
        {/* B R E A D C R U M B S */}
        <Grid item xs={12}>
          <Bread migas={[{ miga: "INICIO", ruta: "/inicio", icono: <HomeIcon/> }, { miga: "TIENDA", ruta: "/tienda", icono: <StoreIcon/> }, { miga: "NIÑA", ruta: "/tienda/niña", icono: <WomanIcon/> }]} />
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
                value={busqueda}
                onChange={handleChange}
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
            onChange={(e) => setColor(e.target.value)}
            value={color || ""}
            autoComplete="off"
            >
            {colores.map((color) => (
              <MenuItem key={color.value} value={color.value}>
                {color.label}
              </MenuItem>
            ))} 
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
            onChange={(e) => setTalla(e.target.value)}
            value={talla || ""}
            autoComplete="off"
            >
            {tallas.map((talla) => (
              <MenuItem key={talla.value} value={talla.value}>
                {talla.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item  md={4} sm={12} xs={12}>
          <Box display="flex" height="100%">
            <Button fullWidth  variant="contained"  onClick={handleSearch}> 
              Buscar
            </Button>
          </Box>
        </Grid>

        <Grid item  md={4} sm={6} xs={6}>
          <TextField
            component={Form.Input}
            fullWidth
            select
            label="Marca"
            type="text"
            name="marca"
            onChange={(e) => setMarca(e.target.value)}
            value={marca || ""}
            autoComplete="off"
            >
            {marcas.map((marca) => (
              <MenuItem key={marca.value} value={marca.value}>
                {marca.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item  md={4} sm={6} xs={6}>
          <TextField
            component={Form.Input}
            fullWidth
            select
            label="Tipo"
            type="text"
            name="tipo"
            onChange={(e) => setTipo(e.target.value)}
            value={tipo || ""}
            autoComplete="off"
            >
            {tipos.map((tipo) => (
              <MenuItem key={tipo.value} value={tipo.value}>
                {tipo.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        
      </Grid>




      <Box sx={{ m: 3, flexGrow: 1 }}>{/*O R A N G E*/}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            isLoading ? (
              <GroupSkeleton />
            )
              :
              (proyectos.map(proyecto => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={proyecto.id}>
                    <ItemListCard
                      key={proyecto.id}
                      id={proyecto.id}
                      titulo={`${proyecto.data().nombre} $MXN ${proyecto.data().costo}`}
                      descripcion={proyecto.data().descripcion}
                      ancla={`../${proyecto.id}`}
                      img={proyecto.data().url} />
                  </Grid>
                )
              }))
          }
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
export default LittleGirl
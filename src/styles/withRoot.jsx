import React, {useState, useEffect} from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { db } from '../config/firebase';
import { LoaderAnimation } from '../components/customs/LoaderAnimation';

export default function withRoot(Component) {
  function WithRoot(props) {
    const [isLoading, setIsLoading] = useState(true); // Agrega un estado para indicar si los datos se están cargando o no
    const [themeColors, setThemeColors] = useState({});

    const fetchThemeColors = async () => {
      try {
        setIsLoading(true);
        const docRef = doc(db, 'settingsApp', 'C5sl8yZRgXubsme5uBws');
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          // Asigna los valores de los colores a tu estado
          setThemeColors(docSnap.data());
        } else {
          console.log('El documento no existe');
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos del documento:', error);
        setIsLoading(false);
      }
    };
    
    useEffect(() => {
      fetchThemeColors();
    }, []);
    
    const theme = createTheme({
      palette: {
        primary: {
          light: themeColors.primaryColorLight || '#000000', // Asigna un valor predeterminado en caso de que el color no esté disponible
          main: themeColors.primaryColor || '#000000', // Asigna un valor predeterminado en caso de que el color no esté disponible
          dark: themeColors.primaryColorDark || '#000000', // Asigna un valor predeterminado en caso de que el color no esté disponible
        },
        secondary: {
          light:  themeColors.secondaryColorLight || '#000000', // Asigna un valor predeterminado en caso de que el color no esté disponible
          main:   themeColors.secondaryColor || '#000000', // Asigna un valor predeterminado en caso de que el color no esté disponible
          dark:   themeColors.secondaryColorDark || '#000000', // Asigna un valor predeterminado en caso de que el color no esté disponible
        },
      },
    });
    

    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        {
          isLoading ? (
            <LoaderAnimation/>
        ) : (
          <Component {...props} />
        )
        }

      </ThemeProvider>
    );
  }

  return WithRoot;
}

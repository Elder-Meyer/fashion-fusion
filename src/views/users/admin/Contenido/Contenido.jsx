import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { firestore, storage } from '../../../../config/firebase';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Snackbar, Stack } from '@mui/material';

export const Contenido = () => {
  const [productoData, setProductoData] = useState({
    categoria: '',
    color: '',
    costo: '',
    descripcion: '',
    marca: '',
    nombre: '',
    talla: '',
    imagen: null,
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleInputChange = (e) => {
    setProductoData({ ...productoData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setProductoData({ ...productoData, imagen: e.target.files[0] });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Subir la imagen al almacenamiento de Firebase
      const storageRef = ref(storage, `/PRUEBA/${productoData.imagen.name}`);
      await uploadBytes(storageRef, productoData.imagen);

      // Obtener la URL de descarga de la imagen
      const imageUrl = await getDownloadURL(storageRef);

      // Crear un nuevo documento en la colección "producto" de Firestore
      await addDoc(collection(firestore, 'producto'), {
        categoria: productoData.categoria,
        color: productoData.color,
        costo: productoData.costo,
        descripcion: productoData.descripcion,
        marca: productoData.marca,
        nombre: productoData.nombre,
        talla: productoData.talla,
        url: imageUrl,
      });

      // Limpiar el formulario después de la inserción exitosa
      setProductoData({
        categoria: '',
        color: '',
        costo: '',
        descripcion: '',
        marca: '',
        nombre: '',
        talla: '',
        imagen: null,
      });

      setSnackbarMessage('Producto agregado correctamente');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      setSnackbarMessage('Error al agregar el producto');
      setSnackbarOpen(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <FormControl>
          <InputLabel>Categoría</InputLabel>
          <Select
            name="categoria"
            value={productoData.categoria}
            onChange={handleInputChange}
          >
            <MenuItem value="">Selecciona una categoría</MenuItem>
            <MenuItem value="hombre">Hombre</MenuItem>
            <MenuItem value="mujer">Mujer</MenuItem>
            <MenuItem value="niño">Niño</MenuItem>
            <MenuItem value="niña">Niña</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Color</InputLabel>
          <Select
            name="color"
            value={productoData.color}
            onChange={handleInputChange}
          >
            <MenuItem value="">Selecciona un color</MenuItem>
            <MenuItem value="rojo">Rojo</MenuItem>
            <MenuItem value="blanco">Blanco</MenuItem>
            <MenuItem value="azul">Azul</MenuItem>
            <MenuItem value="negro">Negro</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="text"
          name="costo"
          label="Costo"
          value={productoData.costo}
          onChange={handleInputChange}
        />
        <TextField
          type="text"
          name="descripcion"
          label="Descripción"
          value={productoData.descripcion}
          onChange={handleInputChange}
        />
        <FormControl>
          <InputLabel>Marca</InputLabel>
          <Select
            name="marca"
            value={productoData.marca}
            onChange={handleInputChange}
          >
            <MenuItem value="">Selecciona una marca</MenuItem>
            <MenuItem value="Calvin Klein">Calvin Klein</MenuItem>
            <MenuItem value="Puma">Puma</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="text"
          name="nombre"
          label="Nombre"
          value={productoData.nombre}
          onChange={handleInputChange}
        />
        <FormControl>
          <InputLabel>Talla</InputLabel>
          <Select
            name="talla"
            value={productoData.talla}
            onChange={handleInputChange}
          >
            <MenuItem value="">Selecciona una talla</MenuItem>
            <MenuItem value="chica">Chica</MenuItem>
            <MenuItem value="mediana">Mediana</MenuItem>
            <MenuItem value="grande">Grande</MenuItem>
            <MenuItem value="unitalla">Unitalla</MenuItem>
          </Select>
        </FormControl>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Agregar Producto
        </Button>
      </Stack>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </form>
  );
};

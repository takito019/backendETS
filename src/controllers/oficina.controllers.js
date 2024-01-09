import Oficina from '../models/oficina.models.js';

//Funcion para obtener todos los productos
export const getOficinas = async (req, res) => {
    try {
      const oficina = await Oficina.find({ user: req.user.id }).populate("user");
      res.json(oficina);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ["Error al obtener los productos"] });
    }
  };
  
  //Funcion para crear un producto
  export const createOficina = async (req, res) => {
    try {
      const { numeroserie, tipo, proveedor, descripcion, estatus, cantidad, responsable, ubicacion } = req.body;
      const newOficina = new Oficina({
        numeroserie,
        tipo, 
        proveedor,
        descripcion,
        estatus,
        cantidad,
        responsable,
        ubicacion,
        user: req.user.id,
      });
      const savedOficina = await newOficina.save();
      res.json(savedOficina);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ["Error al crear un producto"] });
    }
  };
  
  //Funcion para obtener un producto
  export const getOficina = async (req, res) => {
    try {
      const oficina = await Oficina.findById(req.params.id).populate("user");
      if (!oficina)
        return res.status(400).json({ message: ["Producto no encontrado"] });
      res.json(oficina);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ["Error al obtener el producto"] });
    }
  };
  
  //Funcion para eliminar un producto
  export const deleteOficina = async (req, res) => {
    try {
      const oficina = await oficina.findByIdAndDelete(req.params.id);
      if (!oficina)
        return res.status(400).json({ message: ["Producto no encontrado"] });
      res.json(oficina);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ["Error al eliminar el producto"] });
    }
  };
  
  //Funcion para editar un producto
  export const editOficina = async (req, res) => {
    try {
      const oficina = await Oficina.findByIdAndUpdate(req.params.id, req.body);
      if (!oficina)
        return res.status(404).json({ message: ["Producto no encontrado"] });
      res.json(oficina);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ["Error al actualizar el producto"] });
    }
  };
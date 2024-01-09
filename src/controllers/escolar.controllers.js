import Escolar from '../models/escolar.models.js';

//Funcion para obtener todos los productos
export const getEscolares = async (req, res) => {
    try {
      const escolar = await Escolar.find({ user: req.user.id }).populate("user");
      res.json(escolar);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ["Error al obtener los productos"] });
    }
  };
  
  //Funcion para crear un producto
  export const createEscolar = async (req, res) => {
    try {
      const { numSerie, tipo, proveedor, descripcion, estatus, cantidad, responsable, ubicacion } = req.body;
      const newEscolar = new Escolar({
        numSerie,
        tipo, 
        proveedor,
        descripcion,
        estatus,
        cantidad,
        responsable,
        ubicacion,
        user: req.user.id,
      });
      const savedEscolar = await newEscolar.save();
      res.json(savedEscolar);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ["Error al crear un producto"] });
    }
  };
  
  //Funcion para obtener un producto
  export const getEscolar = async (req, res) => {
    try {
      const escolar = await Escolar.findById(req.params.id).populate("user");
      if (!escolar)
        return res.status(400).json({ message: ["Producto no encontrado"] });
      res.json(escolar);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ["Error al obtener el producto"] });
    }
  };
  
  //Funcion para eliminar un producto
  export const deleteEscolar = async (req, res) => {
    try {
      const escolar = await Escolar.findByIdAndDelete(req.params.id);
      if (!escolar)
        return res.status(400).json({ message: ["Producto no encontrado"] });
      res.json(escolar);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ["Error al eliminar el producto"] });
    }
  };
  
  //Funcion para editar un producto
  export const editEscolar = async (req, res) => {
    try {
      const escolar = await Escolar.findByIdAndUpdate(req.params.id, req.body);
      if (!escolar)
        return res.status(404).json({ message: ["Producto no encontrado"] });
      res.json(escolar);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ["Error al actualizar el producto"] });
    }
  };
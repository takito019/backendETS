import Computo from "../models/computo.models.js";

//Funcion para obtener todos los computos
export const getComputos = async (req, res) => {
  try {
    const computos = await Computo.find({ user: req.user.id }).populate("user");
    res.json(computos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al obtener los productos"] });
  }
};

//Funcion para crear un computo
export const createComputo = async (req, res) => {
  console.log('createComputo');
  try {
    const {
      numSerie,
      tipo,
      modelo,
      sistemaOp,
      procesador,
      ram,
      hd,
      estatus,
      cantidad,
      responsable,
      ubicacion,
      proveedor,
    } = req.body;
    const newComputo = new Computo({
      numSerie,
      tipo,
      modelo,
      sistemaOp,
      procesador,
      ram,
      hd,
      estatus,
      cantidad,
      responsable,
      ubicacion,
      proveedor,
      user: req.user.id,
    });
    const savedComputo = await newComputo.save();
    res.json(savedComputo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al crear un producto"] });
  }
};

//Funcion para obtener un computo
export const getComputo = async (req, res) => {
  try {
    const computo = await Computo.findById(req.params.id).populate("user");
    if (!computo)
      return res.status(404).json({ message: ["Computo no encontrado"] });
    res.json(computo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al obtener el producto"] });
  }
};

//Funcion para eliminar un computo
export const deleteComputo = async (req, res) => {
  try {
    const computo = await Computo.findByIdAndDelete(req.params.id);
    if (!computo)
      return res.status(404).json({ message: ["Producto no encontrado"] });
    res.json(computo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al eliminar el producto"] });
  }
};

//Funcion para editar un computo
export const editComputo = async (req, res) => {
  try {
    const computo = await Computo.findByIdAndUpdate(req.params.id, req.body);
    if (!computo)
      return res.status(404).json({ message: ["Producto no encontrado"] });
    res.json(computo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al actualizar el producto"] });
  }
};

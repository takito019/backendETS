import Papeleria from "../models/papeleria.models.js";

//Funcion para obtener todos los elementos de papelería
export const getPapelerias = async (req, res) => {
  try {
    const papeleria = await Papeleria.find({ user: req.user.id }).populate("user");
    res.json(papeleria);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al obtener los productos"] });
  }
};

//Funcion para crear un elemento de papeleria
export const createPapeleria = async (req, res) => {
  try {
    const {
      tipo,
      descripcion,
      proveedor,
      estatus,
      cantidad,
      responsable,
      ubicacion,
    } = req.body;
    const newPapeleria = new Papeleria({
        tipo,
        descripcion,
        proveedor,
        estatus,
        cantidad,
        responsable,
        ubicacion,
      user: req.user.id,
    });
    const savedPapeleria = await newPapeleria.save();
    res.json(savedPapeleria);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al crear un producto"] });
  }
};

//Funcion para obtener un pelemento de papeleria
export const getPapeleria = async (req, res) => {
  try {
    const papeleria = await Papeleria.findById(req.params.id).populate("user");
    if (!papeleria)
      return res.status(404).json({ message: ["Papelería no encontrado"] });
    res.json(papeleria);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al obtener el elemento de papelería"] });
  }
};

//Funcion para eliminar un periferico
export const deletePapeleria = async (req, res) => {
  try {
    const papeleria = await papeleria.findByIdAndDelete(req.params.id);
    if (!papeleria)
      return res.status(404).json({ message: ["Papelería no encontrado"] });
    res.json(papeleria);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al eliminar el elemento de papelería"] });
  }
};

//Funcion para editar un periferico
export const editPapeleria = async (req, res) => {
  try {
    const papeleria = await Papeleria.findByIdAndUpdate(req.params.id, req.body);
    if (!papeleria)
      return res.status(404).json({ message: ["Papelería no encontrado"] });
    res.json(papeleria);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al actualizar el elemento de papelería"] });
  }
};

import Perifericos from "../models/perifericos.models.js";

//Funcion para obtener todos los perifericos
export const getPerifericos = async (req, res) => {
  try {
    const perifericos = await Perifericos.find({ user: req.user.id }).populate("user");
    res.json(perifericos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al obtener los productos"] });
  }
};

//Funcion para crear un periferico
export const createPeriferico = async (req, res) => {
  try {
    const {
      numSerie,
      tipo,
      descripcion,
      modelo,
      estatus,
      cantidad,
      responsable,
      ubicacion,
      proveedor,
    } = req.body;
    const newPeriferico = new Perifericos({
      numSerie,
      tipo,
      descripcion,
      modelo,
      estatus,
      cantidad,
      responsable,
      ubicacion,
      proveedor,
      user: req.user.id,
    });
    const savedPeriferico = await newPeriferico.save();
    res.json(savedPeriferico);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al crear un producto"] });
  }
};

//Funcion para obtener un periferico
export const getPeriferico = async (req, res) => {
  try {
    const periferico = await Perifericos.findById(req.params.id).populate("user");
    if (!periferico)
      return res.status(404).json({ message: ["Periferico no encontrado"] });
    res.json(periferico);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al obtener el periferico"] });
  }
};

//Funcion para eliminar un periferico
export const deletePeriferico = async (req, res) => {
  try {
    const periferico = await Perifericos.findByIdAndDelete(req.params.id);
    if (!periferico)
      return res.status(404).json({ message: ["Periferico no encontrado"] });
    res.json(periferico);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al eliminar el periferico"] });
  }
};

//Funcion para editar un periferico
export const editPeriferico = async (req, res) => {
  try {
    const periferico = await Perifericos.findByIdAndUpdate(req.params.id, req.body);
    if (!periferico)
      return res.status(404).json({ message: ["Periferico no encontrado"] });
    res.json(periferico);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al actualizar el periferico"] });
  }
};

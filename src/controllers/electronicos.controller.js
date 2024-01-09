import Electronicos from "../models/electronicos.models.js";

//Funcion para obtener todos los electronicos
export const getElectronicos = async (req, res) => {
  try {
    const electronicos = await Electronicos.find({ user: req.user.id }).populate("user");
    res.json(electronicos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al obtener los productos"] });
  }
};

//Funcion para crear un electronico
export const createElectronico = async (req, res) => {
  try {
    const {
      numSerie,
      descripcion,
      modelo,
      estatus,
      cantidad,
      responsable,
      ubicacion,
      proveedor,
    } = req.body;
    const newElectronico =new Electronicos({
      numSerie,
      descripcion,
      modelo,
      estatus,
      cantidad,
      responsable,
      ubicacion,
      proveedor,
      user: req.user.id,
    });
    const savedElectronico = await newElectronico.save();
    res.json(savedElectronico);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al crear un producto"] });
  }
};

//Funcion para obtener un electronico
export const getElectronico = async (req, res) => {
  try {
    const electronico = await Electronicos.findById(req.params.id).populate("user");
    if (!electronico)
      return res.status(404).json({ message: ["Elemento no encontrado"] });
    res.json(electronico);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al obtener el producto"] });
  }
};

//Funcion para eliminar un electronico
export const deleteElectronico = async (req, res) => {
  try {
    const electronico = await Electronicos.findByIdAndDelete(req.params.id);
    if (!electronico)
      return res.status(404).json({ message: ["Producto no encontrado"] });
    res.json(electronico);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al eliminar el producto"] });
  }
};

//Funcion para editar un computo
export const editElectronico = async (req, res) => {
  try {
    const electronico = await Electronicos.findByIdAndUpdate(req.params.id, req.body);
    if (!electronico)
      return res.status(404).json({ message: ["Producto no encontrado"] });
    res.json(electronico);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al actualizar el producto"] });
  }
};

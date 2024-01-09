import Consumibles from "../models/consumibles.models.js";

//Funcion para obtener todos los elementos consumible
export const getConsumibles = async (req, res) => {
  try {
    const consumible = await Consumibles.find({ user: req.user.id }).populate("user");
    res.json(consumible);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al obtener los productos"] });
  }
};

//Funcion para crear un elemento consumible
export const createConsumible = async (req, res) => {
  try {
    const {
      tipo, descripcion, proveedor, estatus, cantidad, responsable, ubicacion } = req.body;
    const newConsumible = new Consumibles({
        tipo,
        descripcion,
        proveedor,
        estatus,
        cantidad,
        responsable,
        ubicacion,
        user: req.user.id,
    });
    const savedConsumible = await newConsumible.save();
    res.json(savedConsumible);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al crear un producto"] });
  }
};

//Funcion para obtener un elemento consumible
export const getConsumible = async (req, res) => {
  try {
    const consumible = await Consumibles.findById(req.params.id).populate("user");
    if (!consumible)
      return res.status(404).json({ message: ["Consumible no encontrado"] });
    res.json(consumible);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al obtener el elemento consumible"] });
  }
};

//Funcion para eliminar un consumible
export const deleteConsumible = async (req, res) => {
  try {
    const consumible = await consumible.findByIdAndDelete(req.params.id);
    if (!consumible)
      return res.status(404).json({ message: ["Consumible no encontrado"] });
    res.json(consumible);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al eliminar el elemento consumible"] });
  }
};

//Funcion para editar un consumible
export const editConsumible = async (req, res) => {
  try {
    const consumible = await Consumibles.findByIdAndUpdate(req.params.id, req.body);
    if (!consumible)
      return res.status(404).json({ message: ["Consumible no encontrado"] });
    res.json(consumible);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al actualizar el elemento consumible"] });
  }
};

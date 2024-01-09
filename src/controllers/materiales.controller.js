import Materiales from "../models/materiales.models.js";

//Funcion para obtener todos los elementos consumible
export const getMateriales = async (req, res) => {
  try {
    const material = await Materiales.find({ user: req.user.id }).populate("user");
    res.json(material);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al obtener los productos"] });
  }
};

//Funcion para crear un elemento material
export const createMateriales = async (req, res) => {
  try {
    const {
      numSerie, descripcion, proveedor, estatus, cantidad, responsable, ubicacion } = req.body;
    const newMaterial = new Materiales({
        numSerie,
        descripcion,
        proveedor,
        estatus,
        cantidad,
        responsable,
        ubicacion,
        user: req.user.id,
    });
    const savedMaterial = await newMaterial.save();
    res.json(savedMaterial);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al crear un producto"] });
  }
};

//Funcion para obtener un elemento consumible
export const getMaterial = async (req, res) => {
  try {
    const material = await Materiales.findById(req.params.id).populate("user");
    if (!material)
      return res.status(404).json({ message: ["Material no encontrado"] });
    res.json(material);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al obtener el elemento material"] });
  }
};

//Funcion para eliminar un consumible
export const deleteMateriales = async (req, res) => {
  try {
    const material = await material.findByIdAndDelete(req.params.id);
    if (!material)
      return res.status(404).json({ message: ["Material no encontrado"] });
    res.json(material);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al eliminar el elemento material"] });
  }
};

//Funcion para editar un consumible
export const editMateriales = async (req, res) => {
  try {
    const material = await Materiales.findByIdAndUpdate(req.params.id, req.body);
    if (!material)
      return res.status(404).json({ message: ["Material no encontrado"] });
    res.json(material);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al actualizar el elemento Material"] });
  }
};
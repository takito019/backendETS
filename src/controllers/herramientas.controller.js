import Herramientas from "../models/herramientas.models.js";

//Funcion para obtener todos los elementos consumible
export const getHerramientas = async (req, res) => {
  try {
    const herramienta = await Herramientas.find({ user: req.user.id }).populate("user");
    res.json(herramienta);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al obtener los productos"] });
  }
};

//Funcion para crear un elemento consumible
export const createHerramienta = async (req, res) => {
  try {
    const { tipo,numSerie, descripcion, proveedor, estatus, cantidad, responsable, ubicacion } = req.body;
    const newHerramienta = new Herramientas({
        tipo,
        numSerie,
        descripcion,
        proveedor,
        estatus,
        cantidad,
        responsable,
        ubicacion,
        user: req.user.id,
    });
    const savedHerramienta= await newHerramienta.save();
    res.json(savedHerramienta);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al crear un producto"] });
  }
};

//Funcion para obtener un elemento consumible
export const getHerramienta= async (req, res) => {
  try {
    const herramienta = await Herramientas.findById(req.params.id).populate("user");
    if (!herramienta)
      return res.status(404).json({ message: ["Herramienta no encontrado"] });
    res.json(herramienta);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al obtener el elemento la herramienta"] });
  }
};

//Funcion para eliminar un consumible
export const deleteHerramienta = async (req, res) => {
  try {
    const herramienta = await herramienta.findByIdAndDelete(req.params.id);
    if (!herramienta)
      return res.status(404).json({ message: ["Herramienta no encontrada"] });
    res.json(herramienta);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al eliminar el elemento herramienta"] });
  }
};

//Funcion para editar un consumible
export const editHerramienta= async (req, res) => {
  try {
    const herramienta = await Herramientas.findByIdAndUpdate(req.params.id, req.body);
    if (!herramienta)
      return res.status(404).json({ message: ["Herramienta no encontrado"] });
    res.json(herramienta);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: ["Error al actualizar el elemento herramienta"] });
  }
};
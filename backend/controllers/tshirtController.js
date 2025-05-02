const { Tshirt } = require("../models/tshirt.models");

const getAllTshirts = async (req, res) => {
  const { size, color, price } = req.query;
  const filters = {};

  try {
    if (size) {
      const allSizes = Array.isArray(size) ? size : size.split(",");
      filters.size = { $in: allSizes };
    }

    if (color) {
      const allColors = Array.isArray(color) ? color : color.split(",");
      filters.color = { $in: allColors };
    }

    if (price) {
      const allPrices = Array.isArray(price) ? price : price.split(",");
      filters.price = { $in: allPrices };
    }

    const allTshirts = await Tshirt.find(filters);

    if (!allTshirts)
      return res.status(404).json({ message: "Tshirts didn't found" });

    return res.status(200).json({ message: "Tshirts found", allTshirts });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getSingleTshirt = async (req, res) => {
  const tshirtId = req.params.id;

  try {
    const tshirt = await Tshirt.findById(tshirtId);

    if (!tshirt)
      return res.status(404).json({ message: "Single tshirt didn't found" });

    res.status(200).json({ message: "Single tshirt found", tshirt });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const addTshirt = async (req, res) => {
  const tshirtData = req.body;

  try {
    const newTshirt = new Tshirt(tshirtData);
    const savedTshirt = await newTshirt.save();

    if (!savedTshirt)
      return res.status(404).json({ message: "Tshirt didn't save" });

    res.status(200).json({ message: "Tshirt got saved", savedTshirt });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateTshirt = async (req, res) => {
  const tshirtId = req.params.id;
  const tshirtToUpdate = req.body;

  try {
    const updatedTshirt = await Tshirt.findByIdAndUpdate(
      tshirtId,
      tshirtToUpdate,
      { new: true }
    );

    if (!updatedTshirt)
      return res.status(404).json({ message: "Tshirt didn't update" });

    res.status(200).json({ message: "Tshirt got update", updatedTshirt });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteTshirt = async (req, res) => {
  const tshirtId = req.params.id;

  try {
    const deletedTshirt = await Tshirt.findByIdAndDelete(tshirtId);

    if (!deletedTshirt)
      return res.status(404).json({ message: "Tshirt didn't delete" });

    res.status(200).json({ message: "Tshirt got delete", deletedTshirt });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllTshirts,
  getSingleTshirt,
  addTshirt,
  updateTshirt,
  deleteTshirt,
};

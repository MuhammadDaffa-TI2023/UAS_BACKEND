// Import model Alumni dan operator Op dari Sequelize
const Alumni = require("../models/Alumni");
const { Op } = require("sequelize");

// Mendapatkan semua data alumni
const getAllAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.findAll();
    res.status(200).json({
      message: "Successfully retrieved all alumni",
      data: alumni,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Mendapatkan data alumni berdasarkan ID
const getAlumniById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const alumni = await Alumni.findByPk(id);

    if (!alumni) {
      return res.status(404).json({
        message: "Alumni not found",
      });
    }

    res.status(200).json({
      message: "Successfully retrieved alumni by ID",
      data: alumni,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Menambahkan data alumni baru
const createAlumni = async (req, res) => {
  try {
    const { name, graduation_year, status } = req.body;

    if (!name || !graduation_year || !status) {
      return res.status(400).json({
        message: "Name, graduation year, and status are required",
      });
    }

    const newAlumni = await Alumni.create(req.body);
    res.status(201).json({
      message: "Alumni successfully created",
      data: newAlumni,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Mengupdate data alumni berdasarkan ID
const updateAlumni = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, graduation_year, status } = req.body;

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const [updated] = await Alumni.update(req.body, {
      where: { id },
    });

    if (!updated) {
      return res.status(404).json({
        message: "Alumni not found",
      });
    }

    res.status(200).json({
      message: "Alumni successfully updated",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Menghapus data alumni berdasarkan ID
const deleteAlumni = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const deleted = await Alumni.destroy({
      where: { id },
    });

    if (!deleted) {
      return res.status(404).json({
        message: "Alumni not found",
      });
    }

    res.status(200).json({
      message: "Alumni successfully deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Mencari alumni berdasarkan nama
const searchAlumniByName = async (req, res) => {
  try {
    const { name } = req.params;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const alumni = await Alumni.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });

    if (alumni.length === 0) {
      return res.status(404).json({
        message: "Alumni not found",
        data: [],
      });
    }

    res.status(200).json({
      message: "Successfully retrieved alumni by name",
      data: alumni,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Ekspor semua fungsi
module.exports = {
  getAllAlumni,
  getAlumniById,
  createAlumni,
  updateAlumni,
  deleteAlumni,
  searchAlumniByName,
};
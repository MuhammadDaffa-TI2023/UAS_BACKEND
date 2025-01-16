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

    const alumni = await Alumni.findByPk(id);

    if (!alumni) {
      return res.status(404).json({ message: "Alumni not found" });
    }

    res.status(200).json({
      message: "Successfully retrieved alumni by ID",
      data: alumni,
    });
  } catch (error) {
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

    const [updated] = await Alumni.update(req.body, { where: { id } });

    if (!updated) {
      return res.status(404).json({ message: "Alumni not found" });
    }

    res.status(200).json({ message: "Alumni successfully updated" });
  } catch (error) {
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

    const deleted = await Alumni.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ message: "Alumni not found" });
    }

    res.status(200).json({ message: "Alumni successfully deleted" });
  } catch (error) {
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

    const alumni = await Alumni.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });

    if (alumni.length === 0) {
      return res.status(404).json({ message: "Alumni not found", data: [] });
    }

    res.status(200).json({
      message: "Successfully retrieved alumni by name",
      data: alumni,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Mencari resource berdasarkan nama
const searchResource = async (req, res) => {
  try {
    const { name } = req.params;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const resources = await Alumni.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });

    if (resources.length === 0) {
      return res.status(404).json({
        message: "Resource not found",
        data: [],
      });
    }

    res.status(200).json({
      message: "Successfully retrieved resource by name",
      data: resources,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Mendapatkan resource fresh graduate
const getFreshGraduateResource = async (req, res) => {
  try {
    const freshGraduates = await Alumni.findAll({
      where: { status: "fresh graduate" },
    });

    if (freshGraduates.length === 0) {
      return res.status(404).json({
        message: "No fresh graduate resources found",
        data: [],
      });
    }

    res.status(200).json({
      message: "Successfully retrieved fresh graduate resources",
      data: freshGraduates,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Mendapatkan resource yang sudah bekerja
const getEmployedResource = async (req, res) => {
  try {
    const employedResources = await Alumni.findAll({
      where: { status: "employed" },
    });

    if (employedResources.length === 0) {
      return res.status(404).json({
        message: "No employed resources found",
        data: [],
      });
    }

    res.status(200).json({
      message: "Successfully retrieved employed resources",
      data: employedResources,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// Mendapatkan resource yang belum bekerja
const getUnemployedResource = async (req, res) => {
  try {
    const unemployedResources = await Alumni.findAll({
      where: { status: "unemployed" },
    });

    if (unemployedResources.length === 0) {
      return res.status(404).json({
        message: "No unemployed resources found",
        data: [],
      });
    }

    res.status(200).json({
      message: "Successfully retrieved unemployed resources",
      data: unemployedResources,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = {
  getAllAlumni,
  getAlumniById,
  createAlumni,
  updateAlumni,
  deleteAlumni,
  searchAlumniByName,
  searchResource,
  getFreshGraduateResource,
  getEmployedResource,
  getUnemployedResource,
};

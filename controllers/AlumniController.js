// Import model Alumni
const Alumni = require("../models/Alumni");
const { Sequelize } = require("sequelize");

// Membuat class AlumniController
class AlumniController {
  // Mendapatkan semua data alumni
  async getAllAlumni(req, res) {
    try {
      const alumni = await Alumni.findAll();
      if (alumni.length === 0) {
        return res.status(200).json({ message: "Data is empty", data: [] });
      }
      res.status(200).json({ message: "Get All Resource", data: alumni });
    } catch (error) {
      res.status(500).json({ message: "Error fetching data", error });
    }
  }

  // Mendapatkan alumni berdasarkan ID
  async getAlumniById(req, res) {
    try {
      const { id } = req.params;
      const alumni = await Alumni.findByPk(id);
      if (!alumni) {
        return res.status(404).json({ message: "Resource not found" });
      }
      res.status(200).json({ message: "Get Detail Resource", data: alumni });
    } catch (error) {
      res.status(500).json({ message: "Error fetching data", error });
    }
  }

  // Menambahkan alumni baru
  async createAlumni(req, res) {
    try {
      const data = req.body;
      const newAlumni = await Alumni.create(data);
      res.status(201).json({
        message: "Resource is added successfully",
        data: newAlumni,
      });
    } catch (error) {
      res.status(422).json({ message: "Validation error", error });
    }
  }

  // Memperbarui alumni berdasarkan ID
  async updateAlumni(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const alumni = await Alumni.findByPk(id);

      if (!alumni) {
        return res.status(404).json({ message: "Resource not found" });
      }

      await alumni.update(data);
      res.status(200).json({
        message: "Resource is updated successfully",
        data: alumni,
      });
    } catch (error) {
      res.status(500).json({ message: "Error updating data", error });
    }
  }

  // Menghapus alumni berdasarkan ID
  async deleteAlumni(req, res) {
    try {
      const { id } = req.params;
      const alumni = await Alumni.findByPk(id);

      if (!alumni) {
        return res.status(404).json({ message: "Resource not found" });
      }

      await alumni.destroy();
      res.status(200).json({ message: "Resource is deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting data", error });
    }
  }

  // Mencari alumni berdasarkan nama
  async searchAlumniByName(req, res) {
    try {
      const { name } = req.query;
      const alumni = await Alumni.findAll({
        where: {
          name: {
            [Sequelize.Op.like]: `%${name}%`,
          },
        },
      });

      if (alumni.length === 0) {
        return res.status(404).json({ message: "Resource not found" });
      }

      res.status(200).json({
        message: "Get searched resource",
        data: alumni,
      });
    } catch (error) {
      res.status(500).json({ message: "Error searching data", error });
    }
  }

  // Mendapatkan alumni yang baru lulus (fresh graduate)
  async getFreshGraduate(req, res) {
    try {
      const alumni = await Alumni.findAll({
        where: {
          status: "fresh-graduate",
        },
      });

      res.status(200).json({
        message: "Get fresh graduate resource",
        total: alumni.length,
        data: alumni,
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching data", error });
    }
  }

  // Mendapatkan alumni yang sudah bekerja (employed)
  async getEmployed(req, res) {
    try {
      const alumni = await Alumni.findAll({
        where: {
          status: "employed",
        },
      });

      res.status(200).json({
        message: "Get employed resource",
        total: alumni.length,
        data: alumni,
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching data", error });
    }
  }

  // Mendapatkan alumni yang belum bekerja (unemployed)
  async getUnemployed(req, res) {
    try {
      const alumni = await Alumni.findAll({
        where: {
          status: "unemployed",
        },
      });

      res.status(200).json({
        message: "Get unemployed resource",
        total: alumni.length,
        data: alumni,
      });
    } catch (error) {
      res.status(500).json({ message: "Error fetching data", error });
    }
  }
}

// Membuat object AlumniController
const object = new AlumniController();

// Export object AlumniController
module.exports = object;

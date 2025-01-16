const express = require("express");
const {
  getAllAlumni,
  getAlumniById,
  createAlumni,
  updateAlumni,
  deleteAlumni,
  searchAlumniByName,
} = require("../controllers/AlumniController");

const router = express.Router();

// Define routes
// Mendapatkan semua data alumni
router.get("/alumni", getAllAlumni); 

 // Mendapatkan data alumni berdasarkan ID
router.get("/alumni/:id", getAlumniById);

// Menambahkan data alumni
router.post("/alumni", createAlumni); 

// Mengupdate data alumni berdasarkan ID
router.put("/alumni/:id", updateAlumni); 

// Menghapus data alumni berdasarkan ID
router.delete("/alumni/:id", deleteAlumni); 

// Mencari alumni berdasarkan nama
router.get("/alumni/search/:name", searchAlumniByName); 
module.exports = router;

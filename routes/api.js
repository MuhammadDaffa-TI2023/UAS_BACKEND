// Import AlumniController
const AlumniController = require("../controllers/AlumniController");

// Import express
const express = require("express");

// Membuat object router
const router = express.Router();

/**
 * Routing untuk data alumni
 */

// Mendapatkan semua data alumni
router.get("/alumni", AlumniController.getAllAlumni); 

// Mendapatkan data alumni berdasarkan ID
router.get("/alumni/:id", AlumniController.getAlumniById); 

// Menambahkan data alumni baru
router.post("/alumni", AlumniController.createAlumni); 

// Mengupdate data alumni berdasarkan ID
router.put("/alumni/:id", AlumniController.updateAlumni); 

// Menghapus data alumni berdasarkan ID
router.delete("/alumni/:id", AlumniController.deleteAlumni); 

/**
 * Routing tambahan untuk fitur khusus
 */

// Mencari alumni berdasarkan nama (menggunakan query parameter ?name=)
router.get("/alumni/search/:name", AlumniController.searchAlumniByName); 

// Mendapatkan alumni yang baru lulus (fresh graduate)
router.get("/alumni/fresh-graduate", AlumniController.getFreshGraduate); 

// Mendapatkan alumni yang sudah bekerja
router.get("/alumni/employed", AlumniController.getEmployed); 

// Mendapatkan alumni yang belum bekerja
router.get("/alumni/unemployed", AlumniController.getUnemployed); 

// Menangani rute tidak ditemukan
router.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

// Export router
module.exports = router;

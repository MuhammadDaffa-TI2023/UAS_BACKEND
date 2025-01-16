const express = require("express");
const {
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
} = require("../controllers/AlumniController");

const router = express.Router();

// Routes alumni
router.get("/alumni", getAllAlumni);
router.get("/alumni/:id", getAlumniById);
router.post("/alumni", createAlumni);
router.put("/alumni/:id", updateAlumni);
router.delete("/alumni/:id", deleteAlumni);
router.get("/alumni/search/:name", searchAlumniByName);

// Additional routes
router.get("/resource/search/:name", searchResource);
router.get("/resource/fresh-graduate", getFreshGraduateResource);
router.get("/resource/employed", getEmployedResource);
router.get("/resource/unemployed", getUnemployedResource);

module.exports = router;

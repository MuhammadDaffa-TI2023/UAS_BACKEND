const express = require("express");
const app = express();

// Import routing API
const apiRouter = require("./routes/api"); // Periksa apakah path-nya benar

// Gunakan middleware untuk parsing body request
app.use(express.json());

// Daftarkan routing
app.use("/api", apiRouter); // Semua routing di api.js akan dimulai dengan '/api'

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

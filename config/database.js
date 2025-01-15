// Memuat dotenv untuk mengakses variabel lingkungan
require('dotenv').config();

const { Sequelize } = require('sequelize');

// Membuat koneksi ke database menggunakan variabel dari file .env
const sequelize = new Sequelize(
  `mysql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3306/${process.env.DB_DATABASE}`
);

module.exports = sequelize;

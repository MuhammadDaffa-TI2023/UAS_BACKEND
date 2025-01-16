const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Koneksi database

// Definisi model Alumni
const Alumni = sequelize.define("Alumni", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  graduation_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  company_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
}, {
  tableName: "alumni", // Sesuaikan dengan nama tabel di database Anda
  timestamps: false,  // Nonaktifkan timestamps jika tidak digunakan
});

module.exports = Alumni;

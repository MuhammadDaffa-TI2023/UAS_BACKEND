// Import Sequelize
const { Sequelize, DataTypes, Model } = require('sequelize');

// Import database connection
const sequelize = require('../config/database'); // Pastikan file `database.js` sudah ada dan diatur

// Membuat class Alumni
class Alumni extends Model {}

// Mendefinisikan model Alumni
Alumni.init(
  {
    // Kolom 'id' sebagai primary key
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // Kolom 'name'
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    // Kolom 'phone'
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    // Kolom 'address'
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Kolom 'graduation_year'
    graduation_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Kolom 'status'
    status: {
      type: DataTypes.ENUM('fresh-graduate', 'employed', 'unemployed'),
      allowNull: false,
    },
    // Kolom 'company_name'
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    // Kolom 'position'
    position: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    // Kolom 'created_at'
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW, // Atau Sequelize.literal('CURRENT_TIMESTAMP') untuk MySQL
    },
    // Kolom 'updated_at'
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW, // Atau Sequelize.literal('CURRENT_TIMESTAMP') untuk MySQL
      onUpdate: Sequelize.NOW,
    },
  },
  {
    sequelize, // Koneksi ke database
    modelName: 'alumni', // Nama model
    tableName: 'alumni', // Nama tabel di database
    timestamps: false, // Tidak menggunakan otomatis 'createdAt' dan 'updatedAt'
  }
);

// Export class Alumni
module.exports = Alumni;

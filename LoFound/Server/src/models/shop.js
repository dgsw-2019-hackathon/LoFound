module.exports = (sequelize, DataTypes) => {
  const shop = sequelize.define('shop', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      field: 'price',
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: 'shop',
    timestamps: false,
  });

  return shop;
}
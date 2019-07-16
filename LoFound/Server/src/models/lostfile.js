module.exports = (sequelize, DataTypes) => {
  const lostfile = sequelize.define('lostfile', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    lostIdx: {
      field: 'lostIdx',
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    type: {
      field: 'type',
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    uploadName: {
      field: 'uploadName',
      type: DataTypes.STRING(200),
      allowNull: false,
    }
  }, {
    tableName: 'lostfile',
    timestamps: false,
  });

  lostfile.associate = (models) => {
    models.lostfile.belongsTo(models.losts, {
      forignKey: 'lostIdx',
    });
  }

  return lostfile;
}
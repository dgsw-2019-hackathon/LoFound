module.exports = (sequelize, DataTypes) => {
  const losts = sequelize.define('losts', {
    idx: {
      field: 'idx',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    memberId: {
      field: 'memberId',
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    title: {
      field: 'title',
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    content: {
      field: 'content',
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    startPlaceId: {
      field: 'startPlaceId',
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    endPlaceId: {
      field: 'endPlaceId',
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    isCompleted: {
      field: 'iscompleted',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    tableName: 'losts',
    timestamps: false,
  });

  losts.associate = (models) => {
    models.losts.belongsTo(models.member, {
      forignKey: 'memberId',
    });

    models.losts.hasOne(models.lostfile, {
      forignKey: 'lostIdx',
    });
  }

  return losts;
}
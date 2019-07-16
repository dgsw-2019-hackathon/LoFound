module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define('member', {
    id: {
      field : 'id',
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
    },
    pw: {
      field: 'pw',
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    points: {
      field: 'point',
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: '0 pt',
    },
  }, {
    tableName: 'member',
    timestamps: false,
  });

  Member.getMemberLogin = (id, pw) => Member.findOne({
    where: {
      id,
      pw,
    },
    raw: true,
  });

  Member.getMemberForId = (id) => Member.findOne({
    attributes: [
      'id',
      'name',
      'point',
    ],
    where: {
      id,
    },
    raw: true,
  });

  return Member;
};

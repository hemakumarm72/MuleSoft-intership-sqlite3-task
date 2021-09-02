export default (sequelize, DataTypes) => {
  const Film = sequelize.define(
    'film',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        unique: true,
        primaryKey: true,
      },
      film: DataTypes.STRING,
      times: DataTypes.INTEGER,
      watched: DataTypes.BOOLEAN,
      createdOn: DataTypes.STRING,
    },
    {
      timestamp: true,
      freezeTableName: true,
    }
  );

  return Film;
};

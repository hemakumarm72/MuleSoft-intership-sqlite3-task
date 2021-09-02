export default (Sequelize, DataTypes) => {
  const Movies = Sequelize.define(
    'movies',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      Name: DataTypes.STRING,
      Actor: DataTypes.STRING,
      Actress: DataTypes.STRING,
      YearOfRelease: DataTypes.STRING,
      Directorname: DataTypes.STRING,
      Description: DataTypes.TEXT,
    },
    {
      timestamp: true,
      freezeTableName: true,
    }
  );
  return Movies;
};

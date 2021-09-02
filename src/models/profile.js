export default (Sequelize, DataTypes) => {
  const Profile = Sequelize.define(
    'profile',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.INTEGER,
      address: DataTypes.TEXT,
      education: DataTypes.TEXT,
      mobileno: DataTypes.STRING,
      linkedin: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    {
      timestamp: true,
      freezeTableName: true,
    },
  );
  return Profile;
};

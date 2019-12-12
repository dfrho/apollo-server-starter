const dog = (sequelize, DataTypes) => {
  const Dog = sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:
        {
          args: true,
          msg: 'a dog must have a name'
        },
      },
    },
  });

  Dog.associate = models => {
    Dog.belongsTo(models.User);
  };

  return Dog;
};

export default dog;

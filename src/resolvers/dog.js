export default {
  Query: {
    dogs: async (parent, args, { models }) => {
      return await models.Dog.findAll();
    },
    dog: async (parent, { id }, { models }) => {
      return await models.Dog.findByPk(id);
    },
  },

  Mutation: {
    createDog: async (parent, { name }, { me, models }) => {
      return await models.Dog.create({
        name,
        ownerId: me.id,
      });
    },

    deleteDog: async (parent, { id }, { models }) => {
      return await models.Dog.destroy({ where: { id } });
    },
  },

  Dog: {
    owner: async (dog, args, { models }) => {
      return await models.User.findByPk(message.ownerId);
    },
  },
};

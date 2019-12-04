
export default {
  Query: {
    message: (parent, { id }, { models }) => {
      return models.messages[id];
    },
    messages: (parent, { id }, { models }) => {
      return Object.values(models.messages);
    }
  },

  Mutation: {
    createMessage: (parent, { text }, { me, models }) => {
      const id = uuidv4();
      const message = {
        id,
        text,
        userId: me.id,
      };

      models.messages[id] = message;
      models.users[me.id].messageIds.push(id);

      return message;
    },

    updateMessage: (parent, { id, text }, { me, models }) => {
      const message = {
        id,
        text,
        userId: me.id,
      };

      models.messages[id] = message;

      return message;
    },

    deleteMessage: (parent, { id }, { models }) => {
      const { [id]: message, ...otherMessages } = models.messages;

      if (!message) {
        return false;
      }

      models.messages = otherMessages;

      users[me.id].messageIds = users[me.id].messageIds.filter(messageId => messageId !== id);

      return true;
    },
  },

  Message: {
    user: (message, args, { models }) => {
      return models.users[message.userId];
    }
  }




};

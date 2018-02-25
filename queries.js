const database = require("./database-connection");

module.exports = {
    list() {
      return database('coffee');
    },
    read(id) {
      return database('coffee')
            .select('*')
            .where('id', id)
            .first()
    },
    create(coffee) {
      return database('coffee')
            .insert(coffee)
            .returning('*')
            .then(coffee => coffee[0])
    },
    update(id, coffee) {
      return database('coffee')
            .update(coffee)
            .where('id', id)
            .returning('*')
            .then(coffee => coffee[0])
    },
    delete(id) {
      return database('coffee')
            .select('*')
            .where('id', id)
            .del()
    }
};

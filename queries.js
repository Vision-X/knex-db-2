const database = require("./database-connection");

module.exports = {
    list() {
      return database('coffees');
    },
    read(id) {
      return database('coffees')
            .select('*')
            .where('id', id)
            .first()
    },
    create(coffee) {
      return database('coffees')
            .insert(coffee)
            .returning('*')
            .then(coffee => coffee[0])
    },
    update(id, coffee) {
      return database('coffees')
            .update(coffee)
            .where('id', id)
            .returning('*')
            .then(coffee => coffee[0])
    },
    delete(id) {
      return database('coffees')
            .select('*')
            .where('id', id)
            .del()
    }
};

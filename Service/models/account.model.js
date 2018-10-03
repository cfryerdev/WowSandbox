var sequelize = require('sequelize');

const account = sequelize.define('user', {
    id: { type: Sequelize.STRING },
    username: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    gmlevel: { type: Sequelize.INTEGER }
});
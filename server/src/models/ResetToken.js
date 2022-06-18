// This creates a user model and implicitly return it to index.js with sequelize
const Promise = require('bluebird')
// bcrypt for encrypting passwords
const bcrypt = Promise.promisifyAll(require('bcrypt')) // this is to wrap all the functions with promise

module.exports = (sequelize, DataTypes) => {
    const ResetToken = sequelize.define('ResetToken', {
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            
        },
        userEmail: {
            type: DataTypes.STRING
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        expiration: DataTypes.DATE,
        used: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        }
    })

    // User associations 1 to 1 relationship with token for reset password
    ResetToken.associate = models => {
        ResetToken.belongsTo(models.User, {
            foreignKey: {
                name: 'userId',
                allowNull: false
            }
        });
    }

    return ResetToken;
}
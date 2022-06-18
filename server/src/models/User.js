// This creates a user model and implicitly return it to index.js with sequelize
const Promise = require('bluebird')
// bcrypt for encrypting passwords
const bcrypt = Promise.promisifyAll(require('bcrypt')) // this is to wrap all the functions with promise

async function hashPassword (user, options){
    const SALT_FACTOR = 8
    // if password hasn't changed return
    if(!user.changed('password')){
        return null
    }

    // hash the password
    const hash = await bcrypt.hash(user.password, SALT_FACTOR);
    user.setDataValue('password', hash);

    return null
}


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email:{
            type: DataTypes.STRING,
            unique: true 
        },
        name: DataTypes.STRING,
        provider: DataTypes.STRING,
        socialID: DataTypes.STRING,
        password: DataTypes.STRING,
    },{
        hooks:{
            // beforeCreate: hashPassword,
            // beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    })

    // User associations 1 to 1 relationship with token for reset password with model Token
    User.associate = models => {
        User.hasMany(models.ResetTokens, {
            onDelete: "cascade",
        });
    }

    // compare password function assigned to user prototype
    User.prototype.comparePassword = function comparePassword(password){
        return bcrypt.compare(password, this.password)
    }

    return User;
}
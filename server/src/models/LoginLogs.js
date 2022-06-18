// This creates a user model and implicitly return it to index.js with sequelize
const Promise = require('bluebird')
// bcrypt for encrypting passwords
// const bcrypt = Promise.promisifyAll(require('bcrypt')) // this is to wrap all the functions with promise


module.exports = (sequelize, DataTypes) => {
    const LoginLogs = sequelize.define('LoginLogs', {
        email:{
            type: DataTypes.STRING,
            unique: true 
        },
        token: DataTypes.STRING
    },{
        hooks:{
            // beforeCreate: hashPassword,
            // beforeUpdate: hashPassword,
            // beforeSave: hashPassword
        }
    })

    // compare password function assigned to user prototype
    // User.prototype.comparePassword = function comparePassword(password){
    //     return bcrypt.compare(password, this.password)
    // }

    return LoginLogs;
}
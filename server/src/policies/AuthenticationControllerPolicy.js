const Joi = require('joi') //use for data validation

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            name: Joi.string().regex(
                new RegExp(/^(?![\s.]+$)[a-zA-Z\s.]*$/)
            ),
            password: Joi.string().regex(
                new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/)
            )
        })

        //test the data against the schema
        const {error} = schema.validate(req.body)
        
        //Handle the error messages 
        if(error){
            switch(error.details[0].context.key){
                case 'email': 
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break;
                case 'name':
                    res.status(400).send({
                        error: 'You must provide a valid name'
                    })
                    break;
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to match the following rules
                        <br/>
                        <ol>
                        <li>At least 8 characters long and maximum of 32 characters.</li>
                        <li>Has a combination of upper and lowercase letters, numbers, punctuation, and special symbols.</li>
                        </ol>`
                    })
                    break;
                default:
                    res.status(400).send({
                        error: `Invalid registration Information`
                    })
            }
        }else{
            next() //means proceed to the next function
        }
    },
    resetPasswordChange (req, res, next) {
        const schema = Joi.object({
            newPassword1: Joi.string().regex(
                new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/)
            )
        })

        //test the data against the schema
        const {error} = schema.validate({
            newPassword1: req.body.newPassword1
        })
        
        //Handle the error messages 
        if(error){
            switch(error.details[0].context.key){
                case 'newPassword1':
                    res.status(400).send({
                        error: `The password provided failed to match the following rules
                        <br/>
                        <ol>
                        <li>At least 8 characters long and maximum of 32 characters.</li>
                        <li>Has a combination of upper and lowercase letters, numbers, punctuation, and special symbols.</li>
                        </ol>`
                    })
                    break;
                default:
                    res.status(400).send({
                        error: `Invalid registration Information`
                    })
            }
        }else{
            next() //means proceed to the next function
        }
    }
}
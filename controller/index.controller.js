const admin = require('../model/admin.model');
const { validator, validationResult } = require('express-validator');


exports.signup = (request, response) => {
    const errors = validationResult(request);
    console.log(request);
    if (!errors.isEmpty()) {
        return response.status(403).json({ errors: errors.array() })
    }

    admin.create({ username: request.body.username, email: request.body.email, password: request.body.password }).then(result => {
        console.log(result);
        return response.status(201).json(result)
    }).catch(error => {
        return response.status(500).json(error)
    })
}



exports.signin = (request, response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(403).json({ errors: errors.array() })

    }

    admin.findOne({ email: request.body.email, password: request.body.password }).then(result => {
        if (result)
            return response.status(200).json(result);
        else
            return response.status(404).json({ status: "Unable to login" })

    }).catch(error => {
        return response.status(500).json({ error })
    })
}
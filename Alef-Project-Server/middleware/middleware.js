const jwt = require('jsonwebtoken')
const UserModel = require('../models/user');
const adminModel = require('../models/admin');

const extractToken = (req, res, next) => {
    const token = getTokenFromReq(req);
    if (token) {
        req.token = token;
    }

    next();
}

const extractUser = async (req, res, next) => {
    const token = getTokenFromReq(req);
    if (token) {
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET);
            if (decodedToken.id) {
                const user = await UserModel.findById(decodedToken.id);
                if (user) {
                    req.user = user;
                } else {
                    return res.json({ error: 'user not found' }).end()
                }
            } else {
                return res.json({ error: 'token invalid' }).end()
            }
        } catch (err) {
            if (err.name === 'JsonWebTokenError') {
                console.log(err);
            }
            return res.json({ error: 'invalid token' }).end();
        }
    } else {
        return res.json({ error: 'token not found' }).end()
    }

    next();
}
const extractAdmin = async (req, res, next) => {
    const token = getTokenFromReq(req);
    if (token) {
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET);
            if (decodedToken.id) {
                const admin = await adminModel.findById(decodedToken.id);
                if (admin) {
                    req.admin = admin;
                } else {
                    return res.json({ error: 'admin not found' }).end()
                }
            } else {
                return res.json({ error: 'token invalid' }).end()
            }
        } catch (err) {
            if (err.name === 'JsonWebTokenError') {
                console.log(err);
            }
            return res.json({ error: 'invalid token' }).end();
        }
    } else {
        return res.json({ error: 'token not found' }).end()
    }

    next();
}

const getTokenFromReq = (req) => {
    const authorization = req.headers.authorization;
    if (authorization && authorization.startsWith('Bearer ')) {
        return authorization.split(' ')[1];
    }

    return null;
}

module.exports = { extractToken, extractUser ,extractAdmin}
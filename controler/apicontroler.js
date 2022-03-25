const express = require("express");
const { ObjectId } = require("mongodb");
const userSchema = require("../models/user");

const app = express();

module.exports = {
    newUser: async function (req, res) {
        const data = new userSchema
        data.firstname = req.body.firstname
        data.lastname = req.body.lastname
        data.email = req.body.email
        data.password = req.body.password
        data.phone = req.body.phone

        await data.save();
        console.log(data);
        return res.send(data)
    },
    userupdate: async function (req, res) {

        console.log(req.body)
        console.log(req.params.userId)
        userSchema.findByIdAndUpdate(req.params.userId, req.body, function (err, result) {
            if (err) {
                console.log(err);
            }
            console.log(result);
            res.send({
                id: result._id
            })

            console.log(result._id)
        });
    },
    userDelete: async function (req, res) {
        console.log(req.params.userId);

        userSchema.findByIdAndRemove(req.params.userId, function (err) {
            if (err) {
                console.log(err)
            }
            return res.send({ "success": true })
        });

    },
    getUser: async function (req, res) {
        const detail = await userSchema.find({}, {
            id: 1,
            firstname: 1,
            lastname: 1,
            email: 1,
            password: 1,
            phone: 1,
        });

        try {
            res.send(detail);
        } catch (error) {
            console.log("error");

        }
    },
    userData: async function (req, res) {
        console.log(req.params.userId);
        const detail1 = await  userSchema.findOne({ _id: req.params.userId})

            return res.send(detail1)

    }
}

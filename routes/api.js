const express = require('express');
const router = express.Router();
const apiController=require("../controler/apicontroler");
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user mailid.
 *                 example: dhaval@gmail.com
 *               phone:
 *                  type: integer
 *                  description: The user's mobile number.
 *                  example: 123
 *               password:
 *                  type: integer
 *                  description: The user's password.
 *                  example: 123
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The user ID.
 *                         example: dhaval
 */
router.post('/users',apiController.newUser );
module.exports = router


/**
 * @swagger
 * /users/update/{userId}:
 *   post:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     parameters:
 *      - in: path
 *        name: userId  
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: The user's firstname.
 *                 example: abc 
 *               lastname:
 *                 type: string
 *                 description: The user's lastname.
 *                 example: abc 
 *               email:
 *                 type: string
 *                 description: The user mailid.
 *                 example: dhaval@gmail.com
 *               phone:
 *                  type: integer
 *                  description: The user's mobile number.
 *                  example: 123
 *               password:
 *                  type: integer
 *                  description: The user's password.
 *                  example: 123
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The user ID.
 *                         example: dhaval
 */
 router.post('/users/update/:userId',apiController.userupdate);
 module.exports = router


/**
 * @swagger
 * /users/delete/{userId}:
 *   delete:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     parameters:
 *      - in: path
 *        name: userId  
 *     responses:
 *       200:
 *         description: A list of users.
 */
 router.delete('/users/delete/:userId',apiController.userDelete);
 module.exports = router

 /**
 * @swagger
 * /users/get:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         description: The user ID.
 *                         example: dhaval
 */
router.get('/users/get',apiController.getUser);
module.exports = router

/**
 * @swagger
 * /users/get/{userId}:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     parameters:
 *      - in: path
 *        name: userId  
 *     responses:
 *       200:
 *         description: A list of users.
 */
 router.get('/users/get/:userId',apiController.userData);
 module.exports = router
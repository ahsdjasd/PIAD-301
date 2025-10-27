import express from "express";
import { userController } from "../controllers/userController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          example: 1
 *        email:
 *          type: string
 *          example: jemisealexis@gmail.com
 *        name:
 *          type: string
 *          example: alexis
 */


/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Obtener todos los usuarios
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: OK
 * 
 */
router.get("/", userController.getUsers);

/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Crear nuevo usuario
 *    tags: [Users]
 *    requestBody: 
 *      required: true
 *      content:
 *        application/json:
 *          schema: 
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: jemisealexis@gmail.com
 *              name:
 *                type: string
 *                example: alexis
 *    responses: 
 *      201:
 *        description: Usuario creado correctamente
 *        content:
 *          application/json:
 *            $ref: '#/components/schemas/User'
 *      400:
 *        description: Datos invalidos
 *      500:
 *        description: Error del servidor
 * 
 */
/**
 * @swagger
 * /api/users:
 *   put:
 *     summary: Actualizar un usuario ya existente ✨
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: alexis Actualizada
 *               email:
 *                 type: string
 *                 example: jemisealexis_updated@gmail.com
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente ✅
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario actualizado correctamente ✅
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: Datos inválidos 🤒
 *       404:
 *         description: Usuario no encontrado ❌
 *       500:
 *         description: Error del servidor 🚨
 */

/**
 * @swagger
 * /api/users:
 *   delete:
 *     summary: Borrar un usuario ✨.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente ❇️
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuario eliminado correctamente 🚮.
 *       404:
 *         description: Usuario no encontrado ❌
 *       500:
 *         description: Error del servidor 🚨
 *      
 */

router.post("/", userController.createUser);


router.put("/:id", userController.updateUser);

export default router;

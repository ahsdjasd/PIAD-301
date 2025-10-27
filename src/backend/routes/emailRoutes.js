import express from 'express';
import { registerUser } from '../controllers/emailController.js'

const router = express.Router();
/**
 * @swagger
 * paths:
 *  /api/email/register:
 *    post:
 *      summary: Registrar usuario y enviar
 *      tags: [Email]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  example: jemisealexis@gmail.com
 *                name:
 *                  type: string 
 *                  example: Maria la del barrio
 *      responses:
 *        200:
 *          description: Email enviado correctamente
 *        500: 
 *          description: Error del servicio al enviar email.
 */

router.post("/register",registerUser)

export default router;
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The user ID.
 *           example: Asfa123sFASF
 *         email:
 *           type: string
 *           description: The user's email.
 *           example: ulbitv@mail.ru
 *         diskSpace:
 *           type: number
 *           description: Размер диска в байтах
 *           example: 100000000
 *         usedSpace:
 *           type: number
 *           description: Занятое пространство в байтах
 *           example: 5241241
 */


/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Авторизация
 *     requestBody:
 *          description: данные для логина
 *          required: true
 *          content:
 *              application/json:
 *                   schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *     responses:
 *       200:
 *         description: Возвращает токен и данные о пользователе
 *         content:
 *              application/json:
 *                   schema:
 *                      type: object
 *                      properties:
 *                          token:
 *                              type: string
 *                          user:
 *                              type: object
 *                              properties:
 *                                  _id:
 *                                    type: string
 *                                    description: The user ID.
 *                                    example: Asfa123sFASF
 *                                  email:
 *                                    type: string
 *                                    description: The user's email.
 *                                    example: ulbitv@mail.ru
 *                                  diskSpace:
 *                                    type: number
 *                                    description: Размер диска в байтах
 *                                    example: 100000000
 *                                  usedSpace:
 *                                    type: number
 *                                    description: Занятое пространство в байтах
 *                                    example: 5241241
 *
 *
 */

/**
 * @openapi
 * /api/auth/registration:
 *   post:
 *     tags: [Auth]
 *     summary: Ргеистрация
 *     requestBody:
 *          description: данные для регистрации
 *          required: true
 *          content:
 *              application/json:
 *                   schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *     responses:
 *       200:
 *         description: Возвращает строку User was created или ошибку
 */

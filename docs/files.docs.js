/**
 * @swagger
    tags:
        name: Files
        description: Эндпоинты для работы с файлами.
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     File:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The file ID.
 *           example: Asfa123sFASF
 *         name:
 *           type: string
 *           description: Название файла.
 *           example: файл 123
 *         type:
 *           type: string
 *           description: Расширение файла, если это папка то расширение "dir"
 *           example: dir\txt\doc\exe
 *         size:
 *           type: number
 *           description: Размер фаоа
 *           example: 1924
 *         path:
 *           type: string
 *           description: путь до файла
 *           example: /dir/files/file.txt
 *           path:
 *         date:
 *           type: string
 *           description: Дата создания
 *           example: 24.02.2020
 *         user:
 *           type: string
 *           description: Айдишник пользователя который создал файл
 *           example: sfa2sfaASh2hjiajhnxckz
 *         parent:
 *           type: string
 *           description: Айдишник папки в которой находится файл
 *           example: 24.02.2020
 */

/**
 * @openapi
 * /api/files:
 *   get:
 *     tags: [Files]
 *     summary: Возвращает список файлов\папок
 *     description: Получение списка папок\файлов
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           required: false
 *     responses:
 *       200:
 *         description: Ответ
 */

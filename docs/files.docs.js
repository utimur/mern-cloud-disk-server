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


/**
 * @openapi
 * /api/files:
 *   post:
 *     tags: [Files]
 *     summary: Создание папки
 *     description: Создать директорию
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *        description: данные для регистрации
 *        required: true
 *        content:
 *          application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                      name:
 *                         type: string
 *                      parent:
 *                         description: ID родительской папки
 *                         type: string
 *     responses:
 *       200:
 *         description: Ответ
 */

/**
 * @openapi
 * /api/files:
 *   delete:
 *     tags: [Files]
 *     summary: Удаление файла
 *     description: Удалить файл по ID
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           description: ID файла для удаления
 *           type: string
 *           required: true
 *     responses:
 *       200:
 *         description: File was deleted
 */


/**
 * @openapi
 * /api/files/upload:
 *   post:
 *     tags: [Files]
 *     summary: Загрузить файл
 *     description: загрузить файл. ВНИМАНИЕ! Не в JSON а в FORM-DATA
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *        required: true
 *        content:
 *          multipart/form-data:
 *               schema:
 *                  type: object
 *                  properties:
 *                      parent:
 *                         description: ID родительской папки
 *                         type: string
 *                      file:
 *                         description: файл полученный из инпута
 *     responses:
 *       200:
 *         description: Ответ
 */

/**
 * @openapi
 * /api/files/avatar:
 *   post:
 *     tags: [Files]
 *     summary: Загрузить avatar
 *     description: загрузить avatar. ВНИМАНИЕ! Не в JSON а в FORM-DATA
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *        required: true
 *        content:
 *          multipart/form-data:
 *               schema:
 *                  type: object
 *                  properties:
 *                      file:
 *                         description: файл полученный из инпута
 *     responses:
 *       200:
 *         description: Ответ
 */

/**
 * @openapi
 * /api/files/avatar:
 *   delete:
 *     tags: [Files]
 *     summary: Удалить аватар avatar
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: Ответ
 */

/**
 * @openapi
 * /api/files/download:
 *   get:
 *     tags: [Files]
 *     summary: Скачать файл
 *     description: Загрузить файл
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *           required: true
 *     responses:
 *       200:
 *         description: Ответ
 */

/**
 * @openapi
 * /api/files/search:
 *   get:
 *     tags: [Files]
 *     summary: Поиск файла по названию
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *           required: true
 *     responses:
 *       200:
 *         description: Список файлов
 */

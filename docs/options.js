module.exports =  {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Облачное хранилище документация",
            version: "0.0.1",
            description:
                "Облако для проекта",
        },
        servers: ["http://localhost:5000"]
    },
    apis: ['../routes/*.js', '../index.js']
};

var express = require("express"),
    path = require("path"),
    swaggerJsdoc = require("swagger-jsdoc");

module.exports = app =>
    new Promise((resolve, reject) => {
        try {
            const options = {
                swaggerDefinition: {
                    info: {
                        title: "WoW Sandbox",
                        version: "1.0.0",
                        description: "WoW Sandbox Microservice API developed in Node."
                    }
                },
                produces: ["application/json"],
                schemes: ["http", "https"],
                apis: [
                    path.resolve(__dirname, "../controllers/*.controller.js"),
                    path.resolve(__dirname, "../models/*.model.js"),
                    path.resolve(__dirname, "../errors/*.model.js")
                ]
            };

            const specs = swaggerJsdoc(options);

            specs.security = [
                {
                    Bearer: []
                }
            ];

            specs.securityDefinitions = {
                Bearer: {
                    name: "Authorization",
                    in: "header",
                    type: "apiKey",
                    description:
                        "Please prefix your JWT token with the word Bearer (and a space)."
                }
            };

            app.use(express.static("swagger"));

            app.get("/swagger.json", (req, res) => {
                res.setHeader("Content-Type", "application/json");
                res.send(specs);
            });

            resolve(app);
        } catch (err) {
            reject(err);
        }
    });

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const usersRoute = require("./routes/users.route");
const morganBody = require('morgan-body');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const path = require('path');

const log = fs.createWriteStream(
  path.join(__dirname, "logs", "access.log"), { flags: "a" }
);

app.use(bodyParser.json());
morganBody(app, {
  noColors: true,
  stream: log,
});

app.use("/users", usersRoute);

/** Swagger Initialization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: "Simple Mock API example build with ExpressJs and Text file as DB",
      description: "API documentation",
      contact: {
        name: "Sebastien G Pambu",
      },
      servers: ["http://localhost:3000/"],
    },
  }),
  apis: ["index.js", "./routes/*.js"],

};

const swaggerDocs = swaggerJsdoc(swaggerOption);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/** Swagger Initialization - END */

app.listen(3000, () => {
  console.log("ExpressJs Rest API App has started");
});

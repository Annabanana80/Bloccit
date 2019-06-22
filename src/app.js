const express = require("express");
const app = express();

module.export = app;

 const routeConfig = require("./config/route-config.js");

 routeConfig.init(app);
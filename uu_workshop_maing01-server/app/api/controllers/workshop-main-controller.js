"use strict";
const WorkshopMainAbl = require("../../abl/workshop-main-abl.js");

class WorkshopMainController {
  init(ucEnv) {
    return WorkshopMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new WorkshopMainController();

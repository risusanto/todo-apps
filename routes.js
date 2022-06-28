const activityHandler = require("./handler/activity")

module.exports = {
    New: (app) => {
        activityHandler.New(app)
    }
}
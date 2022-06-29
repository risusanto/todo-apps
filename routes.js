const activityHandler = require("./handler/activity")

module.exports = {
    New: (app, options) => {
        activityHandler.New(app, options)
    }
}
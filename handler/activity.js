const activityUseCase = require("../usecase/activity")
const activityRepository = require("../adapter/activity")

module.exports = {
    New: (app) => {
        let activityRepo = new activityRepository.Activity({
            databaseInterface: "hello"
        })
        let activityUC = new activityUseCase.Activity({
            activityRepository: activityRepo
        })

        app.get('/activities', async (req, res) => {
            let data = await activityUC.GetActivities(1)
            res.json(data)
        })
        app.get('/activities/:id', async (req, res) => {
            let data = await activityUC.GetActivity(req.params.id)
            res.json(data)
        })
    }
}
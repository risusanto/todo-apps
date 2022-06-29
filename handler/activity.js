const activityUseCase = require("../usecase/activity")
const activityRepository = require("../repository/activity")

module.exports = {
    New: (app, options) => {
        let activityRepo = new activityRepository.Activity({
            mysqlDB: options.mysqlDB
        })
        let activityUC = new activityUseCase.Activity({
            activityRepository: activityRepo
        })

        app.get('/activities', async (req, res) => {
            // #swagger.title = 'Get list activities'
            // #swagger.tags = ['Activity']
            /* #swagger.responses[200] = {
                description: 'Success.',
                schema: [
                    {
                        "user_id": 1,
                        "activity_name": "do homework",
                        "priority": 1
                    }
                ]
            } */

            let data = await activityUC.GetActivities(1)
            res.json(data)
        })
        app.get('/activities/:id', async (req, res) => {
            // #swagger.title = 'Get Activity By ID'
            // #swagger.tags = ['Activity']
            /* #swagger.responses[200] = {
                description: 'Success.',
                schema: {
                        "user_id": 1,
                        "activity_name": "do homework",
                        "priority": 1
                    }
            } */
            let data = await activityUC.GetActivity(req.params.id)
            res.json(data)
        })
    }
}
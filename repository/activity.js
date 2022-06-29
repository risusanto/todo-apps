class Activity  {
    constructor(options) {
        this.mysqlDB = options.mysqlDB
    }

    async GetActivities(user_id) {
        return [
            {
                "user_id": 1,
                "activity_name": "do homework",
                "priority": 1
            },
            {
                "user_id": 1,
                "activity_name": "do dishes",
                "priority": 2
            }
        ]
    }

    async GetActivity(activity_id) {
        return {
            "user_id": 1,
            "activity_name": "do homework",
            "priority": 1
        }
    }
}

module.exports = {
    Activity
}
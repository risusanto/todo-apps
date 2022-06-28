const {Repository} = require("../repository/activity");

class Activity extends Repository {
    constructor(options) {
        super(options);
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
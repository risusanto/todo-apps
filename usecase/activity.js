class Activity {
    constructor(options) {
        this.activityRepository = options.activityRepository
    }

    async GetActivities(user_id) {
        return await this.activityRepository.GetActivities(user_id)
    }

    async GetActivity(activity_id) {
        return await this.activityRepository.GetActivity(activity_id)
    }
}

module.exports = {
    Activity
}
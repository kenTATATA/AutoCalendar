class User{
    /**
     * @param {String} name :ユーザー名
     * @param {Schedule} lifestyle :定例スケジュール
     * @param {Schedule} schedule :スケジュール
     * @param {Settings} settings :設定
     */
    constructor(name, lifestyle, schedule, settings) {
        this.name = name;
        this.lifestyle = lifestyle;
        this.schedule = schedule;
        this.settings = settings;
        
    }
}
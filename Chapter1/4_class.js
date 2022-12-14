"use strict";
class UserInfo {
    constructor(username, age, job, workTimeRate, isUserIncom) {
        this.username = username;
        this.age = age;
        this.job = job;
        this.workTimeRate = workTimeRate;
        this.isUserIncom = isUserIncom;
        this.userInfoMessage = () => {
            console.log(`${this.username}의 나이는 ${this.age}이며, 직업은 ${this.job}이고 일주일의 수입은
                    ${this.isUserIncom}원 입니다. 일하는 시간은 ${this.workTimeRate}시간 입니다.`);
        };
    }
    get getUsername() {
        return this.username;
    }
    set setUsername(value) {
        this.username = value;
    }
}
let userInfo = new UserInfo('cononi', 29, 'Programmer', 8, 800000); // Class Object Instance 생성 (Aguments 전달 및 초기화)
userInfo.userInfoMessage();

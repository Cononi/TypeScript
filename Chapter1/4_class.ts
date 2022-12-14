class UserInfo {
    constructor(
        private username: string,
        private age: number,
        private job: string,
        private workTimeRate: number,
        private isUserIncom: number) {
    }

    public get getUsername(): string {
        return this.username;
    }
    public set setUsername(value: string) {
        this.username = value
    }

    public userInfoMessage = (): void => {
        console.log(`${this.username}의 나이는 ${this.age}이며, 직업은 ${this.job}이고 일주일의 수입은
                    ${this.isUserIncom}원 입니다. 일하는 시간은 ${this.workTimeRate}시간 입니다.`)
    }
}

let userInfo = new UserInfo('cononi', 29, 'Programmer', 8, 800_000) // Class Object Instance 생성 (Aguments 전달 및 초기화)
userInfo.userInfoMessage()
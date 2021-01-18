export class User {
    constructor(
        public userId: number =null,
        public firstName: string = "",
        public lastName: string = "",
        public email: string = "",
        public phoneNumber: string = "",
        public userName: string = "",
        public userPassword: string = "",
        public startOfWorkDate: Date=null,
        public roleId:number=null
    ) {

    }
}

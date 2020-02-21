export class User{

    constructor(
        public username: string,
        public email: string,
        public phone: string,
        public category: string,
        public gender: string,
        public subscribe: boolean
    ){}
}
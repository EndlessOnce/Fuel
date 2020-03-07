export class Client {

    constructor(
        public name: string,
        public address: string,
        public city: string,
        public state: string,
        public zipcode: string,
        public addressAlt?: string,

    ) {}
}

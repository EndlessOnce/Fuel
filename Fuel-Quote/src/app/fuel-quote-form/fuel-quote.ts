export class QuoteForm {
    constructor(
        public gallons: number,
        public delivery: Date,
        public address: string,
        public price: number,
        //public total: number,
    ) {}
}
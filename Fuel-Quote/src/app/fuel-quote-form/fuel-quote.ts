export class QuoteForm {
    constructor(
        public gallons: number,
        public delivery: Date,
        public address: string,
        public price: string,
        public total: string,
    ) {}
}
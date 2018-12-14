export class Review {
    constructor (
        public id: number,
        public user_name: string,
        public join_date: string,
        public review_date: string,
        public rating: number,
        public review: string,
        public already_reviewed: number,
        public thumbs_up: number,
        public thumbs_down: number
    ) { }
}
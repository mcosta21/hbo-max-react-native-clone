
export class PageableTheMovieDb<T> {
    public page: number = 1;
    public results: Array<T> = [];
    public total_pages: number = 1;
    public totalResults: number = 0;
}
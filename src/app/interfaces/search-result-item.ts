export class SearchResultItem {

    keyword: string;
    title: string;
    view_count: number;
    creation_date: number;
    answer_count: number;

    constructor(data: {
        title: string, creation_date: number, view_count: number, answer_count: number, keyword: string
    }) {
        this.title = data.title;
        this.view_count = data.view_count;
        this.creation_date = data.creation_date;
        this.answer_count = data.answer_count;
        this.keyword = data.keyword;
    }
}

export interface ISearchResultItem {
    answer_count: number;
    closed_date: number;
    closed_reason: string;
    creation_date: number;
    is_answered: boolean;
    last_activity_date: number;
    link: string;
    score: number;
    tags: Array<string>;
    title: string;
    view_count: number;
}


export class SearchResultItem {

    title: string;
    view_count: number;
    creation_date: number;
    answer_count: number;

    constructor(data: { title: string, creation_date: number, view_count: number, answer_count: number }) {
        this.title = data.title;
        this.view_count = data.view_count;
        this.creation_date = data.creation_date;
        this.answer_count = data.answer_count;
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


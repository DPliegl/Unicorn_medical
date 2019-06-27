import { ISearchResultItem } from './search-result-item';

export interface ISearchResult {
    has_more: boolean;
    items: [ISearchResultItem];
    quota_max: number;
    quota_remaining: number;
}

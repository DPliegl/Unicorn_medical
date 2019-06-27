import { Component, Input, OnInit } from '@angular/core';
import { SearchResultItem } from '../interfaces/search-result-item';

@Component({
    selector: 'ae-search-result-list-item',
    templateUrl: './search-result-list-item.component.html',
    styleUrls: ['./search-result-list-item.component.scss']
})
export class SearchResultListItemComponent implements OnInit {


    @Input() public data: SearchResultItem;

    constructor() {
    }

    ngOnInit() {
    }

}

import { Component, OnChanges, Input } from '@angular/core';

@Component({
    styleUrls:['./star.component.css'],
    selector: 'ec-star',
    templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges{
    
    @Input() rating : number;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating*75/5;
    }
}
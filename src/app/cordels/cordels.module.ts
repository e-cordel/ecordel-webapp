import { NgModule } from '@angular/core';
import { CordelComponent } from './cordel/cordel.component';
import { Cordel } from './cordel';
import { CordelListComponent } from './cordel-list/cordel-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { StarComponent } from './star/star.component';
import { CordelDetailComponent } from './cordel-detail/cordel-detail.component';

@NgModule({
    declarations:[
        StarComponent,
        CordelComponent,
        CordelListComponent,
        CordelDetailComponent
    ],
    imports: [
        BrowserModule
    ],
    exports:[
        CordelComponent,
        CordelListComponent
    ]
})
export class CordelsModule {

}
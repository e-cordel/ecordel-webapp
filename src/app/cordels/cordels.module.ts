import { NgModule } from '@angular/core';
import { CordelComponent } from './cordel/cordel.component';
import { Cordel } from './cordel';
import { CordelListComponent } from './cordel-list/cordel-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { StarComponent } from './star/star.component';

@NgModule({
    declarations:[
        StarComponent,
        CordelComponent,
        CordelListComponent
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
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CordelComponent } from './cordel/cordel.component';
import { Cordel } from './cordel';
import { CordelListComponent } from './cordel-list/cordel-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { StarComponent } from './star/star.component';
import { CordelDetailComponent } from './cordel-detail/cordel-detail.component';
import { RouterModule } from '@angular/router';
import { CordelFormComponent } from './cordel-form/cordel-form.component';

@NgModule({
    declarations:[
        StarComponent,
        CordelComponent,
        CordelListComponent,
        CordelDetailComponent,
        CordelFormComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule
    ],
    exports:[
        CordelComponent,
        CordelListComponent,
        CordelFormComponent
    ]
})
export class CordelsModule {

}
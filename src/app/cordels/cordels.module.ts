import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CordelCardComponent } from './cordel-card/cordel-card.component';
import { CordelListComponent } from './cordel-list/cordel-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { StarComponent } from './star/star.component';
import { CordelDetailComponent } from './cordel-detail/cordel-detail.component';
import { RouterModule } from '@angular/router';
import { CordelFormComponent } from './cordel-form/cordel-form.component';

@NgModule({
    declarations:[
        StarComponent,
        CordelCardComponent,
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
        CordelCardComponent,
        CordelListComponent,
        CordelFormComponent
    ]
})
export class CordelsModule {

}
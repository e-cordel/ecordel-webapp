import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CordelCardComponent } from './cordel-card/cordel-card.component';
import { CordelListComponent } from './cordel-list/cordel-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { StarComponent } from './star/star.component';
import { CordelDetailComponent } from './cordel-detail/cordel-detail.component';
import { RouterModule } from '@angular/router';
import { CordelFormComponent } from './cordel-form/cordel-form.component';
import { XilogravuraModule } from '../xilogravura/xilogravura.module';
import { BreakLine } from './breakline.pipe';

@NgModule({
    declarations:[
        StarComponent,
        CordelCardComponent,
        CordelListComponent,
        CordelDetailComponent,
        CordelFormComponent,
        BreakLine
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        XilogravuraModule
    ],
    exports:[
        CordelCardComponent,
        CordelListComponent,
        CordelFormComponent,
        BreakLine
    ]
})
export class CordelsModule {

}
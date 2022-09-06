import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('event', reducers),
    EffectsModule.forFeature([GetEventEffect, DeleteEventEffect]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule
  ],
  declarations: [EventComponent],
  providers: [EventService, SharedEventService]
})
export class EventModule {}

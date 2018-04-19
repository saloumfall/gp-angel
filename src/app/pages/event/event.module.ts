// src/app/pages/event/event.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RsvpFormComponent } from './rsvp/rsvp-form/rsvp-form.component';
import { CoreModule } from '../../core/core.module';
import { EVENT_ROUTES } from './event.routes';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(EVENT_ROUTES)
  ],
  declarations: [
    EventComponent,
    EventDetailComponent,
    RsvpComponent,
    RsvpFormComponent
  ]
})
export class EventModule { }

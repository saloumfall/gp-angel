// src/app/pages/event/event-detail/event-detail.component.ts
import { Component, Input } from '@angular/core';


import { EventModel } from '../../../core/event.model';
import { UtilsService } from '../../../core/utils.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})

export class EventDetailComponent {
  @Input() event: EventModel;

  constructor(
    public utils: UtilsService,
    public auth: AuthService) { }

}

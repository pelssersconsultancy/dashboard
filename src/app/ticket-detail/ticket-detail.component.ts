import { Component, Input } from '@angular/core';
import { TicketDetailStore } from './ticket-detail.store';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
  providers: [TicketDetailStore],
})
export class TicketDetailComponent {
  @Input() set id(value: string) {
    console.log(`TicketDetailComponent set id ${value}`);
    this.store.setId(value);
  }

  vm$ = this.store.vm$;

  constructor(private store: TicketDetailStore) {
    console.log('constructed TicketDetailComponent');
  }
}

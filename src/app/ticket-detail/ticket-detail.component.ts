import { Component, OnInit, Input } from '@angular/core';
import { TicketDetailStore } from './ticket-detail.store';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
  providers: [TicketDetailStore],
})
export class TicketDetailComponent implements OnInit {
  @Input() set id(value: string) {
    this.store.setId(value);
  }

  constructor(private store: TicketDetailStore) {
    console.log('constructed TicketDetailComponent');
  }

  ngOnInit(): void {}
}

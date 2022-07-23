import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { TicketDetailStore } from './ticket-detail.store';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
  providers: [TicketDetailStore],
})
export class TicketDetailComponent implements OnDestroy {
  @Input() set id(value: string) {
    console.log(`TicketDetailComponent set id ${value}`);
    this.store.setId(value);
  }

  @Output() loading = new EventEmitter<boolean>();

  destroy$ = new Subject<void>();
  vm$ = this.store.vm$;

  constructor(private store: TicketDetailStore) {
    console.log('constructed TicketDetailComponent');
    this.store.loading$
      .pipe(
        tap((loading) => this.loading.emit(loading)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

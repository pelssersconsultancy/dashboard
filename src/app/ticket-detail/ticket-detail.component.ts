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
    this.store.setId(value);
  }

  @Output() loading = new EventEmitter<boolean>();

  @Output() clicked = new EventEmitter<void>();

  destroy$ = new Subject<void>();
  vm$ = this.store.vm$;

  constructor(private store: TicketDetailStore) {
    this.store.loading$
      .pipe(
        tap((loading) => {
          console.log(`ticket detail store emitting loading ${loading}`);
          this.loading.emit(loading);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onClick(): void {
    this.clicked.emit();
  }
}

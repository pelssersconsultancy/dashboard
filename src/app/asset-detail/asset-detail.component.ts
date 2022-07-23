import {
  Component,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { AssetDetailStore } from './asset-detail.store';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.scss'],
  providers: [AssetDetailStore],
})
export class AssetDetailComponent implements OnDestroy {
  @Input() set id(value: string) {
    console.log(`AssetDetailComponent set id ${value}`);
    this.store.setId(value);
  }

  @Output() loading = new EventEmitter<boolean>();

  destroy$ = new Subject<void>();
  vm$ = this.store.vm$;

  constructor(private store: AssetDetailStore) {
    console.log('constructed AssetDetailComponent');
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

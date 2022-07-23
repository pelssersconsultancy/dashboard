import { Component, Input } from '@angular/core';
import { AssetDetailStore } from './asset-detail.store';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.scss'],
  providers: [AssetDetailStore],
})
export class AssetDetailComponent {
  @Input() set id(value: string) {
    console.log(`AssetDetailComponent set id ${value}`);
    this.store.setId(value);
  }

  vm$ = this.store.vm$;

  constructor(private store: AssetDetailStore) {
    console.log('constructed AssetDetailComponent');
  }
}

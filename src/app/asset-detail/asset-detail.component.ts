import { Component, Input, OnInit } from '@angular/core';
import { AssetDetailStore } from './asset-detail.store';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.scss'],
  providers: [AssetDetailStore],
})
export class AssetDetailComponent implements OnInit {
  @Input() set id(value: string) {
    this.store.setId(value);
  }

  constructor(private store: AssetDetailStore) {
    console.log('constructed AssetDetailComponent');
  }

  ngOnInit(): void {}
}

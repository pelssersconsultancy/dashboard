import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.scss']
})
export class AssetDetailComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {CollectionModel} from "../../models/collection.model";

@Component({
  selector: 'app-detail-collection',
  templateUrl: './detail-collection.component.html',
  styleUrls: ['./detail-collection.component.scss']
})
export class DetailCollectionComponent implements OnInit {

  @Input() item!:CollectionModel;
  constructor() { }

  ngOnInit(): void {
  }

}

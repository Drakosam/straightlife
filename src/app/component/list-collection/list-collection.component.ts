import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CollectionModel} from "../../models/collection.model";

@Component({
  selector: 'app-list-collection',
  templateUrl: './list-collection.component.html',
  styleUrls: ['./list-collection.component.scss']
})
export class ListCollectionComponent implements OnInit {
  @Input() collectionList: CollectionModel[]
  @Output() onSelectCollectionItem = new EventEmitter<CollectionModel>();
  itemCategory: string[]
  selected: string

  constructor() {
    this.collectionList = []
    this.itemCategory = []
    this.selected = ''
  }

  ngOnInit(): void {
    this.itemCategory = [...new Set(this.collectionList.map(e => e.category))]
    if (this.itemCategory.length > 0) {
      this.selected = this.itemCategory[0]
    }
  }

  onSelectCategory = (new_category: string) => {
    this.selected = new_category;
  }

  onSelectItem(item: CollectionModel) {
    this.onSelectCollectionItem.emit(item)
  }

}

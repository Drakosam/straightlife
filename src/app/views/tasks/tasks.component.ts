import { Component,  OnInit} from '@angular/core';
import {CollectionModel} from "../../models/collection.model";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  taskList: CollectionModel[]
  selectedTask!:CollectionModel

  constructor() {
    this.taskList = []

  }

  ngOnInit(): void {

    this.taskList.push({
      name: 'task0',
      category: 'category_A',
      dueDate: '',
      status: false,
      text: 'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name: 'task1',
      category: 'category_B',
      dueDate: '',
      status: false,
      text: 'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name: 'task2',
      category: 'category_C',
      dueDate: '',
      status: false,
      text: 'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name: 'task3',
      category: 'category_B',
      dueDate: '',
      status: false,
      text: 'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name: 'task4',
      category: 'category_A',
      dueDate: '',
      status: false,
      text: 'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name: 'task5',
      category: 'category_B',
      dueDate: '',
      status: false,
      text: 'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name: 'task6',
      category: 'category_C',
      dueDate: '',
      status: false,
      text: 'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name: 'task7',
      category: 'category_B',
      dueDate: '',
      status: false,
      text: 'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name: 'task8',
      category: 'category_A',
      dueDate: '',
      status: false,
      text: 'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name: 'task9',
      category: 'category_B',
      dueDate: '',
      status: false,
      text: 'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name: 'task10',
      category: 'category_C',
      dueDate: '',
      status: false,
      text: 'xxx ccc aaa tttt'
    })

  }

  onItemSelected(item: CollectionModel) {
    this.selectedTask = item
  }

}

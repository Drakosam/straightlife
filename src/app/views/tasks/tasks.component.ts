import { Component, OnInit } from '@angular/core';
import {Tasks} from "../../models/tasks.model";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  taskList:Tasks[]
  taskCategory:string[]
  selected:string

  constructor() {
    this.taskList = []
    this.taskCategory = []
    this.selected = ''
  }

  ngOnInit(): void {
    this.taskList.push({
      name:'task0',
      category:'category_A',
      dueDate:'',
      status:false,
      text:'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name:'task1',
      category:'category_B',
      dueDate:'',
      status:false,
      text:'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name:'task2',
      category:'category_C',
      dueDate:'',
      status:false,
      text:'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name:'task3',
      category:'category_B',
      dueDate:'',
      status:false,
      text:'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name:'task4',
      category:'category_A',
      dueDate:'',
      status:false,
      text:'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name:'task5',
      category:'category_B',
      dueDate:'',
      status:false,
      text:'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name:'task6',
      category:'category_C',
      dueDate:'',
      status:false,
      text:'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name:'task7',
      category:'category_B',
      dueDate:'',
      status:false,
      text:'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name:'task8',
      category:'category_A',
      dueDate:'',
      status:false,
      text:'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name:'task9',
      category:'category_B',
      dueDate:'',
      status:false,
      text:'xxx ccc aaa tttt'
    })
    this.taskList.push({
      name:'task10',
      category:'category_C',
      dueDate:'',
      status:false,
      text:'xxx ccc aaa tttt'
    })
    this.taskCategory =  [...new Set (this.taskList.map( e => e.category))]
    this.selected
  }
}

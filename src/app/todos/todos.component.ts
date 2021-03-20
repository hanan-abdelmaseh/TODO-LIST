import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
   todos: Todo[]= [];
   todoInput:string='';
  constructor() { }

  ngOnInit(): void {
 this.todos= [{
   content:"my first todo",
   completed:false
 },
 {
  content:"my second todo",
  completed:true
}
 ]

  }
  remove(id:number){
     this.todos =this.todos.filter((v,i) => i !==id );

  }
   toggleTodo(id:number){
     this.todos.map((v,i)=>{
       if(i==id) v.completed= !v.completed;
       return v ;
     })

   }
   add(){
        this.todos.push({
        content:this.todoInput,
        completed:false
        })
        this.todoInput="";
   }
}











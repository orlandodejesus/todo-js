import { Todo } from ".";


export class TodoList {

  constructor (){

    this.cargarLocalStore();
      
  }

  nuevoTodo ( todo ){
      this.todos.push(todo);
      this.guardarLocalStores();
  }

  eliminarTodo ( id ){
    this.todos = this.todos.filter( todo => todo.id != id);
    this.guardarLocalStores();
  }
  
  marcarCompletado (id){

    for (const todo of this.todos){

        if (todo.id == id){
            todo.completado = !todo.completado;
            this.guardarLocalStores();
            break;
        }
    }


  }

  eliminarCompletados (){

    this.todos = this.todos.filter( todo => !todo.completado );
    this.guardarLocalStores();

  }

  guardarLocalStores (){
     localStorage.setItem('todo',JSON.stringify(this.todos));
  }

  cargarLocalStore (){

    this.todos = (localStorage.getItem('todo')
                 ? JSON.parse( localStorage.getItem('todo') ) 
                 : []);

    this.todos = this.todos.map( obj => Todo.fromJson( obj));                 

 }



}
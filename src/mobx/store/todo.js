import { makeAutoObservable } from "mobx"
import { deleteData, getAllData, postData, putData } from "../../api"


class Todo {
  todos = []

  constructor() {
    makeAutoObservable(this)

    this.refresh = this.refresh.bind(this)
    this.addTodo = this.addTodo.bind(this);
    // this.getTodo = this.getTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.changeTodo = this.changeTodo.bind(this);
  }

  async refresh() {  
    await getAllData().then(res =>  this.todos = res) 
  }


  addTodo() {
    const data = postData({title: prompt(), completed: false})
    data.then(res => this.todos.push(res))
  }

  // getTodo() {
  //   console.log(this.todos);
  // }

  deleteTodo(id) {
    deleteData(id)
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  changeTodo(todo, row) {
    let data
    if(row === 'title') {
      let pr = prompt()
      data = {...todo, title: (pr === null ? '' : pr) }
    } else if (row === 'completed') {
      data = {...todo, completed: !todo.completed}
    }
    
    putData(data)

    this.todos = this.todos.map(p => {
      if(p.id === data.id) {
        p = data
        return p
      }
      return p
    })
  }
}

export default new Todo()
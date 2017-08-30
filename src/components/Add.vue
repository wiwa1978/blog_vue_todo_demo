<template>
  <div class="add container">
    <h1 class="page-header">Add Todo</h1>
    <form v-on:submit="addTodo">
        <div class="well">
            <div class="form-group">
                <label>Todo name</label>
                <input type="text" class="form-control" placeholder="Todo name" v-model="todo.name"></input>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <br>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="todo in todos">
           <div class="ml-auto btn-group float-right">
            <button class="btn btn-sm btn-danger" @click.prevent="removeTodo(todo)" >
              <i class="fa fa-trash"></i>
            </button>
           </div>
          <span>{{todo}}</span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      todo: {} ,
      todos: [
      ],
    }
  },
  methods: {
    addTodo(e) {
        console.log(this.todo.name);
        this.todos.push(this.todo.name);
        this.todo.name = '';
        e.preventDefault();
    },
    removeTodo(todo) {
        var index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

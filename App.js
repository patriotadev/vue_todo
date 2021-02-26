let vm = new Vue({
    el : '#app',
    data : {
        newTodo : '',
        todos : [],
        done : false
    },
    methods : {
        addTodo : function(){
            let newItem = this.newTodo.trim()

            if(newItem) {
                this.todos.push(
                    {text : this.newTodo, done : false}
                )
    
                this.newTodo='';
                localStorage.setItem('list', JSON.stringify(this.todos));
            }
        },
        removeTodo : function(index){
            this.todos.splice(index, 1);
            localStorage.setItem('list', JSON.stringify(this.todos));
        },
        toggleC : function(todo){
            todo.done = !todo.done;
        }
    },
    mounted() {
        todoLocal = localStorage.getItem('list');
        this.todos = JSON.parse(todoLocal);     
    },
});
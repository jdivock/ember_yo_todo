Todos.TodosController = Ember.ArrayController.extend({
  createTodo: function(){
    var title = this.get('newTitle');
    if(!title.trim()) {return;}

    var todo = Todos.Todo.createRecord({
      title: title,
      isCompleted: false
    });
    this.set('newTitle','');

    todo.save();
  },

    remaining: function () {
    return this.filterProperty('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function () {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining')
});

Todos.TodoController = Ember.ObjectController.extend({

  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as  setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted')
});
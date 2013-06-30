Todos.Store = DS.Store.extend({
	revision: 12,
	adapter: 'DS.LSAdapter'
});
Todos.LSAdapter = DS.LSAdapter.extend({
	namespace: 'todos-emberjs'
});
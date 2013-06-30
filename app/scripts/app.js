/*global Ember */

var Todos = window.Todos = Ember.Application.create();

/* Order and include as you please. */
require('app/scripts/routes/*');

require('app/scripts/views/*');
require('app/scripts/controllers/*');
require('app/scripts/models/*');
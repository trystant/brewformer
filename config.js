// config.js

requirejs.config({
	baseUrl: 'js',
	paths: {
		jquery: 'jquery-3.2.1.min',
		materialize: ['https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize', 'materialize.min'],
		velocity: 'velocity.min',
		methods: 'Custom-scripts/methods'
	},

	shim: {
		"velocity": {
			deps: ["jquery"]
		}
	}
});

require(['jquery', 'velocity'], function ($, Velocity){
	$("body").velocity({opacity: 0.5});
});
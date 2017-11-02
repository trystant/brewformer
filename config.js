// config.js

requirejs.config({
	baseUrl: 'js',
	paths: {
		jquery: ['https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min', 'jquery-3.2.1.min'],
		materialize: ['https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize', 'materialize.min'],
		methods: 'Custom-scripts/methods',
	}
});
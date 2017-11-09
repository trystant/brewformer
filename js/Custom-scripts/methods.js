require(['jquery', 'materialize', 'search', 'auto', 'hammer'], function($, Velocity){
	$('.icon-block').append("<button id='submit' onclick='search()''>Search</button>");
	

	var autocomplete = $('#el').materialize_autocomplete({
    limit: 20,
    multiple: {
        enable: true,
        maxSize: 10,
        onExist: function (item) { /* ... */ },
        onExceed: function (maxSize, item) { /* ... */ }
    },
    appender: {
        el: '#someEl'
    },
    getData: function (value, callback) {
        // ...
        callback(value, data);
    }
});

});

require(['jquery', 'materialize', 'auto', 'hammer'], function($, Velocity){

	var BREW_KEY= "bb5091fd74b7944bb27ac0fd535524ef";

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
	//function search(){
		const proxyurl = "https://cors-anywhere.herokuapp.com/"
	    url = "http://api.brewerydb.com/v2/locations?region=texas&ocality=dallas&key="+BREW_KEY+"&callback="+function(){
	    	return true;
	    }+"?";
	    fetch(proxyurl + url).then(respones=> respones.text()).then(contents=>console.log(contents)).catch(console.log("can't access "+ url + "response. Blocked by browser?"));
	    // $.getJSON(url, function(breweries){
	    //   console.log(breweries);
	    // });
	// }
});

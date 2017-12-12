const BREW_KEY= "bb5091fd74b7944bb27ac0fd535524ef";
function search(){
    $('#brewery-list').empty();
    $('#error-container').empty();
    var region = $("#Region").val();
    var city = $("#City").val();
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    url = "http://api.brewerydb.com/v2/locations?region="+region+"&locality="+city+"&isPrimary=Y&isClosed=N&key="+BREW_KEY+"&callback="+function(){
        return true;
    }+"?";
    fetch(proxyurl + url).then(response=> response.text()).then(contents=>getBreweries(contents)).catch(error => errorMessage(error));

}

//Use JSON.parse() to comb through data object created by
//berwerydb to get names of breweries.

function getBreweries(contents){
    var list = JSON.parse(contents);
    for(var i = 0; i < list.data.length; i++){
        var brewery = list.data[i].brewery.name;
        var item = "<div class='col-3 item-container'><span class='list-item' aria-live='assertive'>"+brewery+"</span></div>"
        $('#brewery-list').append(item).fadeIn(999);
        // console.log(brewery);
        getBeers(list, i);
    }
}

function getBeers(list, i){
    var brewery_id = list.data[i].brewery.id;
    console.log(brewery_id);
    var url = "http://api.brewerydb.com/v2/brewery/"+brewery_id+"/beers?key="+BREW_KEY;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + url).then(response=> response.text());
}

function errorMessage(error){
    console.log(error);
    var message = "<span class='error-message'>There seems to be something wrong with your search entry.  Check to see if you have left either field blank or mispelled either your entered state and/or city.</span>"
    $('#error-container').append(message).fadeIn(999);
}

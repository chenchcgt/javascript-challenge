// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

var form = d3.select("form");

// level 1 - auto table and date search
var tbody = d3.select("tbody");
console.log(data);


// look through data per each ufolist. i.e. python for ufolist in data

data.forEach(function(ufolist){
    console.log(ufolist);
    var row = tbody.append("tr");

    Object.entries(ufolist).forEach(function([key,value]){
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});


// create event handler runEnter = name of function
button.on("click",runEnter);
// this will run when pressing enter
form.on("submit",runEnter);

// function for event handler
function runEnter(){
// prevents the data to refresh, so "Enter" works from the Form
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    // get the input value
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filterData = data.filter(data => data.datetime === inputValue);

    console.log(filterData);

// clear page for filter data display
    tbody.html("");
// filter data function
    filterData.forEach(function(filterData){
        console.log(filterData);
        var row = tbody.append("tr");
    
        Object.entries(filterData).forEach(function([key,value]){
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);

  });
});
};

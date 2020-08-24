// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

var form = d3.select("form");

// YOUR CODE HERE!
// level 1 - auto table and date search
var tbody = d3.select("tbody");
console.log(data);


data.forEach(function(ufolist){
    console.log(ufolist);
    var row = tbody.append("tr");

    Object.entries(ufolist).forEach(function([key,value]){
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// create event handler
button.on("click",runEnter);
// this is not working!!
form.on("submit",runEnter);

// function for event handler
function runEnter(){
    var inputElement = d3.select("#datetime");
    // get property - what is this for? where value comes from?!!
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    // console.log(tableData);
    var filterData = data.filter(data => data.datetime === inputValue);

    console.log(filterData);

// clear page!!

    // reenter values

    filterData.forEach(function(filterData){
        console.log(filterData);
        var row = tbody.append("tr");
    
        Object.entries(filterData).forEach(function([key,value]){
            console.log(key,value);
            // cell.innerHTML = "";
            var cell = row.append("td");
            cell.text(value);

  });
});
};

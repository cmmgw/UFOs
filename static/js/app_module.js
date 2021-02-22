// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build a Table
function buildTable(data) {

    // First, clear any existing data
    // tbody.html references the table, pointing JavaScript directly to the table in the HTML page we're going to build.
    // Ttbody.html(""); tells JS to use an empty string when creating a table
        tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

// Add a date function
// d3.select("#datetime") tells D3 to look for the #datetime id in the HTML tags
// By chaining .property("value"); to the d3.select function, D3 not only looks for where date values are stored on the webpage, but also grabs that information and holds it in the "date" variable.
function handleClick() {
    let date = d3.select("#datetime").property("value");


// set a default filter and save it to a new variable
// default filter will actually be the original table data because we want users to refine their search on their own terms
let filteredData = tableData;

     // Check to see if a date was entered and filter the data using that date.
    if (date) {
      
        // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
  };

// Listen for events that occur on a webpage, such as a button click.
  d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
  buildTable(tableData);
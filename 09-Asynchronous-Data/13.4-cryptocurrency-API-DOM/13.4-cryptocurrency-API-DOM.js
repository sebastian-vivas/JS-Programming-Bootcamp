const h1 = document.querySelector("h1");

const p = document.querySelector("p");

const tbl = document.querySelector("table");

// https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
// Big List of Free and Open Public APIs (No Auth Needed)

// let url = 'https://api.agify.io/?name=brian';
// sample response:
// {"name":"bella","age":35,"count":40138}

1; // 1.) Agify.io	: Predict age based on a name
let url1 = "https://api.agify.io/?name=Justin";

// 2.Biance (crypto prices)
let url2 = "https://api2.binance.com/api/v3/ticker/24hr";

// first result: {"symbol":"ETHBTC","priceChange":"0.00009300","priceChangePercent":"0.131","weightedAvgPrice":"0.07084635","prevClosePrice":"0.07122700","lastPrice":"0.07132000","lastQty":"0.07200000","bidPrice":"0.07131700","bidQty":"0.00290000","askPrice":"0.07131800","askQty":"8.93810000","openPrice":"0.07122700","highPrice":"0.07144800","lowPrice":"0.06990400","volume":"53411.61080000","quoteVolume":"3784.01785331","openTime":1645064942728,"closeTime":1645151342728,"firstId":325075297,"lastId":325238759,"count":163463}

fetch(url2)
  .then((response) => response.json())
  .then((objArr) => {
    let headerRow = "<tr>";
    let obj0keys = Object.keys(objArr[0]);
    let numCols = 10;
    let numRows = 500;

    // make header row, just first dozen keys as col headers
    for (let i = 0; i < numCols; i++) {
      headerRow += "<th>" + obj0keys[i] + "</th>";
    }
    headerRow += "</tr>";
    tbl.innerHTML = headerRow;

    for (let i = 0; i < numRows; i++) {
      // make numRows data rows
      let dataRow = "<tr>";
      for (let j = 0; j < numCols; j++) {
        // 12 cols each
        dataRow += "<td>" + objArr[i][obj0keys[j]] + "</td>";
      }
      dataRow += "</tr>";
      tbl.innerHTML += dataRow;
    }
  })
  .catch((error) => {
    console.log("error!");
  });

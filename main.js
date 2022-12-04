async function getStockInfo (date) {
  return new Promise (async (resolve, reject) => {
    if (date.charAt(0) === "0") {
      reject("Day cannot begin with a zero")
    }
    try {
      const response = await axios.get(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`)

      const returnedData = response.data.data
      if (returnedData.length) {
        const stockDataObj = {
          "Open": returnedData[0].open,
          "High": returnedData[0].high,
          "Low": returnedData[0].low,
          "Close": returnedData[0].close
        }
        resolve(stockDataObj)
      }
      else {
        resolve({})
      }
    }
    catch (error) {
      console.log(error)
    }
  })
}

getStockInfo("5-January-2000").then(response => response)
const fs = require('fs')
const csv = require('csvtojson')
const csvFilePath = 'customer-data.csv'
csv()
  .fromFile(csvFilePath)
  .then((jsonObj)=> {
    fs.writeFile('customer-data.json', JSON.stringify(jsonObj, null, 2), (err) => {
    if (err) throw err;
    console.log('Conversion complete')
  })
})

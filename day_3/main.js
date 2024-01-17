const key = 'patzYrMMVCYJOlcXE.76362c173983f13b62bad834ab15c76bdafb1881c918fb314279a48045b7f685'

var Airtable = require('airtable');
var base = new Airtable({ apiKey: key }).base('appfRI9pJ5OIOt9LV');

const table = base('Articles');

const getRecords = async () => {
    const records = await table.select().firstPage();
    console.log(records)
}

getRecords();
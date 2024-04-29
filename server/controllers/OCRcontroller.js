const path = require('path');
const tesseract = require('tesseract.js');
// const punycode = require('punycode/');
// npm install express-fileupload
// req.files.image.data



const imagePath = 'client/assets/sample3.png';

// let dataVariable = '';


// let foodItem = '';
// let itemAmount = '';
// let itemCost = '';

function extractData(req, res, dataVariable){
  const bunch = [];
  // splitting our data we got back from OCR
  const splitedData = dataVariable.split('\n'); 
  // console.log(dataVariable.split('\n'));
  splitedData.pop();

  const numberRegex = /\b[0-9]+\b/;
  for(let i = 0; i < splitedData.length; i++){
    // for(const string of splitedData){
    const cache = {};

    const splitedCostData = splitedData[i].split('$');
    console.log('splitCostData: ', splitedCostData);
    const itemCost = Number(splitedCostData[1]).toFixed(2);

    cache['itemCost'] = itemCost;
    console.log('itemCost:', typeof cache.itemCost);
    // bunch.push(itemCost);

    const item = splitedCostData[0].split(splitedCostData[0].match(numberRegex));
    // console.log('itemWithComma:', item.toString())

    let foodItem = '';
    for(const i of item.toString()){
      if(i !== ','){
        foodItem += i;
      }
      foodItem = foodItem.trim();
    }
    // console.log('foodItem:', foodItem)
    cache['foodItem'] = foodItem;
    // bunch.push(foodItem)

    let quantity = '';
    for(const i of splitedCostData[0]){
      // console.log(i)
      if(i.match(numberRegex)){
        quantity += i;
        // console.log('Quantity:', quantity)
        // console.log('Number Quant:', Number(quantity))
      }  
    }
    // console.log('itemQuantity:', Number(quantity))
    cache['itemQuantity'] = Number(quantity);
    // bunch.push(Number(quantity))
    bunch.push(cache);
  }    
  // const splitedCostData = splitedData[0].split('$')
  // console.log(splitedData[0].split('$'))
    

  // for(const i of tempVariable){
  //     if(typeof i === 'string'){
  //         foodItem += i
  //     }
  //     console.log('fooditem:', foodItem)
  // }
  // console.log(bunch)
  // console.log(cache)
  res.locals.bunch = bunch;
}

const controller = {};

controller.upload = (req, res, next) => {

  // OCR using tesseract to retreive information from our image file
  tesseract.recognize(req.files.image.data)
  
    .then((result) => {
    // dataVariable = punycode.encode(result.data.text)
      const dataVariable = result.data.text;
      // console.log('data:', result.data)
      extractData(req, res, dataVariable);
      // res.locals.bunch = bunch;
    
      res.status(200).send(res.locals.bunch);

    }).catch((error) => {
      console.log('error:', error.message);
    });

};

module.exports = controller;
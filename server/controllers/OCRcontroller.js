const path = require('path');
const tesseract = require('tesseract.js');
const punycode = require('punycode/');


const imagePath = 'client/assets/sample3.png';

let tempVariable = ''

// OCR using tesseract to retreive information from our image file
tesseract.recognize(imagePath)
  .then((result) => {
    tempVariable = punycode.encode(result.data.text)
    // console.log('data:', result.data)

    extractData()

  }).catch((error) => {
    console.log('error:', error.message)
  })

// let foodItem = '';
// let itemAmount = '';
// let itemCost = '';

let bunch = []

function extractData(){
    // splitting our data we got back from OCR
    const splitedData = tempVariable.split('\n') 
    console.log(tempVariable.split('\n'))
    splitedData.pop()

    const numberRegex = /\b[0-9]+\b/;
    for(let i = 0; i < splitedData.length; i++){
    // for(const string of splitedData){
        const cache = {};

        const splitedCostData = splitedData[i].split('$');
        // console.log(splitedCostData)
        const itemCost = splitedCostData[1];

        cache['itemCost'] = itemCost
        // console.log('itemCost:', itemCost);
        // bunch.push(itemCost);

        let item;
        item = splitedCostData[0].split(splitedCostData[0].match(numberRegex))
        // console.log('itemWithComma:', item.toString())

        let foodItem = '';
        for(let i of item.toString()){
            if(i !== ','){
                foodItem += i
            }
        }
        // console.log('foodItem:', foodItem)
        cache['foodItem'] = foodItem
        // bunch.push(foodItem)

        let quantity = '';
        for(const i of splitedCostData[0]){
            // console.log(i)
            if(i.match(numberRegex)){
                quantity += i
                // console.log('Quantity:', quantity)
                // console.log('Number Quant:', Number(quantity))
            }  
        }
        // console.log('itemQuantity:', Number(quantity))
        cache['itemQuantity'] = Number(quantity)
        // bunch.push(Number(quantity))
        bunch.push(cache)
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
    console.log(bunch)
};

const controller = {};

controller.upload = (req, res, next) => {
    res.status(200).send(tempVariable)
};

module.exports = controller;
var answer1 = $('.answer1');
var answer2 = $('.answer2');
var answer3 = $('.answer3');
var answer4 = $('.answer4');
var answer5 = $('.answer5');
var answer6 = $('.answer6');


var returnPrice = items.map(function(item, i, arr){
  return item.price;
});
var total = returnPrice.reduce(function(returnValueSoFar, number, i, arr){
  return returnValueSoFar + number;
}, 0);
var avg = total/items.length;

console.log(avg);

$(answer1).text('the average price is ' + avg);

var filterPrice = items.filter(function(item, i, arr) {
  if (item.price > 14 && item.price < 18) {
    return true;
  }
}).map(function(item, i, arr){
  return item.title;


});

console.log(filterPrice);

$(answer2).text(filterPrice);

var filterCurrCode = items.filter(function(item, i, arr) {
  if (item.currency_code === 'GBP') {
    return true;
  }
}).map(function(item, i, arr){
  return item.title;
});

console.log(filterCurrCode);

$(answer3).text(filterCurrCode+' costs 18');

var woodItems = items.filter(function(item, i, arr){
  if (item.materials.includes('wood')) {
    return true;
  }
}).map(function(item, i, arr){
  return item.title+' is made of wood';
});
console.log(woodItems);

$(answer4).text(woodItems);

var complexItems = items.filter(function(item, i, arr) {
  if (item.materials.length >= 8) {
    return true;
  }
}).map(function(item, i, arr) {
  console.log(item.title+item.materials);
  return item.title+item.materials;
});


$(answer5).text(complexItems);


var sellerMade = items.filter(function(item, i, arr) {
  if(item.who_made === 'i_did') {
    return true;
  }
}).map(function (item, i, arr) {
  return item.length;
});
console.log(sellerMade.length);
var madeBySeller = sellerMade.length;
$(answer6).text(madeBySeller+' were made by their sellers');

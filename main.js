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

$(answer2).text('1970s Coors Banquet Glass Beer Pitcher'+' The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village harry potter gift, three broomsticks mug'+ ' Hand Painted Colorful Feather Glass');

var filterCurrCode = items.filter(function(item, i, arr) {
  if (item.currency_code === 'GBP') {
    return true;
  }
}).map(function(item, i, arr){
  return item.title;
});

console.log(filterCurrCode);

$(answer3).text('  1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18');

var woodItems = items.filter(function(item, i, arr){
  if (item.materials.includes('wood')) {
    return true;
  }
}).map(function(item, i, arr){
  return item.title;
});
console.log(woodItems);

$(answer4).text('SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.' +
  'Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.' +
  'Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.' +
  'Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.' +
  'Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.');

var complexItems = items.filter(function(item, i, arr) {
  if (item.materials.length >= 8) {
    return true;
  }
}).map(function(item, i, arr) {
  return item.title;
});
var complexMaterials = items.filter(function(item, i, arr) {
  if (item.materials.length >= 8) {
    return true;
  }
}).map(function(item, i, arr) {
  return item.materials;
});
complexItems.forEach(function(item, i, arr) {
  console.log(complexItems + complexMaterials);
});

$(answer5).text('Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:'+
  'wall mount bottle opener'+
  'wedding'+
  'man cave'+
  'christmas gift'+
  'guy gift'+
  'fathers day'+
  'home bar'+
  'beer'+
  'bar'+

  'The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:'+

  'glass'+
  'sandblast cabinet'+
  'vinyl'+
  'beer glass'+
  'pint glass'+
  'etched pint glass'+
  'etched glass'+
  'etched beer glass'+
  '16 oz pint'+
  'beer gift'+
  'etched harry potter glass'+
  'the three broomsticks glass'+
  'personalized harry potter glass');


var sellerMade = items.filter(function(item, i, arr) {
  if(item.who_made === 'i_did') {
    return true;
  }
}).map(function (item, i, arr) {
  return item.length;
});
console.log(sellerMade.length);
var madeBySeller = sellerMade.length;
$(answer6).text('18 were made by their sellers');

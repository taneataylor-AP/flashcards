/*
 * test_card.js
 * Test for the Card class
 */
 
 var localStorage = new Object();
 localStorage.removeItem = function (key) {
    delete this[key];
 }
 var c = new Card({'key':'cf'});
 c.phrase1 = 'QnA';
 c.phrase2 = 'SWE';
 c.save();
  
 function CardTest() {}
 registerTestSuite(CardTest);
 
 CardTest.prototype.InitCard = function() {
  var card = new Card();
  //Assert new card fields are empty
  expectNe('', card.key);
  expectEq('', card.phrase1);
  expectEq('',card.phrase2);
  expectEq(0, card.points);
  
  var card = new Card({'key':'abcd'});
  expectEq('abcd', card.key);
  expectEq('', card.phrase1);
  expectEq('',card.phrase2);
  expectEq(0, card.points);
  
  var card = new Card({'key':'efg','phrase1':'hello','phrase2':'hola'});
  expectEq('efg', card.key);
  expectEq('hello', card.phrase1);
  expectEq('hola',card.phrase2);
  expectEq(0, card.points);
 }
  
CardTest.prototype.CardOps = function() {
  
  //open existing card, modify, save, and re-open
  var card = new Card({'key':'cf'});
  expectEq('cf', card.key);
  expectEq('QnA', card.phrase1);
  expectEq('SWE',card.phrase2);
  expectEq(0, card.points);
  card.pointUp();
  expectEq(1, card.points);
  card.pointDown();
  card.pointDown();
  expectEq(-1, card.points);
  card.phrase1 = 'Example';
  card.phrase2 = 'Name';
  card.save();
  
  var card = new Card({'key':'cf'});
  expectEq('cf', card.key);
  expectEq('Example', card.phrase1);
  expectEq('Name',card.phrase2);
  expectEq(-1, card.points);
  
 }
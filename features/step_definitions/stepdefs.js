const assert = require('assert');
const { Given, When, Then } = require('cucumber');
var expect = require('chai').expect;

function isItFriday(today) {
  if(today === 'Friday') {
    return 'TGIF';
  } else {
    return 'Nope';
  }
}

Given('today is {string}', function (givenDay) {
  this.today = givenDay;
});

When('I ask whether today it is Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
  expect(true).to.be.true;
});
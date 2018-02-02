const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');


const web3 = new Web3(ganache.provider());

// Mocha is the test framework.
// Uses: it (aka function)
// describe (aka class)
// beforeEach (aka setUp)

class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}


let car;

beforeEach(() => {
  car = new Car();
});


describe('Gokart', () => {
  it('can park', () =>{
    assert.equal(car.park(), 'stopped');
  });

  it('can drive', () => {
    const car = new Car();
    assert.equal(car.drive(), 'vroom');
  })
});

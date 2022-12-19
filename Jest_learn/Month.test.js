const countDown = require('./Month.js');

describe("reverce number", ()=>
  it ('reverce number 345 desired result 543', () => {
    
    expect (countDown(345)).toBe(543);
  }),
  it ('reverce number 987 desired result 789', () => {
    
    expect (countDown(987)).toBe(789);
  }),
  it ('reverce number 152 erroneous result 155', () => {
    
    expect (countDown(152)).toBe(155);
  }),
);

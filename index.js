const arr = [1, 2, 3, 4];

// map polyfill
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const mutiplyThree = arr.myMap((elment, index, arr) => {
  return elment * 3;
});

console.log(mutiplyThree);

//filter polyfill
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

const greaterThree = arr.myFilter((element, i, arr) => {
  return element > 2;
});

console.log(greaterThree);

//reduce polyfill
Array.prototype.myReduce = function (cb, initialvalue) {
  let accumulator = initialvalue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const sum = arr.myReduce((acc, element, index, arr) => {
  return acc + element;
}, 0);

console.log(sum);

const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0';
    },

    each: function (collection, callback) {
      for (let k in collection) {
        callback(collection[`${k}`], k, collection);
      }
      return collection;
    },

    map: function (collection, callback) {
      let newCollection = [];
      for (let k in collection) {
        newCollection.push(callback(collection[`${k}`], k, collection));
      }
      return newCollection;
    },

    reduce: function (collection, callback, acc) {
      let i;
      if (!acc) {
        acc = collection[0];
        i = 1;
      } else {
        i = 0;
      }
      for (i; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    find: function (collection, predicate) {
      let res = undefined;
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          res = collection[i];

          break;
        }
      }
      return res;
    },
    filter: function (collection, predicate) {
      let res = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          res.push(collection[i]);
        }
      }
      return res;
    },
    size: function (collection) {
      let num = 0;
      for (let i in collection) {
        num++;
      }
      return num;
    },
    first: function (array, n) {
      if (!n) {
        return array[0];
      }
      let result = [];
      for (let i = 0; i < n; i++) {
        result.push(array[i]);
      }
      return result;
    },
    last: function (array, n) {
      if (!n) {
        return array[array.length - 1];
      }
      n = array.length - n;
      let result = [];
      for (let i = n; i < array.length; i++) {
        result.push(array[i]);
      }

      return result;
    },
    compact: function (array) {
      let result = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          result.push(array[i]);
        }
      }
      return result;
    },
    sortBy: (array, callback) => {
      let newArray = [...array];

      const compare = (a, b) => {
        return callback(a) - callback(b);
      };
      return newArray.sort(compare);
    },
    flatten: (array, shallow) => {
      if (shallow === true) {
        return array.flat(1);
      } else {
        return array.flat(Infinity);
      }
    },
    uniq: (array, isSorted, callback) => {
      let values = [];
      let result = [];
      for (let ele of array) {
        if (callback) {
          if (!values.includes(callback(ele))) {
            values.push(callback(ele));
            result.push(ele);
          }
        } else {
          if (!result.includes(ele)) {
            result.push(ele);
          }
        }
      }
      return result;
    },
    keys: (obj) => {
      let result = [];
      for (let k in obj) {
        result.push(k);
      }
      return result;
    },
    values: (obj) => {
      let result = [];
      for (let k in obj) {
        result.push(obj[k]);
      }
      return result;
    },
    functions: function (obj) {
      let result = [];
      for (let k in obj) {
        if (typeof (obj[k]) === 'function') {
          result.push(k);
        }
      }
      return result.sort();
    },
  };
})();

fi.libraryMethod();

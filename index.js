const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: (collection, cb) => {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++)
        cb(newCollection[i]);

      return collection;
    },

    map: (collection, cb) => {
      if (!(collection instanceof Array))
       collection = Object.values(collection)

     const array = []

     for (let i = 0; i < collection.length; i++)
       array.push(cb(collection[i]))

     return array
    },

    reduce: (c = [], cb = () => {}, acc) => {
			let collection = c.slice(0)
			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			for (let i = 0; i < collection.length; i++) {
				acc = cb(acc, collection[i], collection)
			}
			return acc;
		},

    find: (collection, predicate) => {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) {
          return collection[i]
        }

      return undefined
    },

    filter: (collection, predicate) => {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const arr = []
      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) {
          arr.push(collection[i])
        }

      return arr
    },

    size: (collection) => {
     return (collection instanceof Array) ? collection.length : Object.keys(collection).length
   },

   first: (collection, n=0)=>{
     return (n===0)? collection[0]: collection.slice(0,n);
   },

   last: (collection, n=0) => {
     return (n===0)? collection[collection.length-1]: collection.slice(-n)
   },

   compact: (collection) => {
     const arr = []
     for(let i = 0 ; i<collection.length ; i++){
       if(!!collection[i]) arr.push(collection[i])
     }
     return arr;
   },

   sortBy: (collection, cb) => {
      const arr = [...collection]
      return arr.sort(function(a, b) {
        return cb(a) - cb(b)
      })
    },

    unpack: function(receiver, arr) {
        for (let val of arr)
          receiver.push(val)
      },

      flatten: function(collection, shallow, newArr=[]) {
        if (!Array.isArray(collection)) return newArr.push(collection)
        if (shallow) {
          for (let val of collection)
            Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
        } else {
          for (let val of collection) {
            this.flatten(val, false, newArr)
          }
        }
        return newArr
      },
      uniqSorted: (collection, iteratee) => {
      const sorted = [collection[0]]
      for (let i = 1; i < collection.length; i++) {
        if (sorted[i-1] !== collection[i])
          sorted.push(collection[i])
      }
      return sorted
    },

    uniq: (collection, sorted=false, iteratee=false) => {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: (obj) => {
      return Object.keys(obj)
    },

    values: (obj) => {
      return Object.values(obj)
    },

    functions: function(obj) {
      const functionNames = []
      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    }
  }
})()

fi.libraryMethod()

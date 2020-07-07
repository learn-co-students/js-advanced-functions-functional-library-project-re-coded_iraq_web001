const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(a, b) {
      const newa = (a instanceof Array) ? a.slice() : Object.values(a)

      for (let index = 0; index < newa.length; index++)
        b(newa[index])

      return a
    },

    map: function(a, b) {
      if (!(a instanceof Array))
        a = Object.values(a)

      const newArr = []

      for (let index = 0; index < a.length; index++)
        newArr.push(b(a[index]))

      return newArr
    },


		reduce: function(c = [], callback = () => {}, acc) {
			let a = c.slice(0)

			if (!acc) {
				acc = a[0]
				a = a.slice(1)
			}

			let len = a.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, a[i], a)
			}
			return acc;
		},

    find: function(a, predicate) {
      if (!(a instanceof Array))
        a = Object.values(a)

      for (let index = 0; index < a.length; index++)
        if (predicate(a[index])) return a[index]

      return undefined
    },

    filter: function(a, predicate) {
      if (!(a instanceof Array))
        a = Object.values(a)

      const newArr = []

      for (let index = 0; index < a.length; index++)
        if (predicate(a[index])) newArr.push(a[index])

      return newArr
    },

    size: function(a) {
      return (a instanceof Array) ? a.length : Object.keys(a).length
    },

    first: function(a, stop=false) {
      return (stop) ? a.slice(0, stop) : a[0]
    },

    last: function(a, start=false) {
      return (start) ? a.slice(a.length-start, a.length) : a[a.length-1]
    },

    compact: function(a) {
      const badBad = new Set([false, null, 0, "", undefined, NaN])
      return a.filter(el => !badBad.has(el))
    },

    sortBy: function(a, callback) {
      const newArr = [...a]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(a, shallow, newArr=[]) {
      if (!Array.isArray(a)) return newArr.push(a)
      if (shallow) {
        for (let val of a)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of a) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(a, b) {
      const sorted = [a[0]]
      for (let index = 1; index < a.length; index++) {
        if (sorted[index-1] !== a[index])
          sorted.push(a[index])
      }
      return sorted
    },

    uniq: function(a, sorted=false, b=false) {
      if (sorted) {
        return fi.uniqSorted(a, b)
      } else if (!b) {
        return Array.from(new Set(a))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of a) {
          const moddedVal = b(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      // Using for loop
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      // Using for loop
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)

    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

  }
})()

fi.libraryMethod()

const fi = (function() {
return {
  libraryMethod: function() {
    return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
  },

  each: function(collection,alert) {
  for(let i in collection){
    alert(collection[i],i,collection);
  }
  return collection;
  },

  map: function(collection,alert) {
    let newarr=[];
    for(let i in collection){
     newarr.push(alert(collection[i],i,collection)) 
    }
    return newarr;
  },

  reduce: function(collection, callback,acc) {
    for(let i in collection){
      if(acc === undefined){
        acc = collection[i]
      }
      else{
      
        acc = callback(acc,collection[i],collection)
      }

    }
    return acc;
  },

  functions: function (object) {
    let func = [];
    for (let i in object) {
      if (typeof object[i] === "function") {
        func.push(i);
      }
    }
    return func;
  },

  find: function(collection,callback){
   
    for(let i =0; i<collection.length; i++){
      if(callback(collection[i]) === true){
        return collection[i]
      }
     
    }
  },
 filter: function(collection,callback){
   let newarr = [];
    for(let i =0; i<collection.length; i++){
      if(callback(collection[i])=== true){
        newarr.push(collection[i])
      }
    }
   return newarr
  },

  size:function(collection){
    return Object.keys(collection).length;
  },

  first:function(collection,n){
    if(n === undefined){
      return  collection[0]
    }
    else{
      return collection.slice(0,n)
    }
  },
  last:function(collection,n){
    if(n === undefined){
      return collection[collection.length -1];
    } 
    else{
      return collection.slice(collection.length -n)
    }
  },
  compact:function(collection){
    let newarr =[];
    for(let i in collection){
      if(collection[i]){
        newarr.push(collection[i]);
      }
    }
    return newarr;
  },
  sortBy:function(collection,callback){
    let newarr = [...collection];
    newarr.sort(function(a,b){
      return callback(a) - callback(b);
    })
    return newarr;
  },
  
  flatten: function(array,bolean = false){
      if (bolean === false){
        return array.flat(Infinity)
      }else{
        return [].concat(...array)
      }
    },


    uniq: function(array, isSorted = false, callback) {
      if (callback === undefined) {
        callback = x => x;
      }
      const arr = [];
      let i, j, duplicate;
      for (i = 0; i < array.length; i++) {
        duplicate = false;
        for (j = 0; j < arr.length; j++) {
          if (callback(array[i]) === callback(arr[j])) {
            duplicate = true;
            break;
          }
        }
        if (duplicate === false) arr.push(array[i])
      }
      return arr;
    },


  keys: function(collection){
    return Object.keys(collection);
   },
   values:function(collection){
    return Object.values(collection);
},

}
})()

fi.functions(fi);
const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
   
    each: function(testArr,alert) {
     const  newArr = (testArr instanceof Array) ? testArr.slice() : Object.values(testArr)
    for(let i=0; i<newArr.length; i++){
     alert(newArr[i])
    }
    return testArr
    },
  callback: function(x){
  return x*3
   },
    map: function(test,callback) {
      if(!(test instanceof Array ))
      test = Object.values(test)
    const newArr=[]
    for(let i=0;i<test.length ;i++){
      newArr.push(callback(test[i]))
    }
    return newArr
    },

    reduce: function(testArr,callback,value) {
let accum = value
  if (accum){
  for (let i = 0 ; i< testArr.length ; i++){
  let element = testArr[i]
  accum  =  callback(accum,element)
  }}
  else {
    accum = testArr[0]
    for (let i = 1 ; i< testArr.length ; i++){
  let element = testArr[i]
  accum  =  callback(accum,element)
  }
  }
  return accum ;
    },

    find: function(test,callback) {
   if(!(test instanceof Array ))
      test = Object.values(test)
      
      for(let i=0;i<test.length ;i++)
        
      if(callback(test[i])) 
     
      return test[i] 
      
        return undefined
      },
    
   filter: function(test,callback){
     if(!(test instanceof Array ))
      test = Object.values(test)
      
      const newArr=[]
       for(let i =0;i<test.length;i++)
       if (callback(test[i])) 
       newArr.push(test[i])
       
       return newArr
   },
   
   size: function(test){
     if(!(test instanceof Array ))
      test = Object.values(test)
      return test.length
   },
   
   first: function(test,n=false){
     if(!(test instanceof Array ))
      test = Object.values(test)
      if (n)
      return test.slice(0,n)
      return test[0]
   },
   
   last: function(test,n=false){
     if(!(test instanceof Array ))
      test = Object.values(test)
      if (n)
      return test.slice(test.length-n,test.length)
      return test[test.length -1]
   },
   
   compact: function(test){
      const falsy = new Set([null,false,undefined,NaN,0,""])
     return test.filter(element=>!falsy.has(element))
    
        },
   
   sortBy: function(test,callback){
     const newArr = [...test]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
   },
   unpack: function(array2, array) { 
   for (let val of array) 
   array2.push(val) },
   
   flatten: function(test,shallow,newArr=[]){
     if(!Array.isArray(test)) return newArr.push(test) 
     if (shallow) { 
       for (let val of test) 
       Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val) } 
       else 
       { for (let val of test) 
       { this.flatten(val, false, newArr) } 
       } 
       return newArr
   },
   
   uniqSorted: function(test, callback) { 
     const sorted = [test[0]] 
     for (let i = 1; i < test.length; i++) { 
       if (sorted[i-1] !== test[i]) 
       sorted.push(test[i]) } 
       return sorted 
     
   }, 
   uniq: function(test, sorted=false, callback=false) {
     if (sorted) {
       return fi.uniqSorted(test, callbavk) }
       else if (!callback) { 
         return Array.from(new Set(test)) } 
         else { const modifiedVals = new Set() 
         const uniqVals = new Set() 
         for (let val of test) { 
           const moddedVal = callback(val)
           if (!modifiedVals.has(moddedVal)) { 
             modifiedVals.add(moddedVal) 
             uniqVals.add(val) } } 
             return Array.from(uniqVals) 
           
         }
     
   },
   
   keys: function(obj){
   let keys=[]
     for (let key in obj)
     keys.push(key)
     return keys
   },
values:function(obj){
  let values=[]
  for (let key in obj)
  values.push(obj[key])
  return values
},
functions:function(obj){
  let functionNames = []
  for (let key in obj){
    if (typeof obj[key] === "function"){
      functionNames.push(key)
    }
  }
  return functionNames.sort()
},
  }
})()

fi.libraryMethod()

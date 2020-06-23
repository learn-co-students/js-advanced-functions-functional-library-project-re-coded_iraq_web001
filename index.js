const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(e,c) {
for (let i in e){
  c(e[i])
}
return e
    },

    map: function(e,c) {
let newA = []
for (let i in e){
  newA.push(c(e[i]))
}
return newA
    },
    flatten: function(e,c=false,r=[]){
      if(c){
        for(let i in e){
          if(Array.isArray(e[i])){
          r = r.concat(e[i])
        }else{
          r.push(e[i])
        }}
      }else{
    for (let i in e){
        if(Array.isArray(e[i])){
        this.flatten(e[i],false,r)
        }else{
          r.push(e[i])
        }
      }}
      return r},
    reduce: function(e,c,a) {
      if(a){
        return e.reduce(c,a)
      }
      else{
        return e.reduce(c)
      }
    },
find : function(e,c){
return e.find(c)
},
filter: function(e,c){
  return e.filter(c)
},
size : function (e) {
  let newA = []
  for(let i in e){
    newA.push(e[i])
  }
  return newA.length
},
    functions: function() {

    },
first : function(e,n){
  if(n){
    return e.slice(0,n)
}
else{
return e[0]
}
},
last : function(e,n){
  if(n){
    return e.slice(e.length-n)
  }
  else{
    return e[e.length-1]
  }
},
compact : function(e){
return e.filter(Boolean)
},
sortBy: function(e,c){
  let newA = []
  for (let i in e){
    newA.push(e[i])
  }
  return newA.sort((a, b) => c(a) - c(b))
},
uniq: function(e,s,c) {
let newC = []
if(c){
  e.forEach(x => newC.push(c(x)))
}
else{
  newC = [...e]
}
let newR = []
let result = []
for(let x = 0;x<e.length;x++){
  if(newR.indexOf(newC[x])===-1){
    newR.push(newC[x])
    result.push(e[x])
  }
}
if(!s){
  return result.sort()
}
else{
  return result
}
},
keys : function(o){
  return Object.keys(o)
},
values : function(o){
  return Object.values(o)
},
functions: function(x){
  let newA = []
for (let i in x){
  if (typeof x[i] === "function"){
    newA.push(i)
  }
}
  newA.sort()
  return newA
}
  }
})()

fi.libraryMethod()

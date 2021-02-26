let myArray=[10,20,30,40,50,60]

let randumArray=[]

let newArray=[]

for(let i=0 ; i< myArray.length ; i++){

    let randomNumber=Math.floor(Math.random()*myArray.length)
    
if(!randumArray.includes(randomNumber)){
    randumArray[i]=randomNumber
}else{
    i--
}
}

console.log(randumArray)

for(let i=0 ; i< myArray.length ; i++){
  newArray[i] =myArray[randumArray[i]] 
}
console.log(newArray)
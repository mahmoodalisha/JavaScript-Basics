//Question1: Map vs forEach?
//both are array functions to loop through the array
const a = [2,5,3,4,7];
const mapResult = a.map((a)=> {
return a+2;
}) //its gonna return the whole array with 2 added to each element, its not going to modify the array
console.log(mapResult)

const forEachResult = a.forEach((a)=> {
return a+2;
})  //it does not return anything, it returns undefined and performs like a normal loop
console.log(forEachResult)


//Question2: difference between null and undefined?
//null is the actual value and undefined means that the variable is decalred but not initialized

//Question3: What is event delegation?
//single event listener is added to a parent element to manage events for its child elements. 
function handleButtonClick(event) {
    console.log('Button clicked:', event.target);
  }
  
  // Assign the event handler to a button
  const button = document.querySelector('button');
  button.addEventListener('click', handleButtonClick);
  
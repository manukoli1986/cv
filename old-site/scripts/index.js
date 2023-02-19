console.log("I'M Mayank Koli " + "$$$$$" + " Welcome to My Page");

// Array.from(document.getElementsByClassName("top-container")).forEach(function func(elems) { 
//   console.log(elems)
// });

// function img() {
//   let heading = document.getElementsById('image');
//   img.addEventListener(clickEvent, function(){
//     console.log('You have clicked on pic')
//   })
// };

// a = document.getElementById('btn')
// a = document.getElementsByClassName('container')


// console.log(a)








// Function 
function getClicked(elems) {
  document.getElementById(elems).addEventListener('click', function(){
    console.log('You have clicked on ' + elems )
  })};
console.log(getClicked('image'));


// Changes color of container
// func1 = document.querySelector('.top-container').addEventListener('mousemove', function(e){
//   console.log(e.offsetX, e.offsetY);
//   document.body.style.color = `rgb(${e.offsetX},${e.offsetY},111)`;
// })


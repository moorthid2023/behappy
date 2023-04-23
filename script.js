let be = document.getElementById('be');
let happy = document.getElementById('happy');
let root = document.getElementById('root');
let body = document.querySelector('body');
var vh = window.innerHeight;

window.addEventListener("scroll", function(event) {
      
    var scroll_y = this.scrollY;
    var scroll_x = this.scrollX;
    console.log(scroll_x, scroll_y);
    be.style.top = (0.14)*scroll_y+'px';
    happy.style.top = (0.251)*scroll_y+'px';
    be.style.opacity=(0.001)*scroll_y;
    happy.style.opacity=(0.001)*scroll_y;
});

// var x = window.matchMedia('(min-width:600px)');

// function myFunction(x){
//     if(x.matches){
//         //if media query matches
//         document.body.innerHTML= 'ok';
//     }else{
//         document.body.innerHTML='not ok';
//     }
// };

// myFunction(x)//call listener function at run time
// x.addListener(myFunction);

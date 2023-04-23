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

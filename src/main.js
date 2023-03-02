import "./style.css";

let nav = document.getElementById('stickyNav');

const onMouseMove = (e) =>{
  nav.style.top = e.pageY + 'px';
}
const onScroll = (e) =>{
    console.log(window.pageYOffset);
    nav.style.top = e.pageY+ 'px';
  }


document.addEventListener('scroll', onScroll);
document.addEventListener('mousemove', onMouseMove);
   


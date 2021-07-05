const box = document.querySelector('.box');

box.addEventListener('mouseover', e => {
  console.log(e);
  box.innerHTML = `<p>x: ${e.screenX}</p>
                   <p>y: ${e.screenY}</p>`
})
const yesbt = document.querySelector('#yesbt');

yesbt.addEventListener('click',function () {
    alert('Sabía que ibas a decir que si 💓')
})

const notb = document.querySelector('#nobt')

notb.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nobt.style.setProperty('top',randomY+'%');
    nobt.style.SetProperty('left',randomX+'%');
    nobt.style.setProperty('transform',`traslate(-${RandomX}%,-${randomY}%`);
})
// get total items
const itemsLength = document.querySelectorAll('.slider .item').length;
console.log(itemsLength)

document.querySelector('.btn.prev').style.display = 'none'

// set width parent of items
document.querySelector('.slider-content').style.width = 100 * itemsLength + '%'

// set width items
document.querySelectorAll('.item').forEach(element => {
    element.style.width = (100 / itemsLength) + '%'
});

document.getElementById('textIndex').innerHTML = '1/'+ itemsLength

document.querySelector('.btn.next').addEventListener('click', function(){

    // get element active
    const elActive = document.querySelector('.slider .item.active')
    
    // get index element Active of
    const index = Array.from(
        elActive.parentElement.children
    ).indexOf(elActive);

    //  if index = 1 + btn : next => -(100/itemsLength * index)
    document.querySelector('.slider-content').style.transform = 'translateX(-' + (100 / itemsLength) * (index + 1) + '%)'

    // add class active to next el
    elActive.nextElementSibling.classList.add('active')

    // remove class active to el active
    elActive.classList.remove('active')
    
    // hide btn if show last item
    if (index + 1 == itemsLength-1) {
        document.querySelector('.btn.next').style.display = 'none'
    }
    document.querySelector('.btn.prev').style.display = 'block'

    document.getElementById('textIndex').innerHTML = index+2 + '/' + itemsLength
})

document.querySelector('.btn.prev').addEventListener('click', function () {

    // get element active
    const elActive = document.querySelector('.slider .item.active')

    // get index element Active of
    const index = Array.from(
        elActive.parentElement.children
    ).indexOf(elActive);

    //  if index = 1 + btn : next => -(100/itemsLength * index)
    document.querySelector('.slider-content').style.transform = 'translateX(-' + (100 / itemsLength) * (index-1) + '%)'

    // add class active to next el
    elActive.previousElementSibling.classList.add('active')

    // remove class active to el active
    elActive.classList.remove('active')

    // hide btn if show last item
    if (index - 1  == 0) {
        document.querySelector('.btn.prev').style.display = 'none'
    }
    document.querySelector('.btn.next').style.display = 'block'

    document.getElementById('textIndex').innerHTML = index + '/' + itemsLength
})

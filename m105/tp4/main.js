// Add city
document.getElementById('btn-add').addEventListener('click', function(event){
    //bloque event 
    event.preventDefault()

    //get value input
    const city = document.getElementById('city').value

    // create li
    const li = document.createElement('li')

    // add text li
    li.textContent = city

    // add attr
    li.id = city.toLowerCase().replace(' ', '-')

    // add click
    li.addEventListener('click', function(){
        
        // fetch li.selected
        
        if (document.querySelector('li.selected')) {
            document.querySelector('li.selected').classList.remove('selected')
        }

        /*
        document.querySelectorAll('li.selected').forEach(item => {
            // remove class
            item.classList.remove('selected')
        })
        */

        // add class
        this.classList.add('selected')

        // add value to input
        document.getElementById('city').value = this.innerText
    })

    // append li
    document.getElementById('cities').append(li)

    // clear input
    document.getElementById('city').value = ""
})

// delete city
document.getElementById('btn-delete').addEventListener('click', function(){

    // check city if exist
    if (document.querySelector('li.selected')) {

        // remove li
        document.querySelector('li.selected').remove()

        // clear input
        document.getElementById('city').value = ""
    }
})
document.getElementById('showForm').addEventListener('click', function(){
    document.getElementById('lightbox').classList.add('show')
    
})

document.getElementById('btnCancel').addEventListener('click', function(){
    document.getElementById('lightbox').classList.remove('show')
})

document.getElementById('formAdd').addEventListener('submit', function(event){
    event.preventDefault()
    const inputCode = document.getElementById('code').value
    const inputName = document.getElementById('name').value
    const inputFirstName = document.getElementById('firstName').value
    const inputSemester = document.getElementById('semester').value
    const inputSector = document.getElementById('sector').value

    var tr = document.createElement('tr');

    tr.addEventListener('click', function () {
        document.querySelectorAll('tbody tr').forEach(element => {
            element.classList.remove('active')
        })

        this.classList.add('active')
        document.getElementById('deleteRow').style.display = 'inline-block'
    })
    
    // inputCode
    let tdInputCode = document.createElement('td');
    tdInputCode.textContent = inputCode
    tr.append(tdInputCode)

    // inputName
    let tdInputName = document.createElement('td');
    tdInputName.textContent = inputName
    tr.append(tdInputName)

    // inputFirstName
    let tdInputFirstName = document.createElement('td');
    tdInputFirstName.textContent = inputFirstName
    tr.append(tdInputFirstName)

    // inputCode
    let tdInputSemester = document.createElement('td');
    tdInputSemester.textContent = inputSemester
    tr.append(tdInputSemester)

    // inputCode
    const tdInputSector = document.createElement('td');
    tdInputSector.textContent = inputSector
    tr.append(tdInputSector)

    document.querySelector('table#data tbody').append(tr);
    document.getElementById('lightbox').classList.remove('show')

    /*document.getElementById('code').value = ""
    document.getElementById('name').value = ""
    document.getElementById('firstName').value = ""
    document.getElementById('semester').value = ""
    document.getElementById('sector').value = ""*/
})

document.getElementById('deleteRow').addEventListener('click', () => {
    document.querySelector('tr.active').remove()
    document.getElementById('deleteRow').style.display = 'none'
})


document.getElementById('btn-close').addEventListener('click', function(){
    document.getElementById('lightbox').classList.remove('show')
})

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()
    const value = document.getElementById('comment-text').value
    // if forn update 
    if (this.classList.contains('update')){
        document.querySelector('li.isUpdate p').innerText = value;
        document.getElementById('comment-text').value = ""
        return
    }
    
    const li = document.createElement('li')

    // value
    const p = document.createElement('p')
    p.textContent = value

    li.append(p)
    
    // time of comment
    const dateTime = document.createElement('span');
    const date = new Date();
    dateTime.textContent = date.getDate() +'-'+date.getMonth()+'-'+date.getFullYear() + ' ' + date.getHours()+':'+date.getMinutes()
    li.append(dateTime) 
    
    // btn update
    const btnUpdate = document.createElement('span')
    btnUpdate.classList.add('btn')
    btnUpdate.classList.add('btn-update')

    btnUpdate.addEventListener('click', function(){
        document.getElementById('comment-text').value = this.parentElement.firstChild.textContent
        this.parentElement.classList.add('isUpdate')
        document.getElementById('form').classList.add('update')
    })

    li.append(btnUpdate) 
    
    // delete
    const btnDelete = document.createElement('span')
    btnDelete.classList.add('btn')
    btnDelete.classList.add('btn-delete')
    
    btnDelete.addEventListener('click', function() {
        this.parentElement.remove()
    });
    li.append(btnDelete) 
    
    document.getElementById('comments').append(li)
    document.getElementById('comment-text').value = ""
})
const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault()

    document.querySelectorAll('form span').forEach(item => {
        item.innerText= ''
    })

    if (document.getElementById('profile_genre').value == '') {
        document.getElementById('profile_genre').parentElement.children[2].innerText = "Ce champ est obligatoire"
    }

    if (document.getElementById('profile_name').value == '') {
        document.getElementById('profile_name').parentElement.children[2].innerText="Ce champ est obligatoire"
    }
    if (document.getElementById('profile_prenom').value == '') {
        document.getElementById('profile_prenom').parentElement.children[2].innerText = "Ce champ est obligatoire"
    }

    if (document.getElementById('profile_date').value == '') {
        document.getElementById('profile_date').parentElement.children[2].innerText = "Ce champ est obligatoire"
    }

    if (document.getElementById('profile_mail').value == '') {
        document.getElementById('profile_mail').parentElement.children[2].innerText = "Ce champ est obligatoire"
    } else if (!validateEmail(document.getElementById('profile_mail').value)) {
        document.getElementById('profile_mail').parentElement.children[2].innerText = "Cet email est invalid"
    }

    if (document.getElementById('profile_password').value == '') {
        document.getElementById('profile_password').parentElement.children[2].innerText = "Ce champ est obligatoire"
    } else if (document.getElementById('profile_password').value.length < 8) {
        document.getElementById('profile_password').parentElement.children[2].innerText = "Au moins 8 caracteres"
    }

    if (!document.getElementById('profile_accept').checked) {
        document.getElementById('profile_accept').parentElement.children[2].innerText = "Veuillez accepter les conditions"
    }
})


document.getElementById('icon-eys').addEventListener('click', function() {
    if (document.getElementById('profile_password').getAttribute('type') === 'text') {
        document.getElementById('profile_password').setAttribute('type', 'password')
    } else {
        document.getElementById('profile_password').setAttribute('type', 'text')
    }
})

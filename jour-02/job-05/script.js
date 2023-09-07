const body = document.querySelector('#result');
let form = document.querySelector('#form-search-student');

async function mySearchStudent(form) {
    // on envoie l'email en paramètre get
    let formData = new FormData(form);
    let response = await fetch('request.php?email=' + formData.get('email-search-student'));
    let result = await response.json();

    // on vide le body
    body.innerHTML = '';

    // on créé un tableau HTML avec les données reçues
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let trHead = document.createElement('tr');
    let trBody = document.createElement('tr');
    //-----------------------------------------------
    // thead
    for (let key in result[0]) {
        const th = document.createElement('th');
        th.textContent = key;
        trHead.appendChild(th);
    }
    thead.appendChild(trHead);
    table.appendChild(thead);
    // __________________________________
    // tbody
    for (let value of result) {
        for (let key in value) {
            const td = document.createElement('td');
            td.textContent = value[key];
            trBody.appendChild(td);
        }
        tbody.appendChild(trBody);
        table.appendChild(tbody);
    }

    body.appendChild(table);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    mySearchStudent(form);
});

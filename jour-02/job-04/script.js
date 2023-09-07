const form = document.querySelector('#form-add-student');
let select = document.querySelector('#student-grade');

async function getGrade() {
    let response = await fetch('request.php?get=grade');
    let result = await response.json();
    for (let i = 0; i < result.length; i++) {
        let option = document.createElement('option');
        option.textContent = result[i].name;
        option.value = result[i].id;
        select.appendChild(option);
    }
}
async function myRegisterStudent(form) {
    let formData = new FormData(form);
    let response = await fetch('request.php', {
        method: 'POST',
        body: formData
    });
    let result = await response.text();
    if (result === 'Student registered successfully') {
        alert('Student registered successfully');
    } else if (result === "Error while registering student") {
        alert('Error while registering student');
    }

}


getGrade();

form.addEventListener('submit', function(e) {
    e.preventDefault();
    myRegisterStudent(form);
});
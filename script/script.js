const input = document.querySelector("#input");
const error = document.querySelector("#error");

input.addEventListener('keyup', (e) => {
    let result = e.target.value
    let reg = /(?=.*[A-Z])(?=.*[a-z])/
    if (!reg.test(result)) {
        error.innerText = "*Password must have Lower and Upper cases"
    } else {
        error.innerText = ""
    }
})    
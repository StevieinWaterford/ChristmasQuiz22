let userName = document.querySelector("#userName");
let headerText = document.querySelector("#headerText")

function greeting() {
    headerText.innerHTML = ""
    headerText.innerHTML = "Hello " + userName.value + ", Welcome to Christmas quiz 2022";
}
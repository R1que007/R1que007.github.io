// create a function called treasure
const treasure = () => {
var bomb = Math.floor(Math.random() * 8)
var gold = Math.floor(Math.random() * 8)
if (location==='bomb') {
    document.getElementById(location).innerHTML = "&#x2620"
}
else if (location==='gold') {
    document.getElementById(location).innerHTML = "&#x1f308"
}
else{
    document.getElementById(location).innerHTML = "&#x1f332"  
}
}
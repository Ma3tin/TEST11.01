class Transaction {
    constructor(isExpense, value, description) {
        this.isExpense = isExpense
        this.value = value
        this.description = description
    }
}

let transactions = [
    new Transaction(true, 99, "Albert"),
    new Transaction(true, 982, "Nike"),
    new Transaction(false, 999, "Vyřízení reklamace"),
    new Transaction(true, 233, "KFC"),
    new Transaction(false, 549, "Peníze od babičky👵")
]

window.onload = () => {
    let table = document.getElementById("listGroup")
    table.innerHTML =''
    let li
    for (let i = 0; i < transactions.length; i++) {
        li = document.createElement("li")
        if (transactions[i].isExpense) {
            console.log("haf")
            li.innerHTML = "<i class=\"fas fa-chevron-circle-down text-danger\"></i>"
        }
        else li.innerHTML = "<i class=\"fas fa-chevron-circle-up text-success\"></i>"
        li.innerHTML += "<span>"+transactions[i].description+"</span>"
        li.innerHTML += "<span>"+transactions[i].value + ",-</span>"
        li.className = "list-group-item d-flex justify-content-between"
        console.log("pepe")
        console.log(li)
        console.log(transactions[i].value)
        table.appendChild(li)
    }

}
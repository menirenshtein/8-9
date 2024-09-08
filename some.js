function arrow(num, bool) {
    if (bool) {
        console.log(("=".repeat(num) + ">"))
    }
    else
        console.log("<" +("=".repeat(num)))
}

// arrow(5, false)

// console.log("=".repeat(5) + ">")

function nummers() {
    let zero = []
    let input = parseInt(prompt)
    while (input !== 0){
        input = parseInt(prompt);
        zero.unshift(input)
    }
    console.log(zero);     
}
nummers()
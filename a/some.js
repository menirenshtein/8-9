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
// nummers()


function stars() {
    for (let i = 3; i >= 0; i--) {
        console.log("*".repeat(i));        
        ;        
    }
}

// stars()
let res = "\n"
function nnn(num) {
    for (let i = 1; i <= num; i++) {
        for(let j = 1; j <= num; j ++){
            res += (i*j) + " "
        }            
        res += "\n"   
    }        
    return res         
}

// console.log(nnn(10))


function rev(num) {
    let a =0;
    while (num  / 10 != 0){
        a = (a * 10) + num % 10
        num = Math.floor(num / 10)
    }
    return a
    
}
// console.log(rev(1234))


const h1 = document.createElement("h1")
h1.innerHTML = "hey im dome";

const mainDiv = document.getElementById("mainDiv")
mainDiv.appendChild(h1)

const btn = document.createElement("button");
btn.innerHTML = "click";
btn.style.backgroundColor = "lightgreen";
mainDiv.appendChild(btn)

btn.setAttribute("class", "btnClass")

function clickBtn() {
    alert("work")
}

btn.addEventListener("click", clickBtn)

const prod = [
    {
        name : "wafel",
        price: 39.99,
    },
    {
        name: "chips",
        price: 34.99
    }
]

function divMaker(arr){
    
    const mainDiv = document.getElementById("mainDiv")
    arr.forEach(element => {
       const newDiv = document.createElement("div")
       mainDiv.appendChild(newDiv)
       const h2 = document.createElement("h2")
       h2.innerHTML = element.name
       h2.innerHTML = element.price
       newDiv.appendChild(h2)
    });
}

divMaker(prod)
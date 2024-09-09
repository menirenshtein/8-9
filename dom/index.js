const cars = [
    {
      model: "Toyota Corolla",
      year: 2022,
      color: "White"
    },
    {
      model: "Honda Civic",
      year: 2021,
      color: "Black"
    },
    {
      model: "Ford Mustang",
      year: 2023,
      color: "Red"
    },
    {
      model: "Chevrolet Camaro",
      year: 2020,
      color: "Blue"
    },
    {
      model: "Tesla Model 3",
      year: 2024,
      color: "Silver"
    },
    {
      model: "BMW 3 Series",
      year: 2022,
      color: "Gray"
    },
    {
      model: "Audi A4",
      year: 2021,
      color: "Black"
    },
    {
      model: "Mercedes-Benz C-Class",
      year: 2023,
      color: "White"
    },
    {
      model: "Mazda 6",
      year: 2020,
      color: "Blue"
    },
    {
      model: "Volkswagen Passat",
      year: 2022,
      color: "Red"
    },
    {
      model: "Subaru Impreza",
      year: 2021,
      color: "Green"
    },
    {
      model: "Hyundai Elantra",
      year: 2020,
      color: "Silver"
    },
    {
      model: "Kia Optima",
      year: 2023,
      color: "Black"
    },
    {
      model: "Nissan Altima",
      year: 2022,
      color: "White"
    },
    {
      model: "Dodge Charger",
      year: 2021,
      color: "Yellow"
    }
  ];
  

  
  function inpuTyping() {
      const data = document.getElementById("carChooice").value
      carRepesentiv(data)
    }
    
function carRepesentiv(input) {
    const mainDiv = document.getElementById("mainDiv")
    let car = cars.filter((carC)=> carC.model.includes(input))
    car.forEach(car => {
            const div = document.createElement("div")
            const p =  document.createElement("p")
            mainDiv.appendChild(div)
            mainDiv.appendChild(p)
            // div.style.border("1px, sold, blue")
            p.innerText = car.model
            p.innerText +=  " " + car.color
            p.innerText += " " +car.year
            const button = document.createElement("button")
            mainDiv.appendChild(button)
            button.innerText = " choose "
            button.addEventListener("click", ()=>{
            alert(car.model += " " + car.year + " " + car.color)
            } )
        }
    )
};

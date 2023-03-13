let inputElement = document.querySelector("input")
let listElement = document.querySelector("#navlist")
let itemElement = listElement.querySelectorAll("li")



inputElement.addEventListener("input", (e) => {
  let inputed = e.target.value.toLowerCase()
  itemElement.forEach((li) => {
    let text = li.textContent.toLowerCase()
    if(text.includes(inputed)){
      li.style.display = "block"
    }else{
      li.style.display = "none"
    }
  })
})


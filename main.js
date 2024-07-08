const list = document.querySelector("ul")
console.log(list)


const burger = document.getElementById("burger")
console.log(burger)

const list_array = list.querySelectorAll("li")

burger.addEventListener("click",function () {

  list.classList.toggle("visible")
  list_array.forEach((listid) => {
    listid.querySelector("a").classList.toggle("visibility")
  })
  console.log(list)
})



console.log(burger)

//第一種作法
// const button = document.querySelector("button")
// button.addEventListener("click", function () {
//   const r = Math.floor(Math.random() * 256)
//   const g = Math.floor(Math.random() * 256)
//   const b = Math.floor(Math.random() * 256)
//   const newColor = `rgb(${r}, ${g}, ${b})`
//   document.body.style.backgroundColor = newColor
// })

//第二種做法
const button = document.querySelector("button")
const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

button.addEventListener("click", function () {
  const newColor = makeRandomColor()
  const h1 = document.querySelector("h1")
  document.body.style.backgroundColor = newColor
  h1.innerText = newColor
})
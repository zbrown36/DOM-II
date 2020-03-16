// * [ ] `mouseover`
// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [ ] `dblclick`

// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

// Your code goes here

// animations to use
const enterBig = event => event.target.style.transform = "scale(1.5)"
const exitNorm = event => event.target.style.transform = "scale(1)"
const transSpeed = event => event.target.style.transition = "0.3s"
const redFocus = event => event.target.style.color = 'red'
const blueFocus = event => event.target.style.color = 'blue'
const yellowFocus = event => event.target.style.color = '#ffd561'
const returnColor = eventer => event.target.style.color = 'black'
const spinIt = event => event.target.style.transform = 'rotate(360deg)'


// main header hover animation
const titleHead = document.querySelector(".logo-heading")

titleHead.addEventListener('mouseenter', enterBig)
titleHead.addEventListener('mouseleave', exitNorm)
titleHead.addEventListener('mouseenter',transSpeed)
titleHead.addEventListener('mouseenter', redFocus)
titleHead.addEventListener('mouseleave', returnColor)

// navigation animation
const navB = document.querySelectorAll(".nav-link")

navB.forEach(link => {
    link.addEventListener('mouseenter', enterBig)
    link.addEventListener('mouseenter', transSpeed)
    link.addEventListener('mouseleave', exitNorm)
})

navB.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('stopped!')
    })
})

navB.forEach(link => {
    link.addEventListener('click', redFocus)
    link.addEventListener('dblclick', blueFocus)
    link.addEventListener('mouseenter', yellowFocus)
    link.addEventListener('mouseleave', returnColor)
})

// change the background when clicked
const body = document.querySelector("body");
body.addEventListener("click", () => {
  body.style.backgroundColor="grey";
  console.log("end")
})

const content = document.querySelector(".change-it");
content.addEventListener('click', (event) => {
  content.style.backgroundColor="rebeccapurple";
    event.stopPropagation()

  console.log("middle")
});

//spins the buttons when clicked

const buttonAni = document.querySelectorAll('.btn')

buttonAni.forEach(button => {
    button.addEventListener('click', spinIt)
    button.addEventListener('click', transSpeed)
})


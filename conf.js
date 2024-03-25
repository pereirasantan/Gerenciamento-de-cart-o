const formulario = document.querySelector('#formulario')
const check = document.querySelector('#check')

var cardNumber=document.querySelector('#card-number')
var cardName=document.querySelector('#card-name')

var btnConfirm=document.querySelector('button')

const verify=[...document.querySelectorAll('.verify')]

btnConfirm.addEventListener('click',(e)=>{
  e.preventDefault()
  verify.map((e)=>{
    if (document.querySelector('#name').value == "Fabian holder") {
      e.style.display = "block"
      e.innerText = "correct"
      e.style.color = "green"
    }
  })
  setTimeout(()=>{
    formulario.style.display = "none"
    check.style.display = "flex"
  },600)
})

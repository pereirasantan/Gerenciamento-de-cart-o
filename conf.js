var cardNumber=document.querySelector('#card-number')
var cardName=document.querySelector('#card-name')
var mmyy=document.querySelector('#mmyy')

var yy=document.querySelector('#yy')

var cvc=document.querySelector('#dig')

var btnConfirm=document.querySelector('button')
const verify=[...document.querySelectorAll('.verify')]

var inputs=[...document.querySelector('input')]

btnConfirm.addEventListener('click',(e)=>{
  e.preventDefault()
  verify.map((e,i)=>{
    inputs.map((e,i)=>{
      if(e.value==" "){
        if (document.querySelector('#name').value == "Fabian holder") {
          e.innerText = "correct"
          e.style.color = "green"
          if (document.querySelector('#num').value == 000) {
            e.innerText = "correct"
            e.style.color = "green"
            if (document.querySelector('#mm').value == 09) {
              e.innerText = "correct"
              e.style.color = "green"
              if (document.querySelector('#yy').value == 07) {
                e.innerText = "correct"
                e.style.color = "green"
                if (document.querySelector('#dig').value == 800) {
                  e.innerText = "correct"
                  e.style.color = "green"
                }
              }
            }
          }
        }
      }
    })
  })
})
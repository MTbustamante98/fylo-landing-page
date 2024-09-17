const inputs = document.querySelectorAll('input[type="text"]');
const btn = document.querySelectorAll('button');
const messages = document.querySelectorAll('.para span');

function eventSubtmit(event) {
  event.preventDefault();
  const formIndex = Array.from(btn).indexOf(event.target);
  const input = inputs[formIndex];
  const message = messages[formIndex];
  

  if (input.value.trim() === "") {
    message.innerText = 'Please fill in the fields'
  }
  else {
    message.innerText = 'Form sent successfully!'
    message.style.color = 'green'
  }
}

btn.forEach(buttons => {
  buttons.addEventListener('click', eventSubtmit);
})
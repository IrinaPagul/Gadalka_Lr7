const question = document.createElement('input');
question.type = 'text';
question.placeholder = 'Введіть запитання: ';
document.body.appendChild(question);

question.style.position = 'absolute';
question.style.left = '50%'; 
question.style.transform = 'translateX(-50%)'; 
question.style.top = '15%';
question.style.fontSize = '20px'; 
question.style.padding = '15px'; 
question.style.backgroundColor = 'rgba(0,0,0, 0.5)';
question.style.color = 'white';
question.style.borderRadius = '8px';
question.style.width = '300px'; 

const style = document.createElement('style');
style.textContent = `input::placeholder {color: white;font-style: italic;}`;
document.head.appendChild(style);
document.body.style.backgroundImage = "url('background_large.png')";
document.body.style.backgroundRepeat = "no-repeat";
const mediaStyle = document.createElement('style');
mediaStyle.textContent = `
  @media (min-width: 1400px) {
    body {
      background-position: center;
      background-color: black;
      background-size: 80%;
    }
  }
  @media (max-width: 1400px) {
    body {
      background-size: cover;
      background-position: center;
    }
  }
  @media (max-width: 480px) {
    body {
      background-size: cover;
      background-position: center;
    }
  }`;
document.head.appendChild(mediaStyle);
document.body.style.margin = '0';
document.body.style.height = '100vh';
const answer = document.createElement('h1');
answer.textContent = '';

document.body.appendChild(answer);
answer.style.position = 'absolute';
answer.style.left = '50%'; 
answer.style.transform = 'translateX(-50%)'; 
answer.style.top = '40%'; 
answer.style.fontSize = '20px'; 
answer.style.padding = '15px'; 
answer.style.backgroundColor = 'rgba(0,0,0, 0.5)';
answer.style.color = 'white';
answer.style.borderRadius = '8px';
answer.style.width = '100px'; 

const button = document.createElement('button');
button.textContent = 'Гадати';
button.setAttribute('id', 'btn')
document.body.appendChild(button);
button.style.position = 'absolute';
button.style.left = '50%'; 
button.style.top = '80%'; 
button.style.transform = 'translate(-50%, -50%)'; 
button.style.fontSize = '20px';
button.style.padding = '15px'; 
button.style.backgroundColor = 'rgba(244,231,134, 0.4)';
button.style.color = 'white';
button.style.borderRadius = '8px';
button.style.width = '100px'; 
button.style.textAlign = 'center'; 
const btn = document.getElementById('btn');
btn.addEventListener('click',goRandom);
function goRandom(){
    let quest = question.value;
    if( quest.length % 2 == 0){
        answer.innerHTML = "Так";
    }else{
        answer.innerHTML = "Ні";
    }
}
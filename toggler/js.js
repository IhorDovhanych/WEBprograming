var mood = document.querySelectorAll('.mood'); //select div
const but = document.getElementById('but'); //select button

//button fuction
but.onclick = function e() {
  let choose = prompt('What is your mood (good / bad)?');
  if (choose == 'good') {
    mood[0].classList.remove('selected');
    mood[1].classList.add('selected');
  } else if (choose == 'bad') {
    mood[1].classList.remove('selected');
    mood[0].classList.add('selected');
  } else e();
};

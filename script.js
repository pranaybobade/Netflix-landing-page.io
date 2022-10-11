const firstLi = document.getElementById ('first-li');
const rotate = document.querySelector ('.rotate');
const contentSec = document.querySelector ('.content-sec');

const secondLi = document.getElementById ('second-li');
const contentSecSecond = document.getElementById ('second-hide');
const secondRotate = document.getElementById ('second-rotate');

const thirdLi = document.getElementById ('third-li');
const contentSecthird = document.getElementById ('third-hide');
const thirdRotate = document.getElementById ('third-rotate');

const fourthLi = document.getElementById ('fourth-li');
const contentSecfourth = document.getElementById ('fourth-hide');
const fourthRotate = document.getElementById ('fourth-rotate');

const fifthLi = document.getElementById ('fifth-li');
const contentSecfifth = document.getElementById ('fifth-hide');
const fifthRotate = document.getElementById ('fifth-rotate');

const sixthLi = document.getElementById ('sixth-li');
const contentSecsixth = document.getElementById ('sixth-hide');
const sixthRotate = document.getElementById ('sixth-rotate');

const func = () => {
  firstLi.addEventListener ('click', () => {
    firstLi.classList.toggle ('show');
    rotate.classList.toggle ('show');
    contentSec.classList.toggle ('hidden');
  });
  secondLi.addEventListener ('click', () => {
    secondLi.classList.toggle ('show');
    secondRotate.classList.toggle ('show');
    contentSecSecond.classList.toggle ('hidden');
  });
  thirdLi.addEventListener ('click', () => {
    thirdLi.classList.toggle ('show');
    thirdRotate.classList.toggle ('show');
    contentSecthird.classList.toggle ('hidden');
  });
  fourthLi.addEventListener ('click', () => {
    fourthLi.classList.toggle ('show');
    fourthRotate.classList.toggle ('show');
    contentSecfourth.classList.toggle ('hidden');
  });
  fifthLi.addEventListener ('click', () => {
    fifthLi.classList.toggle ('show');
    fifthRotate.classList.toggle ('show');
    contentSecfifth.classList.toggle ('hidden');
  });
  sixthLi.addEventListener ('click', () => {
    sixthLi.classList.toggle ('show');
    sixthRotate.classList.toggle ('show');
    contentSecsixth.classList.toggle ('hidden');
  });
};
func ();

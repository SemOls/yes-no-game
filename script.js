const image= document.querySelector("#image");
const text = document.querySelector("#question");
const btnOne=document.querySelector("#one");
const btnTwo=document.querySelector("#two");

console.log(text)

btnOne.addEventListener("click", questionOne);
btnTwo.addEventListener("click", questionTwo);

function questionOne () {
    image.setAttribute ("src", "https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Хотя бы раз в жизни вы отмечали свой день рождения?"

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Нет";
    btnOne.addEventListener("click", questionTree);
    btnTwo.addEventListener("click", questionFour);
}

function questionTwo () {
    image.setAttribute ("src", "https://images.pexels.com/photos/848740/pexels-photo-848740.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Не может этого быть, а ну дай ме правильный ответ...."

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Да";
    btnOne.addEventListener("click", questionTree);
    btnTwo.addEventListener("click", questionTree);
}

function questionTree () {
    image.setAttribute ("src", "https://images.pexels.com/photos/3405452/pexels-photo-3405452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Любите ли вы телевидение без рекламы?"

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Нет";
    btnOne.addEventListener("click", questionFive);
    btnTwo.addEventListener("click", questionSix);
}

function questionFour () {
    image.setAttribute ("src", "https://images.pexels.com/photos/3771644/pexels-photo-3771644.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Не может этого быть, а ну дай ме правильный ответ...."

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Да";
    btnOne.addEventListener("click", questionFive);
    btnTwo.addEventListener("click", questionFive);
}

function questionFive () {
    image.setAttribute ("src", "https://images.pexels.com/photos/5331074/pexels-photo-5331074.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Вы умеете читать?"

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Нет";
    btnOne.addEventListener("click", questionSeven);
    btnTwo.addEventListener("click", questionEight);
}
function questionSix () {
    image.setAttribute ("src", "https://images.pexels.com/photos/3812752/pexels-photo-3812752.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Не может этого быть, а ну дай ме правильный ответ...."

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Да";
    btnOne.addEventListener("click", questionSeven);
    btnTwo.addEventListener("click", questionSeven);
}

function questionSeven () {
    image.setAttribute ("src", "https://images.pexels.com/photos/235554/pexels-photo-235554.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Ваша мама - женщина?"

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Нет";
    btnOne.addEventListener("click", questionNine);
    btnTwo.addEventListener("click", questionTen);
}
function questionEight () {
    image.setAttribute ("src", "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Не может этого быть, а ну дай ме правильный ответ...."

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Да";
    btnOne.addEventListener("click", questionNine);
    btnTwo.addEventListener("click", questionNine);
}

function questionNine () {
    image.setAttribute ("src", "https://images.pexels.com/photos/2523650/pexels-photo-2523650.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Сахар сладкий?"

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Нет";
    btnOne.addEventListener("click", questionEleven);
    btnTwo.addEventListener("click", questionTwelth);
}
function questionTen () {
    image.setAttribute ("src", "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Не может этого быть, а ну дай ме правильный ответ...."

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Да";
    btnOne.addEventListener("click", questionEleven);
    btnTwo.addEventListener("click", questionEleven);
}
function questionEleven () {
    image.setAttribute ("src", "https://images.pexels.com/photos/666839/pexels-photo-666839.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Солнце светит днём?"

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Нет";
    btnOne.addEventListener("click", questionThirteen);
    btnTwo.addEventListener("click", questionFourteen);
}
function questionTwelth () {
    image.setAttribute ("src", "https://images.pexels.com/photos/716658/pexels-photo-716658.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Не может этого быть, а ну дай ме правильный ответ...."

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Да";
    btnOne.addEventListener("click", questionThirteen);
    btnTwo.addEventListener("click", questionThirteen);
}

function questionThirteen () {
    image.setAttribute ("src", "https://images.pexels.com/photos/3536511/pexels-photo-3536511.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="В реках водятся рыбы?"

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Нет";
    btnOne.addEventListener("click", questionFifteen);
    btnTwo.addEventListener("click", questionSixteen);
}
function questionFourteen () {
    image.setAttribute ("src", "https://images.pexels.com/photos/6605132/pexels-photo-6605132.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Не может этого быть, а ну дай ме правильный ответ...."

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Да";
    btnOne.addEventListener("click", questionFifteen);
    btnTwo.addEventListener("click", questionFifteen);
}

function questionFifteen () {
    image.setAttribute ("src", "https://images.pexels.com/photos/579216/pexels-photo-579216.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Лед холодный?"

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Нет";
    btnOne.addEventListener("click", questionSeventeen);
    btnTwo.addEventListener("click", questionEighteen);
}
function questionSixteen () {
    image.setAttribute ("src", "https://images.pexels.com/photos/3907837/pexels-photo-3907837.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Не может этого быть, а ну дай ме правильный ответ...."

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Да";
    btnOne.addEventListener("click", questionSeventeen);
    btnTwo.addEventListener("click", questionSeventeen);
}

function questionSeventeen () {
    image.setAttribute ("src", "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Апельсины оранжевые?"

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Нет";
    btnOne.addEventListener("click", questionNinteen);
    btnTwo.addEventListener("click", questionTwenty);
}

function questionEighteen () {
    image.setAttribute ("src", "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Не может этого быть, а ну дай ме правильный ответ...."

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Да";
    btnOne.addEventListener("click", questionSeventeen);
    btnTwo.addEventListener("click", questionSeventeen);
}

function questionNinteen () {
    document.querySelector("#player").play();
    image.setAttribute ("src", "https://images.pexels.com/photos/4474010/pexels-photo-4474010.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="УРА!!! Все ответы верные! Поздравляю!!!"

    btnOne.style="display:none";
    btnTwo.style="display:none";
   
}

function questionTwenty () {
    image.setAttribute ("src", "https://images.pexels.com/photos/56857/animal-cat-kitten-funny-56857.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    text.innerHTML="Не может этого быть, а ну дай ме правильный ответ...."

    btnOne.innerHTML="Да";
    btnTwo.innerHTML="Да";
    btnOne.addEventListener("click", questionSeventeen);
     btnTwo.style="display:none";
}
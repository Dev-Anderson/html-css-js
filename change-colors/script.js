const red = document.querySelector('.red'); 
const green = document.querySelector('.green'); 
const blue = document.querySelector('.blue');  

const box = document.querySelector('.center-box'); 

const getBackgroundColor = element => {
    return window.getComputedStyle(element).backgroundColor;  //O método getComputedSytle () obtém todas as propriedades e valores do CSS
}; 

const changeBackgroundColor = (element, colorDiv, colorValue) => {
    return colorDiv.addEventListener('click', () => {
        element.style.background = colorValue; 
    }); 
}; 

changeBackgroundColor(box, red, getBackgroundColor(red)); 
changeBackgroundColor(box, green, getBackgroundColor(green)); 
changeBackgroundColor(box, blue, getBackgroundColor(blue)); 
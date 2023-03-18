
export const increaseCounter = (element, max, title) => {
    element.innerHTML = `0+<br/><span class='counter-title'>${title}</span>`;
    var count = 0;
    var timer = 0;
    if (max == 10) {
        timer = 150
    } else {
        timer = 50
    }
    var interval = setInterval(function () {
        if (count == max) {
            clearInterval(interval);
        } else {
            element.innerHTML = `${count}+<br/><span class='counter-title'>${title}</span>`
        }
        count = count + 2;

    }, timer);
}

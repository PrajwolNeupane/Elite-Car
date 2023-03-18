
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

export const carData = [
    {
        title: "Bentley Continental GT",
        content: "Two engine options: a turbocharged 4.0-litre V8 and a turbocharged 6.0-litre W12.The Continental GT averages 12.2 L/100km in fuel efficiency and has a range of 737 km.Coupe is capable of accelerating from 0-60 mph in just 3.6 seconds.Rated 8/10 for safety and driving, 7/10 for infotainment, and 4/10 for fuel economy.",
        price: "$202,500",
        img: "../images/Bentley _Continental_GT.png"

    },
    {
        title: "Mercedes Benz amg G63",
        content: "The G63 has a fuel economy of 13 city/15 highway mpg.The G63 is equipped with a 9-speed automatic transmission.The interior of the G63 is luxurious and spacious.The car has impressive technology features, including a 12.3-inch infotainment system",
        price: "$160,000",
        img: "../images/Bentley _Continental_GT.png"

    },
    {
        title: "Porsche 911 coupe",
        content: "Mileage: 10.64 km/pl. Ground clearance: 100mm. Fuel economy: 18 mpg city and 25 mpg highway",
        price: "$202,500",
        img: "../images/Bentley _Continental_GT.png"

    },
    {
        title: "Mercedes Benz amg G63",
        content: "The G63 has a fuel economy of 13 city/15 highway mpg.The G63 is equipped with a 9-speed automatic transmission.The interior of the G63 is luxurious and spacious.The car has impressive technology features, including a 12.3-inch infotainment system",
        price: "$160,000",
        img: "../images/Bentley _Continental_GT.png"

    }
]

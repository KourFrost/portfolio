window.onscroll = function () {
    console.log("scroollled ");
    value1 = window.scrollY;
    var element = document.getElementById("wel");
    var value = 1 - value1 / 300;
    element.style.opacity = value.toString();
};

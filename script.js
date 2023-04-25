var voteButton = document.getElementById("voteButton");
voteButton.addEventListener("click", handleOptionChange);

function handleOptionChange() {
    var options = document.getElementsByName("escolha");
    var selectedOption = null;
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedOption = options[i].value;
            break;
        }
    }
    if (selectedOption !== null) {
        alert("Para qualquer fim, Flor. 🖤");
    }
}

var slider = document.querySelector('.slider');
var btnPrev = document.createElement('button');
btnPrev.innerText = '<<';
btnPrev.addEventListener('click', function() {
  slider.scrollLeft -= slider.offsetWidth;
});
var btnNext = document.createElement('button');
btnNext.innerText = '>>';
btnNext.addEventListener('click', function() {
  slider.scrollLeft += slider.offsetWidth;
});
slider.parentElement.insertBefore(btnPrev, slider);
slider.parentElement.insertBefore(btnNext, slider.nextSibling);


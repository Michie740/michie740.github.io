var text = ["Software Engineer", "Student", "Explorer"];
var counter = 0;
var elem = $("#sequence");
setInterval(change, 3000);

function change() {
    elem.fadeOut(function() {
        elem.html(text[counter]);
        counter++;
        if (counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
}
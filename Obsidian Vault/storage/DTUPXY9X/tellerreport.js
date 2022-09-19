$(document).ready(function () {

    toLocalTime();
    pixel();
});

function pixel(){
    $.ajax({type: "POST", url: '/react/pixel'});
}

function toLocalTime(){

    $('.utc-date').map((i,e) => {
        var el = $(e)
        var d = new Date(el.text())
        el.text(  d.toLocaleString())
    })
}

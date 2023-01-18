window.addEventListener("load", (event) => {
    console.log("load");
    scroll()
});

var myInterval
let currentY=1000

function scroll() {
    myInterval = setInterval(scroll_img,15)

    setTimeout(() => { show_logo() }, 3000);
}

function scroll_img() {
    currentY = currentY - 5
    $('#background_start').scrollTop( currentY );
    console.log(currentY)
}

function show_logo() {
    clearInterval(myInterval);
    $( '#goto_main' ).fadeIn( 5000 );
    $( '#logo' ).fadeIn( 2000 );
}


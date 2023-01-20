window.addEventListener("load", (event) => {
    // console.log("load");
    outro()
});


function outro() {
    setTimeout(() => {
        $( '#text1' ).fadeIn( 2000 );
    }, 15);
    setTimeout(() => {
        $( '#text1' ).fadeOut( 2000 );
    }, 3015);
    setTimeout(() => {
        $( '#text2' ).fadeIn( 2000 );
    }, 6015);
    setTimeout(() => {
        $( '#text2' ).fadeOut( 2000 );
    }, 9015);
    setTimeout(() => {
        $( '#outro_img' ).fadeIn( 2000 );
    }, 12015);
    setTimeout(() => {
        $( '#fade' ).fadeIn( 2000 );
        $( '#light' ).fadeIn( 2000 );
        $( '#credit_text' ).fadeIn( 2000 );
    }, 20000);
    
}

function closeoutro() {
    Belonging_data.nowstep = 0;
    Belonging_data.money = 1500000;
    Belonging_data.pocari_sweat = 0;
    Belonging_data.school_uniform = 0;
    Belonging_data.made_uniform = 0;
    Belonging_data.magic_uniform = 0;
    localStorage.setItem("UserData", JSON.stringify(Belonging_data))
    location.href = 'index.html';
}
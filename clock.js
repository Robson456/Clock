function clock (){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let time = h + ":" + m + ":" + s

    document.getElementById("clock").innerText = time

    var t = setTimeout(function () {clock()}, 1000);

}

clock();
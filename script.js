const btn = document.querySelector("#buy-but");
btn.onclick = function () {
    const idplayer = document.querySelector("#id-player").value;
    const Items = document.querySelector("#Items").value;
    var pembayaran = document.querySelector(
    'input[name="pay"]:checked').value;
    const inprocess = document.createElement("div");
    inprocess.setAttribute("class", "inprocess");
    inprocess.innerHTML =
        "<p> ID Player : " +
        idplayer +
        "</p><p>Value : " +
        Items +
        "</p><p>Payment Method : " +
        pembayaran +
        "</p>";
    const tempathasil = document.querySelector("div#tempat-inprocess");
    tempathasil.append(inprocess);
    };
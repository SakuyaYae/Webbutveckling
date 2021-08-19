
sakura = {index:[
{"managID":1,Title:"NO GAME NO LIFE",Rating:"prefect",number:"1"},
{"managID":1,Title:"SAO Holow relasation",Rating:"Great",number:"2"}
]}
var Anime = document.getElementById("Anime")

document.getElementById("T1").innerHTML = sakura.index[0].Title;
document.getElementById("R1").innerHTML = sakura.index[0].Rating;
document.getElementById("N1").innerHTML = sakura.index[0].number;

document.getElementById("T2").innerHTML = sakura.index[1].Title;
document.getElementById("R2").innerHTML = sakura.index[1].Rating;
document.getElementById("N2").innerHTML = sakura.index[1].number;


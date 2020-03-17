var punten = 0;

function quiz() {
  var vrgn = ["parijs", "8", "ijselmeer"];
  var frank = document.getElementById("frank").value;
  var spin = document.getElementById("spin").value;
  var meer = document.getElementById("meer").value;
  var antwrdn = [];

  antwrdn.push(frank, spin, meer);

  for (var i = 0; i < antwrdn.length; i++) {
    if (antwrdn[i] == vrgn[i]) {
      punten++;
    }
  }
  document.write("je hebt ", punten, "punten ");
}

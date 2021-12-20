function cong() {
    //lay gia tri cua text box
    var t = document.getElementById("textbox").value;
    // dieu kien be hon 20
    if (parseInt(t) < 20) {
      //cong them 1 gia tri
      document.getElementById("textbox").value = parseInt(t) + 1;
    }
  }

  function tru() {
    //lay gia tri cua text box
    var t = document.getElementById("textbox").value;
    // dieu kien lon hon 1
    if (parseInt(t) > 1) {
      //cong them 1 gia tri
      document.getElementById("textbox").value = parseInt(t) - 1;
    }
  }
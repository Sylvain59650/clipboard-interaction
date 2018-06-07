window.Clipboard = {};
window.Clipboard.copy = function(text, onsuccess, onerror) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(function() {
      if (onsuccess) {
        onsuccess();
      }
    }, function() {
      if (onerror) {
        onerror();
      }
    });
  } else {
    var elem = document.querySelector("#__clipboard");
    if (elem === null) {
      elem = document.createElement("input");
      elem.id = "__clipboard";
      elem.style.display = "block"; // important
      elem.style.position = "fixed";
      elem.style.top = "-50px";
      document.body.insertAdjacentElement("afterend", elem);
    }
    elem.setAttribute("value", text);
    elem.select();
    try {
      var ret = document.execCommand("copy");
      if (ret) {
        if (onsuccess) {
          onsuccess();
        }
      } else {
        if (onerror) {
          onerror();
        }
      }
    } catch (err) {
      if (onerror) {
        onerror();
      }
    }
  }
}
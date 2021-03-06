window.Clipboard = {};
window.Clipboard.copy = function(text, onsuccess, onerror) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(function() {
      if (onsuccess) {
        onsuccess(text);
      }
    }, function() {
      if (onerror) {
        onerror(null, text);
      }
    });
  } else {
    var elem = document.getElementById("__clipboard");
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
      if (text === "") {
        throw TypeError("Clipboard:nothing to copy");
      }
      var ret = document.execCommand("copy");
      if (ret) {
        if (onsuccess) {
          onsuccess(text);
        }
      } else {
        if (onerror) {
          onerror();
        }
      }
    } catch (err) {
      if (onerror) {
        onerror(err, text);
      }
    }
  }
}
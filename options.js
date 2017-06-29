function saveOptions(e) {
  e.preventDefault();
  var ls = window.content.localStorage;
  ls.removeItem("color");
  ls.removeItem("color1");
  ls.setItem("color", document.querySelector("#color").value);
  ls.setItem("color1", document.querySelector("#color1").value );
  
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#color").value = result.color || "blue";
  }

  function setCurrentChoice1(result) {
    document.querySelector("#color1").value = result.color1 || "blue";
  }


  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("color");
  getting.then(setCurrentChoice, onError);
  var getting1 = browser.storage.local.get("color1");
  getting1.then(setCurrentChoice1, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    color: document.querySelector("#color").value,
    color1: document.querySelector("#color1").value,
  });
  console.log( document.querySelector("#color").value );
  console.log( document.querySelector("#color1").value );
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#color").value = result.color || "";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("color");
  getting.then(setCurrentChoice, onError);
}
///HACK
function restoreOptions1() {

  function setCurrentChoice1(result) {
    document.querySelector("#color1").value = result.color1 || "";
  }

  function onError1(error) {
    console.log(`Error: ${error}`);
  }

  var getting1 = browser.storage.local.get("color1");
  getting1.then(setCurrentChoice1, onError1);
}

document.addEventListener("DOMContentLoaded", restoreOptions1);
document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
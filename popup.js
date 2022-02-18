// Initialize button with user's preferred color
let changeColor = document.getElementById("activate");

// changeColor.style.backgroundColor = color;

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageReadable into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageReadable,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageReadable() {
  document.getElementsByClassName("view view-offer")[0].remove()
  // document.querySelectorAll("*[id^=offer]").remove();
//  let chang1 = document.querySelectorAll("*[id^=offer]");
  let dellist = document.getElementsByClassName("paywall")[0].style.filter = "blur(0px)"; //.style.filter = "blur(0px)";
  // OBSOLETE delete = dellistp[0];
  // chrome.storage.sync.get("color", ({ color }) => {
  //   document.body.style.backgroundColor = color;
  // });
}
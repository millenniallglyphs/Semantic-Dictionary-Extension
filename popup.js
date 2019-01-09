let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

/*this popup script should be eddited. Now it only needs to open the window and desrve as a button*/

changeColor.onclick = function(element) {
  console.log("click");
  let color = element.target.value;
  /*
  var divs = document.getElementsByTagName("html");
  for (var i = 0; i < divs.length; i++) {
    console.log(i);
    var para = divs[i].getElementsByTagName("p");
    var index = para.innerText;
      if (index === "and") {
        */
        console.log("fuck it worked!");
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(
              tabs[0].id,
              {code: 'document.body.style.backgroundColor = "' + color + '";'});
        //});
      }
    //console.log(index);

};

// let changeColor = document.getElementById('changeColor');
//
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
//
// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };


document.addEventListener('DOMContentLoaded', function () {

  const bg = chrome.extension.getBackgroundPage()
  Object.keys(bg.AnimeFillerSkipper).forEach(function (url) {
    const div = document.createElement('div')
    div.textContent = `${url}: ${bg.AnimeFillerSkipper[url]}`
    document.body.appendChild(div)
  })

  // document.querySelector('button').addEventListener('click', onclick, false)
  //
  // function onclick () {
  //   chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
  //     chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
  //   })
  // }
  //
  // function setCount (res) {
  //   const div = document.createElement('div')
  //   div.textContent = `${res.count} bears`
  //   document.body.appendChild(div)
  // }
}, false)
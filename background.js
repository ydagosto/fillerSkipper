window.AnimeFillerSkipper = {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.AnimeFillerSkipper['platform'] = request.platform
  , window.AnimeFillerSkipper['show'] = request.title
  , window.AnimeFillerSkipper['episode'] = request.episode
  , window.AnimeFillerSkipper['filler'] = request.filler
})
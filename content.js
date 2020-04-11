
var inRange = function (num, start, end) {
  return num >= start && num <= end;
};

const website = window.location.origin;
const show = window.location.pathname.split('/')[1];
const episodeStr = window.location.pathname.split("/")[2].split("-")[1];

var episode = parseInt(episodeStr)
const individualEpisodes = [26, 97, 99]

if (individualEpisodes.includes(episode)
    || inRange(episode, 101,106)
    || inRange(episode, 136, 140)
    || inRange(episode, 143,219)
){
  isFiller = true;
} else {
  isFiller = false;
}

chrome.runtime.sendMessage({
  url: window.location.href,
  platform: website,
  title: show,
  episode: episode,
  filler: isFiller
})
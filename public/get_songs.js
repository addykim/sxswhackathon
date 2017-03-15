var json = require('./data/data.json');

var songs = [];
var songInfo = {};

function getSongInfo(id, songInfo){
	songInfo.id = [];

	return;
}



function getScore(activity, songInfo) {
	scores = {};
	if (activity === "yoga") {
		for (var i = 0; i < Object.keys(songInfo).length; i++) {
			average = 0;
			average += songInfo[i].acousticness;
			average += songInfo[i].instrumentalness;
			average += songInfo[i].tempo;
			average /= 3;
			scores.songInfo[i] = average;
		}
	}
	else if (activity === "running") {
		for (var i = 0; i < Object.keys(songInfo).length; i++) {
			average = 0;
			average += songInfo[i].energy;
			average += songInfo[i].loudness;
			average += songInfo[i].tempo;
			average /= 3;
			scores.songInfo[i] = average;
		}
	}
	else if (activity === "weight-lifting") {
		for (var i = 0; i < Object.keys(songInfo).length; i++) {
			average = 0;
			average += songInfo[i].energy;
			average += songInfo[i].speechiness;
			average += songInfo[i].loudness;
			average /= 3;
			scores.songInfo[i] = average;
		}
	}
}

for (var i = 0; i < json.items.length; i++) {
	songs.push(json.items[i].track.id);
}

for (var i = 0; i < songs.length; i++) {
	getSongInfo(songs[i]);
}

getScore(songInfo)
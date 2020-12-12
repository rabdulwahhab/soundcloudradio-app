const scdl = require('soundcloud-downloader');

// Globals
const MAX_DURATION = 7; // in minutes
const MAX_PLAYS = 500000;
const NUM_REQUESTS = 50;

function getId() {
  return Math.random().toFixed(9).split('.')[1];
}

/**
 * Checks if a given JSON track info obj is acceptable (not empty + selection)
 */
function passCriteria(trackObj) {
  //console.log("POLICY IS: ");
  const policy = trackObj.policy;
  //console.log(trackObj);
  //console.log(policy);
  // If legal issues, only allow policy "ALLOW"
  return trackObj && trackObj.public &&
      (policy.localeCompare("SNIP") !== 0) &&
      (trackObj.embeddable_by.localeCompare("all") === 0) &&
      // (Math.round(trackObj.duration / 1000 / 60) <= MAX_DURATION) &&
      (trackObj.playback_count <= MAX_PLAYS);
}

export function next() {
  //const test_url = "https://soundcloud.com/crayyan/jump";
  //scdl.download(test_url).then(stream => stream.pipe(fs.createWriteStream("audio.mp3")))
  // Number of bulk requests to make
  const color_code = "#ff5500";
  //console.log("NUM_REQ: " + NUM_REQUESTS);
  let pot_tracks = [];
  for (let j = 0; j < NUM_REQUESTS; ++j) {
    pot_tracks.push(getId());
  }

  // TODO MAJOR ::::: handle all duds case
  scdl.getTrackInfoByID(pot_tracks)
      .then(result => {
        const filteredTrackObjs = result.filter(passCriteria);
        //console.log("FILTERED:");
        // console.log(trackObjs);
        const formattedTrackObjs = filteredTrackObjs.map((obj) => {
          console.log(JSON.stringify(obj, null, 2));
          let stream = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/";
          stream = stream.concat(obj.id);
          stream = stream.concat("&color=");
          stream = stream.concat(encodeURIComponent(color_code));
          stream = stream.concat("&auto_play=true&download=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true");
          return {
            title: obj.title,
            artist: obj.user.username,
            artist_url: obj.user.permalink_url,
            track_url: obj.permalink_url,
            stream: stream
            // req.headers.referer.concat("play?url=").concat(obj.permalink_url)
          };
        })

        return formattedTrackObjs;
        //console.log("TRACK OBJS ------");
        //console.log(trackObjs);
        // res.json({tracks: trackObjs});
        //console.log("SUCCESS");
      })
      .catch(result => console.log(result));
}
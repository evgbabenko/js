import React from 'react';
import './Player.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => (
    <div className="playerdiv">
        <AudioPlayer
            src="https://stream.m4u-radio.com.ua:8005/stream"
            onPlay={e => console.log("onPlay")}
            showJumpControls={false}
            showDownloadProgress={false}
            timeFormat={'hh:mm:ss'}
            onLoadedMetaData={data=> console.log(data)}
    // other props here
        />
    </div>

);

export default Player;
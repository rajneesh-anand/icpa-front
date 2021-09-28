import React, { useState } from "react";
import ReactJWPlayer from "react-jw-player";

const UserCourseDetail = ({ data }) => {
  const [media, setMedia] = useState({
    videoLink: data[0].video,
    posterLink: data[0].poster,
  });

  return (
    <div className="video-playlist-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9">
            <ReactJWPlayer
              playerId="studionmovieonline"
              playerScript="https://cdn.jwplayer.com/libraries/QoEEgjta.js"
              file={media.videoLink}
              image={media.posterLink}
            />
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="playlist">
              <ul>
                {data &&
                  data.map((item, index) => (
                    <li key={index}>
                      <div
                        className="playlist-item"
                        onClick={() =>
                          setMedia({
                            videoLink: item.video,
                            posterLink: item.poster,
                          })
                        }
                      >
                        <h6> {index + 1} . </h6>
                        <h6> {item.title}</h6>
                        <i className="bx bx-play-circle"></i>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCourseDetail;

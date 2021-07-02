import React, { Fragment } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import MicIcon from "@material-ui/icons/Mic";

function VoiceSearch(props) {
  const showVoiceModalHandler = () => {
    props.onShowHandler();
  };
  return (
    <Fragment>
      <ClearIcon
        onClick={showVoiceModalHandler}
        style={{ cursor: "pointer", marginLeft: "95%" }}
      />
      <h2>Voice Search</h2>
      <p>
        For voice search, open your browser settings and allow access to your
        microphone
      </p>
      <div className="microphone">
        <MicIcon
          style={{
            fontSize: "50px",
            backgroundColor: "grey",
            padding: "10px",
            borderRadius: "55px",
            marginLeft: "40%",
            marginRight: "50%",
            marginTop: "70px",
            cursor: "pointer",
          }}
        />
      </div>
    </Fragment>
  );
}

export default VoiceSearch;

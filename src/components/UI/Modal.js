import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import voiceModalActions from "../store/voice-slice";
import sidebarActions from "../store/sidebar-slice";
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.hideHandler}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles[props.cssStyle]}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

function Modal(props) {
  const dispatch = useDispatch();
  const hideModalHandler = () => {
    dispatch(voiceModalActions.actions.hideVoiceModal());
    dispatch(sidebarActions.actions.hideSidebar());
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop hideHandler={hideModalHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay cssStyle={props.cssStyle}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;

import React from "react";
import { addMessage } from "../../redux/dialogs-reducer";
import { withRedirect } from "../../hoc/withRedirect";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { compose } from "redux";
import { getDialogsPageState } from "../../redux/dialogs-selectors";

const mapStateToProps = (state) => {
  return {
    dialogsPage: getDialogsPageState(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageText) => {
      dispatch(addMessage(newMessageText));
    },
  };
};

export default compose(
  withRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

import { addMessage, updateNewMessageText } from "../../redux/dialogs-reducer";
import { withRedirect } from "../../hoc/withRedirect";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  withRedirect,
  connect(mapStateToProps, { addMessage, updateNewMessageText })
)(Dialogs);

import { addMessage, updateNewMessageText } from "../../redux/dialogs-reducer";
import { withRedirect } from "../../hoc/withRedirect";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const DialogsContainer = connect(mapStateToProps, {
  addMessage,
  updateNewMessageText,
})(Dialogs);

export default withRedirect(DialogsContainer);

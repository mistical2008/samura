import { addMessage } from "../../redux/dialogs-reducer";
import { withRedirect } from "../../hoc/withRedirect";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
return { 
  addMessage: (newMessageText) => {
    dispatch(addMessage(newMessageText))
  }, 
}
}


export default compose(
  withRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

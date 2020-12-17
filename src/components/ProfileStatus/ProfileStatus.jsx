import React, { Component } from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends Component {
  state = {
    isEditMode: false,
  };

  activateEditMode = this.activateEditMode.bind(this);
  deactivateEditMode = this.deactivateEditMode.bind(this);

  activateEditMode() {
    this.setState({ isEditMode: true });
  }

  deactivateEditMode() {
    this.setState({ isEditMode: false });
  }

  render() {
    const props = this.props;
    return (
      <div>
        {this.state.isEditMode ? (
          <input
            type="text"
            name="input-status"
            className={s.inputStatus}
            value={props.statusText}
            onBlur={this.deactivateEditMode}
          />
        ) : (
          <p onClick={this.activateEditMode}>{props.statusText}</p>
        )}
      </div>
    );
  }
}

export default ProfileStatus;

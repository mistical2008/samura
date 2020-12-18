import React, { Component } from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends Component {
  state = {
    isEditMode: false,
    status: this.props.status,
  };

  activateEditMode = this.activateEditMode.bind(this);
  deactivateEditMode = this.deactivateEditMode.bind(this);
  onStatusChange = this.onStatusChange.bind(this);

  activateEditMode() {
    this.setState({ isEditMode: true });
  }

  deactivateEditMode() {
    this.setState({ isEditMode: false });
    this.props.updateUserStatus(this.state.status);
  }

  onStatusChange(e) {
    this.setState({ status: e.target.value });
  }

  render() {
    const props = this.props;
    return (
      <div>
        {this.state.isEditMode ? (
          <input
            onChange={this.onStatusChange}
            type="text"
            name="input-status"
            className={s.inputStatus}
            value={this.state.status}
            onBlur={this.deactivateEditMode}
          />
        ) : (
          <p onClick={this.activateEditMode}>{props.status}</p>
        )}
      </div>
    );
  }
}

export default ProfileStatus;

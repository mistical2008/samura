import React, { Component } from "react";
import {render, screen} from "@testing-library/react"
import Users from './Users'

const users = [];

//   Props
//     usersCount={this.props.usersCount}
//     usersPerPage={this.props.usersPerPage}
//     currentPage={this.props.currentPage}
//     users={this.props.users}
//     unfollow={this.props.unfollow}
//     follow={this.props.follow}
//     onPageChanged={this.onPageChanged}
//     followingInProgress={this.props.followingInProgress}

describe("Users", () => {
    test("Renders Users component", () => {
        render(<Users 
            usersCount={100} 
            usersPerPage={3}
            currentPage={3}
            users={users}
            />)
        screen.debug();
    })
})
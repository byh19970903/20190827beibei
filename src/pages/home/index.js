import React, { Component } from 'react'
import Header from "@components/header"
import Discover from "@components/discover"
import{Page} from "@common/commonStyled"
export default class Home extends Component {
    render() {
        return (
            <Page>
            <Header/>
  <Discover/>
            </Page>
        )
    }
}

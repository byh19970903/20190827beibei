import React, { Component } from 'react'
import Header from "@components/header"
import Xiebao from "@components/xiebao"
import{Page} from "@common/commonStyled"
export default class o extends Component {
    render() {
        return (
            <Page>
            <Header/>
  <Xiebao/>
            </Page>
        )
    }
}

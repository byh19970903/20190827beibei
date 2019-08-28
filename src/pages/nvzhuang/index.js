import React, { Component } from 'react'
import Header from "@components/header"
import Nvzhaung from "@components/nvzhuang"
import{Page} from "@common/commonStyled"
export default class Nvzhuang extends Component {
    render() {
        return (
            <Page>
            <Header/>
  <Nvzhaung/>
            </Page>
        )
    }
}

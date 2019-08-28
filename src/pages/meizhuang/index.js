import React, { Component } from 'react'
import Header from "@components/header"
import Meizhuang from "@components/meizhuang"
import{Page} from "@common/commonStyled"
export default class Beautyy extends Component {
    render() {
        return (
            <Page>
            <Header/>
  <Meizhuang/>
            </Page>
        )
    }
}

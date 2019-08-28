import React, { Component } from 'react'
import Header from "@components/header"
import Baihuo from "@components/baihuo"
import{Page} from "@common/commonStyled"
export default class Find extends Component {
    render() {
        return (
            <Page>
            <Header/>
  <Baihuo/>
            </Page>
        )
    }
}

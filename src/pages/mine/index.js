import React, { Component } from 'react'

import Header from "@components/header"
import Tongzhuang from "@components/tongzhuang"
import{Page} from "@common/commonStyled"
export default class Mine extends Component {
    render() {
        return (
            <Page>
            <Header/>
  <Tongzhuang/>
            </Page>
        )
    }
}

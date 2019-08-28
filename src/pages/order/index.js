import React, { Component } from 'react'

import Header from "@components/header"
import Shipin from "@components/shipin"
import{Page} from "@common/commonStyled"
export default class Order extends Component {
    render() {
        return (
            <Page>
            <Header/>
  <Shipin/>
            </Page>
        )
    }
}

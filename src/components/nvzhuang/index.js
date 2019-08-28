/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { WeekWrapper } from "./styled";
import { Nvzhaung } from "@api/week"
import { } from "@api/week"
export default class Nvzhaungg extends Component {
    state = {
        gooodsList: []
    }
    render() {
        let { gooodsList } = this.state;
        console.log(gooodsList);
        return (
            <WeekWrapper>

            <div className="out_div">
                    {
                        gooodsList.map((item, index) => (
                            <div className="goods_list" key={index}>
                                <div className="goods_img">
                                    <img src={item.img} />
                                </div>
                                <div>
                                    <p className="title">{item.title}</p>
                                    <span className="spice">¥{item.price/100}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
              


            </WeekWrapper> 
        )

    }
    async componentDidMount() {
        let data = await Nvzhaung();
        // data.martshows.splice(0, 2)
        this.setState(
            {
                gooodsList: data.lists
            }
        )
    }


}
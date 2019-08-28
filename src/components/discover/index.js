/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { WeekWrapper } from "./styled";
import { Discover } from "@api/week"
import { } from "@api/week"
export default class Discoverr extends Component {
    state = {
        weekGoods: []
    }
    render() {
        let { weekGoods } = this.state;
        // console.log(weekGoods)
        return (
            <WeekWrapper>

                <div className="weekItem" >
                    <div className="qw">
                        <span className="qq">超值爆款</span> <span className="qe">每日9点上新</span>
                    </div>
                </div>
                
                <div className="out_box">
                {
                    weekGoods.map((item, index) => (
                        
                        
                        
                        <div className="box" key={index} >
                            <div className="img">
                                <img className="imgs" src={item.img}/>
                            </div>
                            <div className="r">
                                <span className="ctl-text hot-item-title">{item.title}</span>
                                <span className="kong">{item.sub_desc}</span>
                                <div>
                                    <span>{item.event_id}人抢</span>
                                </div>
                                <div className="price-buy">
                                    <div className="price-icon">
                                        <div></div>
                                        <span className="ctl-text iconr">¥{item.price / 100}</span>
                                    </div>
                                    <div className="buy-now-wrap">
                                        <div className="ctl-text buy-now"></div>
                                        <span className="ctl-text buy-now">马上抢</span>
                                    </div>
                                </div>
                            </div>

                        </div>


                    ))
                }
                </div>


            </WeekWrapper>
        )
    }
    async componentDidMount() {
        let data = await Discover();

        this.setState(
            {
                weekGoods: data.lists
            }
        )
        // console.log(this.state.weekGoods);
    }
}

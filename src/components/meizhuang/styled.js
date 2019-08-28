import styled from "styled-components"

export const WeekWrapper = styled.div`
 

width:100% ;
    height: 100%;
    overflow:auto;
    position:fixed;
    left:0;
   
    z-index:10;

    header{
    height: 1.92rem;
    width: 100%;
    text-align: center;
    line-height: 1.92rem;
    color: #3d3d3d;
    font-size: 16px;
    background: #fff;
    border-bottom: 1px solid #ccc;
    }
    .goods_list{
    position: relative;
    width: 50%;
    display: inline-block;
    box-sizing: border-box;
    background-color: #fff;
    padding: .17066667rem .448rem .256rem .512rem;
    overflow: hidden;

    .goods_img{
        img{
            width:3rem;
        height:3rem;
    }
    }
        
    .title{
    margin-top: .256rem;
    color: #3d3d3d;
    text-align: left;
    height: .34rem;
    line-height: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    }
    
    }
    .spice{
        color:red
    }

`
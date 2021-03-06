import React from 'react';
import styled from 'styled-components';
import { Heading } from 'grommet';
import Rotate from 'react-reveal/Rotate';


const WrapList = styled.ul`
    color: black;
    font-weight: bolder;
    list-style-type: none;
    font-size: 1.3em;
    margin-top:0.2em;
    height: 205px;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 0;
    &:hover{
        font-size: 1.6em;
        line-height: 40px;
        height: 280px;
    }
    li{
        &:first-child {
            margin-top:12px;
        }
    }

    @media (max-width: 768px) {
        font-size: 1em;
        line-height: 22px;
        display: block;
        height: 100%
        &:hover{
            line-height: 25px;
            font-size: 1.1em;
            height: 150%
        }
    }`;
    

const WrapHeadings = styled(Heading)`
    font-size: 1.6em;
    text-align: left;
    margin:0 5%;
    color: #EBB11A;
    max-width:100%;
    margin-top: 0.5em;
    text-decoration:underline;
    @media (max-width: 768px) {
        font-size: 1.6em;
    }`;

const WrapDiv = styled.div `
    width: 40%;
    display: inline-block;
    margin:0 4%;
    vertical-align: top;
    border: 1px solid silver;
    border-radius: 30px;
    background:white
    opacity:0.85;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        width: 90%;
    }
`
const WrapExplanation = styled.div`
    margin: 0 1em 0.5em;
    font-weight: 500;
    height:140px;
    font-size:19px;
    @media (max-width: 768px) {
        height:100%;
        font-size:12px;
    }
`

const getList = (arrList,key) => {
    const allList = arrList.map((listValue, i) => {
        return <li key={i}>{listValue}</li>
    })
    return <WrapList key={"wl" + key}>{allList}</WrapList>;
}

const sideBarHeading = (props) => {
    return (
        <WrapDiv> 
            <WrapHeadings key={'wrp' + props.key} level={props.level} margin='none' color={props.color} >{props.headingTitle}</WrapHeadings>
            {getList(props.arrList, props.key)}
            <WrapExplanation>
                <span>{props.explanation}</span>
            </WrapExplanation>
        </WrapDiv>
    );
}

export default sideBarHeading;
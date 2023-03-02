import styled from "styled-components";
import { down, createTheme } from 'styled-breakpoints';
import { BACKGROUND_COLOR, COLOR } from "../constants";

const theme = createTheme({
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
});

export const P = styled.p`
    font-size: ${props => props.fontSize};
    padding-left:${ props => props.paddingLeft ? props.paddingLeft : 0};
    padding-bottom:${ props => props.paddingBottom ? props.paddingBottom : 0};
    padding-right:${ props => props.paddingRight ? props.paddingRight : 0};
    padding-top:${ props => props.paddingTop ? props.paddingTop : 0};
    margin-top:${ props => props.marginTop ? props.marginTop : 0};
    margin-bottom:${ props => props.marginBottom ? props.marginBottom : 0};
    margin-right:${ props => props.marginRight ? props.marginRight : 0};
    margin-left:${ props => props.marginLeft ? props.marginLeft : 0};
    font-weight:${ props => props.fontWeight ? props.fontWeight : '400'};
    color:${props => props.color ? props.color : COLOR};
    text-align:${ props => props.textAlign ? props.textAlign : 'center'};
    width:fit-content;
    height:fit-content;
    ${down('sm')}{
        width:100%;
    }
`
export const H3 = styled.h3`
    color:${props => props.color ? props.color : COLOR};
    text-align:center;
    margin-top:50px;
    margin-bottom:50px;
`
export const Grid = styled.div`
    display:grid;
    grid-template-columns:${props => props.gridTemplateColumns ? props.gridTemplateColumns: '1fr'};
    justify-content:${props => props.justifyContent ? props.justifyContent: 'center'};
    justify-items:${props => props.justifyItems && props.justifyItems };
    padding:${props => props.padding ? props.padding : '60px 0'};
    margin:${props => props.margin ? props.margin: '0'};
    width:100%;
    height:${props => props.height};
    z-index:10;
    align-self:${props => props.alignSelf ? props.alignSelf : 'center'}; 
    ${down('lg')}{
        grid-template-columns:${ props => props.gridTemplateColumnsLg };
        grid-auto-flow:${props => props.gridAutoFlowLg };
    }
    ${down('sm')}{
        grid-template-columns:1fr;
        grid-auto-flow:row;
    }
`
export const Container = styled.div`
    margin: 0 60px;
    ${down('md')} {
        margin: 0;
    } 
`
export const List = styled.ul`
    padding-left:10px;
    color:${props => props.color ? props.color : COLOR};
`
export const Item = styled.li`
    &:first-child{
        font-weight:bold;
        padding-bottom:10px;    
    }
`
export const Footer = styled.footer`
    height: 100%;
    background-color: ${BACKGROUND_COLOR};
    position: sticky;
` 
export const Form = styled.form`
    border:0;
    min-width: 360px;
    max-width: 520px;
    width: 100%;
`
export const Input = styled.input`
    height: 30px;
    border:1px solid black;
    border-radius:5px;
    background-color:white;
    padding-top:0;
    padding-bottom:0;
    padding-left: 20px;
    margin-top: 5px;
    font-size: 16px;
    color:${ props => props.color ? props.color : COLOR};
    ::placeholder{
        color:${ props => props.color ? props.color : COLOR};
    };
    &:focus{
        outline:none;
    };
`
export const Button = styled.button`
    height: 30px;
    width:100px;
    margin-top: 30px;
    border: 1px solid black;
    border-radius:5px;
`

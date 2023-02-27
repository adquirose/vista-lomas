import styled from "styled-components";
import { up, down, between, only, createTheme } from 'styled-breakpoints';

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
    font-weight:${ props => props.fontWeight ? props.fontWeight : '400'};
    color:#bfc0c1;
    text-align:${ props => props.textAlign ? props.textAlign : 'center'};
`
export const H3 = styled.h3`
    color:#bfc0c1;
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
    background-color:${props => props.backgroundColor ? props.backgroundColor : '#323232'};
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
        margin: 0 20px;
    } 
`
export const List = styled.ul`
    padding-left:10px;
    color:#bfc0c1;
`
export const Item = styled.li`
    &:first-child{
        font-weight:bold;
        padding-bottom:10px;    
    }
`


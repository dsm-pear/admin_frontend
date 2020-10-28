import style from 'styled-components';
import { BackgroundImg1 } from '../../assets';

export const Background = style.div `
    width: 100%;
    height: 100vh;
    background-size: 100% 100vh;
    background-repeat: no-repeat;
    background-image: url(${ BackgroundImg1 });
    position: relative;
    overflow: hidden;
    & > div:first-child {
        margin-top: 28px;
        margin-bottom: 25px;
    }
`;
export const Contents = style.div `
    width: 1282px;
    height: 661px;
    background-color: white;
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.16);
    margin: 0 auto;
`;
export const Title = style.div `
    font-size: 22px;
    text-align: center;
    padding-top: 23px;
    cursor: default;
`;
export const Scontents = style.div `
    width: 1028px;
    height: 520px;
    background-color: #FBFBFB;
    border-radius: 15px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    margin: 0 auto;
    margin-top: 25px;
`

// Line Style
export const LineBox = style.div `
    width: 707px;

`
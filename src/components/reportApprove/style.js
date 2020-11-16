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
    min-width: 1280px;
    > div:first-child {
        margin-top: 28px;
        margin-bottom: 25px;
    }
`;
export const WhiteBox = style.div `
    width: 89.02vw;
    min-width: 1282px;
    height: 80.51vh;
    background-color: white;
    margin: 0 auto;
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.16);
    padding-top: 46px;
    box-sizing: border-box;
`;
export const Title = style.div `
    width: 13.95vw;
    min-width: 201px;
    height: 52px;
    border-radius: 20px;
    box-shadow: 0 10px 6px 0 rgba(0, 0, 0, 0.16);
    background: linear-gradient(110deg, #bff1ff -2%, #b0baff 54%);
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 97px;
`;
export const SmallBox = style.div `
    width: 76.59vw;
    min-width: 1103px;
    height: 61.6vh;
    background-color: rgba(223, 223, 255, 0.09);
    margin: 15px 0 0 97px;
    box-sizing: border-box;
    padding-top: 30px;
    > div:first-child {
        width: 73vw;
        min-width: 1028px;
        margin: 0 0 71px 30px;
        height: 52.61vh;
        overflow: auto;
    }
`;

/* ReportLine */

export const ReportLine = style.div `
    width: 70.06vw;
    min-width: 1009px;
    height: 39px;
    border: 1px solid rgba(112, 112, 112, 0.38);
    border-radius: 20px;
    background-color: white;
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;
    > div:first-child {
        margin-left: 42px;
    }
    > div:nth-child(2) {
        margin-left: 38px;
    }
`;
export const Note = style.div `
    font-size: 13px;
    margin-right: 12px;
    letter-spacing: 3px;
    color: black;
`;
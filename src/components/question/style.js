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
    width: 86vw;
    min-width: 1244px;
    height: 82vh;
    background-color: white;
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.16);
    margin: 0 auto;
`;
export const Title = style.div `
    font-size: 22px;
    text-align: center;
    padding-top: 1.6%;
    cursor: default;
`;
export const Scontents = style.div `
    width: 71.38vw;
    min-width: 1028px;
    height: 63.33vh;
    background-color: #FBFBFB;
    border-radius: 15px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    margin: 0 auto;
    margin-top: 25px;
    position: relative;
    & > div:first-child {
        padding-top: 10px;
        width: 71.38vw;
        min-width: 1028px; 
        height: 57.24vh;
        overflow: auto;
    }
`;
// Line Style
export const LineBox = style.div `
    width: 49.09vw;
    min-width: 707px;
    height: 6.09vh;
    border-radius: 20px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    align-items: center;
    display: flex;
    margin: 0 auto;
    margin-top: 15px;
    z-index: 1;
    & > img {
        width: 24px;
        height: 23px;
        margin-left: 48px;
        margin-right: 21px;
    }
`;
export const Qtitle = style.div `
    font-size: 13px;
    cursor: default;
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
export const QDate = style.div `
    font-size: 12px;
    letter-spacing: 1.8px;
    cursor: default;
    margin-left: 10px;
`;
export const BQBox = style.div `
    width: 49.02vw;
    min-width: 706px;
    height: 162px;
    background-color: #e2e2e2;
    opacity: 0.83;
    border-radius: 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-shadow: 0 10px 6px 0 rgba(0, 0, 0, 0.16);
`;
export const SQBox = style.div `
    width: 46.11vw;
    min-width: 664px;
    height: 129px;
    background-color: white;
    border-radius: 20px;
    margin: 0 auto;
    & > div {
        margin: 0 33px;
    }
`;
export const Email = style.div `
    font-size: 9px;
    margin-top: 13px;
`;
export const Note = style.div `
    font-size: 11px;
`;
export const Line = style.div `
    width: 40.97vw;
    min-width: 591px;
    height: 0;
    border-top: 1px solid #707070;
    margin: 7px 0 13px 0;
`;
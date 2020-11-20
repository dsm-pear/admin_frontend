import style from 'styled-components';
import { BackgroundImg1 } from '../../assets';

/* 공지사항 작성 */
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
    width: 86vw;
    min-width: 1244px;
    height: 82vh;
    min-height: 672px;
    background-color: white;
    margin: 0 auto;
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.16);
    border: 1px solid #858585;
    > div:first-child {
        display: flex;
        margin: 46px 0 23px 63px;
    }
    > div:last-child {
        width: 75.26vw;
        min-width: 1084px;
        margin-left: 73px;
    }
`;
export const LWhiteBox = style(WhiteBox)`
    > div:first-child {
        display: flex;
        margin: 5.60vh 0 23px 7.67vh;
    }
    > div:nth-child(2) {
        width: 75.27vw;
        margin-left: 73px;
        > ul {
            margin-top: 18px;
            margin-left: -34px;
        }
    }
    > div:last-child {
        width: 19.51vw;
        min-width: 281px;
        height: 19px;
        display: flex;
        align-items: center;
        margin: 0 auto;
        margin-top: 3%;
    }
`;
export const LWrite = style.div `
    font-size: 30px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    color: #5D6BC9;
    cursor: pointer;
`;
export const LWatch = style.div `
    font-size: 22px;
    margin-left: 10px;
    margin-top: 10px;
    cursor: pointer;
    color: black;
`;
export const Title = style.input `
    width: 100%;
    height: 47px;
    font-size: 14px;
    background-color: white;
    border: 1px solid #858585;
    display: flex;
    margin-bottom: 10px;
    padding-left: 20px;
    box-sizing: border-box;
`;
export const ContentsBox = style.div `
    width: 100%;
    height: 465px;
    background-color: white;
    border: 1px solid #858585;
    > div:first-child {
        display: flex;
        margin: 23px 0 23px 27px;
        justify-content: space-between;
    }
    > div:first-child > div:last-child {
        display: flex;
        margin-right: 20px;
    }
`;
export const ContentsTitle = style.div `
    font-size: 14px;
    color: #2E2E2E;
`;
export const Contents = style.textarea `
    width: 72.08vw;
    min-width: 1038px;
    height: 296px;
    resize: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.05);
    display: block;
    margin: 0 auto;
`;
export const Add = style.div `
    width: 77px;
    height: 22px;
    background-color: #e1e1e1;
    opacity: 0.58;
    font-size: 9px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
        margin-right: 2px;
        width: 15px;
        height: 14px;
    }
`;
export const Upload = style.div `
    width: 109px;
    height: 33px;
    background-color: #1919B1;
    float: right;
    color: white;
    margin: 10px 20px 0 0;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    > img {
        margin-right: 10px;
    }
`;
export const Addflie = style.div `
    font-size: 13px;
    margin: 16px 30px 0 25px;
`;

/* 공지사항 보기 */
export const Write = style.div `
    font-size: 22px;
    cursor: pointer;
    margin-top: 10px;
    color: black;
`;
export const Watch = style.div `
    font-size: 30px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    color: #5D6BC9;
    margin: 0 10px;
    cursor: pointer;
`;
export const Notice = style(Watch) `
    cursor: default;
`;
export const NoticeTitle = style.div `
    width: 75.27vw;
    min-width: 1084px;
    height: 42px;
    border-radius: 5px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background: linear-gradient(#592dd6, #716dec);
    display: flex;
    align-items: center;
    > div:first-child {
        color: white;
        font-size: 19px;
        font-weight: bold;
        margin-left: 32px;
        width: 85%;
    }
    > div:last-child {
        color: white;
        font-size: 14px;
        margin-right: 75px;
        width: 39px;
    }
`;
export const Count = style.div `
    width: 14.44px;
    min-width: 208px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    cursor: pointer;
    .pageBtnClick {
        font-size: 18px;
        font-weight: bold;
    }
`;
export const Turn = style.span `
    height: 100%;
    font-size: 15px;
    margin: 0 32px;
    cursor: pointer;
`;
/* Line */
export const Line = style.li `
    width: 75.27vw;
    min-width: 1084px;
    height: 5.35vh;
    min-height: 44px;
    border-bottom: 1px solid #707070;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: black;
`;
export const LineTitle = style.div `
    font-size: 14px;
    width: 84.5%;
    margin-left: 25px;
`;
export const LineDate = style.div `
    font-size: 11px;
`;
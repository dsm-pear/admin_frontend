import style from 'styled-components';
import { BackgroundImg1 } from '../../../assets';

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
    width: 86.52vw;
    min-width: 1246px;
    height: 80.75vh;
    min-height: 663px;
    background-color: white;
    margin: 0 auto;
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.16);
    border: 1px solid #858585;
    padding-top: 25px;
`;
export const TitleBox = style.div `
    width: 81.66vw;
    min-width: 1176px;
    height: 46px;
    background: linear-gradient(to bottom, #592dd6, #716dec);
    display: flex;
    align-items: center;
    margin: 0 auto;
    > div {
        color: white;
    }
    > div:first-child {
        width: 142px;
        text-align: center;
    }
    > div:last-child {
        margin-left: 22px;
    }
`;
export const Line = style.div `
    width: 0px;
    height: 33px;
    border: 1px solid white;
`;
export const BlackLine = style(Line) `
    border: 1px solid rgba(112, 112, 112, 0.3);
`;
export const NoticeTitle = style.div `
    width: 81.66vw;
    min-width: 1176px;
    height: 45px;
    border-bottom: 1px solid #707070;
    margin: 0 auto;
    display: flex;
    align-items: center;
    font-size: 14px;
    > div:first-child {
        width: 142px;
        text-align: center;
    }
    > div:last-child {
        margin-left: 22px;
    }
`;
export const Contents = style.div `
    width: 75.97vw;
    min-width: 1094px;
    height: 34.95vh;
    margin: 3.41vh 0 3.41vh 76px;
`;
export const Flie = style.div `
    width: 81.66vw;
    min-width: 1176px;
    height: 45px;
    border-top: 1px solid #707070;
    border-bottom: 1px solid #707070;
    margin: 0 auto;
    display: flex;
    align-items: center;
    font-size: 16px;
    > div:first-child {
        width: 142px;
        text-align: center;
    }
    > div:nth-child(3) {
        margin-left: 22px;
        color: rgba(0, 0, 0, 0.52);
    }
    > img {
        width: 20px;
        height: 17px;
        margin-left: 50px;
    }
`;
export const Preview = style.button `
    width: 56px;
    height: 25px;
    background-color: #36B5CF;
    color: white;
    margin-left: 7px;
    border-radius: 3px;
    border: none;
    text-align: center;
    font-size: 10px;
`;
export const Buttons = style.div `
    display: felx;
    width: 100%;
    height: 29px;
`;
export const Modify = style.button `
    width: 87px;
    height: 29px;
    border: none;
    border-radius: 8px;
    float: right;
    background-color: #DFDFDF;
    margin-right: 19px;
    margin-top: 20px;
    cursor: pointer;
    > a {
        color: black;
    }
`;
export const Delete = style(Modify) `
    background-color: #1919B1;
    color: white;
    margin-right: 41px;
`;

/* 삭제 모달 */
export const ModalBackground = style.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(113, 113, 113, 0.4);
    > div {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 40%;
        width: 18.47vw;
        min-width: 266px;
        height: 17.05vh;
    }
`;
export const ModalBoxTitle = style.div `
    width: 100%;
    height: 3.28vh;
    background-color: #5151E6;
    color: white;
    text-align: center;
    font-size: 15px;
    padding-top: 3px;
    border-radius: 5px 5px 0 0;
    > span {
        font-weight: bold;
    }
`;
export const ModalBox = style.div `
    width: 100%;
    height: 13.76vh;
    background-color: white;
    padding-top: 3.04vh;
    border-radius: 0 0 5px 5px;
    > div {
        font-size: 14px;
        width: 100%;
        text-align: center;
        margin-bottom: 6.21vh;
    }
`;
export const True = style.button `
    width: 42px;
    height: 20px;
    background-color: #1919B1;
    color: white;
    font-size: 10px;
    padding-bottom: 2px;
    border: none;
    float: right;
    margin-right: 10px;
    border-radius: 9px;
    cursor: pointer;
    text-align: center;
`;
export const Cancle = style(True) `
    background-color: rgba(17, 17, 17, 0.14);
    color: rgba(0, 0, 0, 0.43);
`;

/* 공지사항 수정 */
export const MBackground = style.div `
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
export const MWhiteBox = style.div `
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
export const MLWrite = style.div `
    font-size: 30px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    color: #5D6BC9;
`;
export const MNotice = style.div `
    font-size: 30px;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    color: #5D6BC9;
    margin: 0 10px;
`;
export const MTitle = style.input `
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
export const MContentsBox = style.div `
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
export const MContentsTitle = style.div `
    font-size: 14px;
    color: #2E2E2E;
`;
export const MContents = style.textarea `
    width: 72.08vw;
    min-width: 1038px;
    height: 296px;
    resize: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.05);
    display: block;
    margin: 0 auto;
`;
export const MAdd = style.div `
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
export const MUpload = style.div `
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
export const MAddflie = style.div `
    font-size: 13px;
    margin: 16px 30px 0 25px;
    display: flex;
    > div {
        margin-left: 25px;
        color: rgba(3, 1, 0, 0.45);
    }
`;
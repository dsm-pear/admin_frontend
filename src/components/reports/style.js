import style from 'styled-components';
import { BackgroundImg1 } from '../../assets/background';

/* 배경 */
export const Background = style.div `
    width: 100%;
    min-width: 1280px;
    height: 100vh;
    background-size: 100% 100vh;
    background-repeat: no-repeat;
    background-image: url(${ BackgroundImg1 });
    position: relative;
    overflow: hidden;
    > div:first-child {
        margin-top: 28px;
        margin-bottom: 25px;
    }
`;
/* 흰색 박스 */
export const WhiteBox = style.div `
    width: 86.80vw;
    min-width: 1250px;
    height: 78.19vh;
    min-height: 672px;
    padding-top: 1.70vh;
    background-color: white;
    border: 1px solid #707070;
    margin: 0 auto;
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.16);
    box-sizing: border-box;
    > div:first-child {
        display: flex;
        height: 30px;
        float: right;
        margin-right: 99px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    }
    > div:last-child {
        width: 100%;
        min-width: 281px;
        height: 19px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2%;
    }
`;

/* 정렬 선택바 */
export const SelectUl = style.ul `
    width: 63px;
    height: 100%;
    padding: 0;
    margin: 0;
`;
export const Select = style.li `
    width: 100%;
    height: 100%;
    background-color: #5D38DA;
    list-style: none;
    text-align: center;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
    > span {
        color: white;
        font-size: 11px;
    }
    > span:first-child {
        font-size: 7px;
        margin-right: 5px;
    }
    &:hover .SubSelect {
        display: block;
    }
`;
export const SubSelect = style.ul `
    width: 61px;
    height: 42px;
    border: 1px solid rgba(112, 112, 112, 0.38);
    border-radius: 5px;
    list-style: none;
    padding: 9px 0 0 0;
    cursor: pointer;
    display: none;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;
export const SubSelectItem = style.li `
    font-size: 10px;
    margin-bottom: 2px;
    > div:first-child {
        margin-bottom: 1px;
    }
    &:hover .items {
        color: #1919B1;
    }
    &:hover .items-line {
        border-color: #1919B1;
    }
`;
export const SubLine = style.div `
    width: 38px;
    height: 0px;
    border: 1px solid #707070;
    margin: 0 auto;
`;
export const TitleSubLine = style(SubLine) `
    width: 30px;
`;

/* 검색창 */
export const SearchInput = style.input `
    width: 172px;
    font-size: 11px;
    border: 1px solid rgba(77, 77, 77, 0.41);
    border-radius: 0 5px 5px 0px;
`;

/* 제목 */
export const Title = style.div `
    font-size: 24px;
    font-weight: bold;
    margin-right: 30px;
`;
export const Button = style.button `
    width: 69px;
    height: 22px;
    font-size: 10px;
    border: none;
    border-radius: 20px;
    background-color: ${({color}) => color === true ? '#6e36e1' : '#DFDFFF'};
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    margin: 10px 3px 0 3px;
    cursor: pointer;
`;
export const TitleLine = style.div `
    display: flex;
    margin-top: 3.77vh;
    margin-left: 87px;
`;
/* 다운로드 */
export const Download = style.button `
    width: 76px;
    height: 20px;
    background-color: #6040DC;
    border-radius: 3px;
    border: none;
    color: white;
    font-size: 11px;
    float: right;
    margin-right: 99px;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);
    outline: none;
    cursor: pointer;
`;

/* 안내 창 */
export const TitleBox = style.div `
    width: 75.20vw;
    min-width: 1083px;
    height: 42px;
    border-radius: 5px;
    color: white;
    font-size: 19px;
    margin: 0 auto;
    margin-top: 4.50vh;
    background: linear-gradient(to bottom, #592dd6, #716dec);
    display: flex;
    align-items: center;
    > div:first-child {
        width: 112px;
        margin-left: 27px;
    }
    > div:nth-child(2) {
        width: calc(100% - 139px);
        display: flex;
    }
    > div > div:first-child {
        width: 59.5%;
    }
    > div > div:nth-child(2) {
        width: 21.5%;
    }
    > div > div:nth-child(3) {
        width: 19%;
    }
`;

export const Lines = style.ul `
    width: 75.20vw;
    min-width: 1083px;
    list-style: none;
    margin: 0 auto;
    padding: 0;
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

/* ReportLine.js */

export const Line = style.li `
    width: 75.20vw;
    min-width: 1083px;
    height: 58px;
    border-bottom: 1px solid #707070;
    display: flex;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
    color: black;
    > a {
        display: flex;
        color: black;
        width: calc(100% - 139px);
    }
    > a > div:first-child {
        width: 59.5%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    > a > div:nth-child(2) {
        width: 21.5%;
    }
    > a > div:last-child {
        width: 19%;
    }
`;

export const CheckBox = style.button `
    width: 22px;
    height: 22px;
    border: 1px solid #707070;
    margin-left: 27px;
    margin-right: 90px;
    outline: none;
    cursor: pointer;
    background-color: ${({boolean}) => boolean ? '#5D38DA' : 'white'}
`;
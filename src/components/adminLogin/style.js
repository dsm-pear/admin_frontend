import style from 'styled-components';
import { BackgroundImg } from '../../assets';

export const Background = style.div `
    width: 100%;
    height: 100vh;
    background-size: 100% 100vh;
    background-repeat: no-repeat;
    background-image: url(${ BackgroundImg });
    align-items: center;
    justify-content: center;
    display: flex;
`;
export const Whitebox = style.div `
    background-color: #FFFFFF;
    width: 1020px;
    height: 647px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    display: flex;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.16);
`;
export const Img = style.div `
    width: 186px;
    height: 170px;
    margin: 0 auto;
`;
export const Input = style.input `
    width: 358px;
    heigth: 40px;
    font-size: 20px;
    color: #000000 32%;
    border: none;
    border-bottom: 1px solid #707070;
    padding-bottom: 10px;
    margin-top: 50px;
    outline: none;
    & + img {
        margin-top: 45px;
        margin-left: -27px;
    }
`;
export const LogInButton = style.button `
    width: 196px;
    height: 52px;
    font-size: 22px;
    font-weight: bold;
    background-color: #0795FF;
    color: white;
    border-radius: 100px;
    border: none;
    margin: 0 auto;
    display: block;
    margin-top: 53px;
    outline: none;
    cursor: pointer;
    box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.16);
`;
export const Inputs = style.div `
    margin-top: 7px;
    margin-bottom: 53px;
    width: 364px;
    margin: 0 auto;
`;
import style from 'styled-components';

export const Flex = style.div `
    display: flex;
    margin-left: 6%
`;
export const Size = style.div `
    width: 752px;
    height: 56px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    align-items: center;
`;
export const Category = style.div `
    font-size: 22px;
    cursor: pointer;
`;
export const Pear = style.div `
    font-size: 22px;
    & > span {
        font-weight: bold;
    }
    margin-right: 6.5%;
`;
export const Circle = style.div `
    width: 146px;
    height: 146px;
    border-radius: 75px;
    background-color: #6363EF;
    position: absolute;
    top: -29px;
    right: -38px;
    z-index: -1;
`;
export const Logout = style.div `
    cursor: pointer;
    font-size: 18px;
    color: white;
    position: absolute;
    top: 73px;
    right: 51px;
`;
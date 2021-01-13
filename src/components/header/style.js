import style from 'styled-components';

export const Flex = style.div`
    display: flex;
    margin-left: 6%
`;
export const Size = style.div`
    width: 52.22vw;
    min-width: 752px;
    height: 56px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    align-items: center;
    .color {
        color: #1919B1;
    }
`;
export const Category = style.div`
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
        color: #1919B1;
    }
    > a {
        color: black;
    }
`;
export const Pear = style.div`
    font-size: 1.5rem;
    > span {
        font-weight: bold;
    }
    margin-right: 7%;
`;
export const Logout = style.div`
    min-width: 90px;
    height: 30px;
    font-size: 1.4rem;
    text-align: center;
    color: #1919b1;
    cursor: pointer;
    border-bottom: 3px solid  #1919b1;
    margin-left: 150px;
    margin-top: 15px;
`;

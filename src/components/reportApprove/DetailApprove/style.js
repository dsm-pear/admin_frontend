import style from 'styled-components';
import { BackgroundImg1 } from '../../../assets';

export const Background = style.div`
    width: 100%;
    height: 100vh;
    background-size: 100% 100vh;
    background-repeat: no-repeat;
    background-image: url(${BackgroundImg1});
    position: relative;
    overflow: hidden;
    min-width: 1280px;
    > div:first-child {
        margin-top: 28px;
        margin-bottom: 25px;
    }
`;
export const WhiteBox = style.div`
    width: 86.66vw;
    min-width: 1248px;
    height: 78.80vh;
    min-height: 647px;
    background-color: white;
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.16);
    border: 1px solid #707070;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 40px;
`;
export const TitleBox = style.div`
    width: 82.01vw;
    min-width: 1181px;
    height: 42px;
    display: flex;
    align-items: center;
    color: white;
    font-size: 1.125rem;
    margin: 0 auto;
    background: linear-gradient(to bottom, #592dd6, #716dec);
    > div:first-child {
        width: 12.36%;
        text-align: center;
    }
    > div:nth-child(3) {
        width: 56.64%;
        padding-left: 26px;
    }
    > div:nth-child(4) {
        width: 10%;
        text-align: center;
    }
    > div:last-child {
        width: 20%;
        padding-left: 10px;
    }
`;
export const Line = style.div`
    width: 0;
    height: 32px;
    border: 1px solid white;
`;
export const BlackLine = style(Line)`
    border: 1px solid rgba(112, 112, 112, 0.36);
`;
export const Title = style.div`
    width: 82.01vw;
    min-width: 1181px;
    height: 45px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.27);
    margin: 0 auto;
    display: flex;
    align-items: center;
    font-size: 1.125rem;
    > div:first-child {
        width: 12.36%;
        text-align: center;
    }
    > div:nth-child(3) {
        padding-left: 10px;
    }
`;
export const Contents = style.div`
    width: 75.97vw;
    min-width: 1094px;
    height: 14vh;
    margin: 3.41vh 0 3.41vh 76px;
    font-size: 1.125rem;
`;
export const SBlackLine = style(BlackLine)`
    height: 23px;
    margin-right: 9px;
`;
export const Team = style.div`
    width: 81.25vw;
    min-width: 1170px;
    height: 36px;
    background-color: rgba(136, 136, 136, 0.06);
    border-radius: 20px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    font-size: 0.9375rem;
    > div:first-child {
        width: 12%;
        text-align: center;
    }
`;
export const TeamMember = style.div`
    width: 10%;
    margin-left: 15px;
    display: flex;
    > div:last-child{
        font-size: 12px;
        margin-left: 5px;
    }
`;
export const Github = style.div`
    width: 40.13vw;
    min-width: 578px;
    height: 36px;
    background-color: rgba(136, 136, 136, 0.06);
    border-radius: 20px;
    font-size: 0.9375rem;
    display: flex;
    align-items: center;
    > div:first-child {
        width: 15.57%;
        text-align: center;
    }
    > a:nth-child(3) {
        font-size: 0.875rem;
        color: rgba(46, 46, 46, 0.61);
    }
`;
export const LanguageBox = style.div`
    width: 40.13vw;
    min-width: 578px;
    height: 36px;
    background-color: rgba(136, 136, 136, 0.06);
    border-radius: 20px;
    font-size: 0.9375rem;
    display: flex;
    align-items: center;
    margin-right: 9px;
    > div:first-child {
        width: 15.57%;
        text-align: center;
    }
`;
export const Language = style.div`
    width: 69px;
    height: 24px;
    background-color: #8383EB;
    border-radius: 20px;
    text-align: center;
    padding-top: 4px;
`;
export const GithubLanguageBox = style.div`
    width: 81.25vw;
    min-width: 1170px;
    height: 36px;
    display: flex;
    justify-content: space-between;
    margin: 9px auto;
`;
export const Flie = style.div`
    width: 81.66vw;
    min-width: 1176px;
    height: 45px;
    border-top: 1px solid rgba(0, 0, 0, 0.27);
    border-bottom: 1px solid rgba(0, 0, 0, 0.27);
    margin: 0 auto;
    display: flex;
    align-items: center;
    font-size: 1.125rem;
    > div:first-child {
        width: 142px;
        text-align: center;
    }
    > div:nth-child(3) {
        margin-left: 22px;
    }
    > img {
        width: 20px;
        height: 17px;
        margin-left: 50px;
        cursor: pointer;
    }
`;
export const Preview = style.button`
    width: 60px;
    height: 25px;
    background-color: #36B5CF;
    color: white;
    margin-left: 7px;
    border-radius: 3px;
    border: none;
    text-align: center;
    font-size: 0.75rem;
    cursor: pointer;
`;
export const ApproveBtn = style.button`
    width: 82px;
    height: 100%;
    background-color: ${({ color }) => (color === true ? '#1919B1' : '#EDEDEF')};
    color: ${({ color }) => (color === true ? 'white' : 'black')};
    text-align: center;
    float: right;
    border: none;
    margin-right: 8px;
    margin-top: 27px;
    cursor: pointer;
    &:hover {
        background-color: #1919B1;
        color: white;
    }
`;
export const DisApproveBtn = style(ApproveBtn)`
    background-color: ${({ color }) => (color === true ? '#1919B1' : '#EDEDEF')};
    color: ${({ color }) => (color === true ? 'white' : 'black')};
    margin-right: 3.12%;
`;
export const Btn = style.div`
    width: 100%;
    height: 28px;
`;

/* 승인거부 눌렀을 때 */
export const Comment = style.div`
    width: 355px;
    height: 36px;
    background-color: rgba(149, 149, 162, 0.12);
    margin-top: 47px;
    float: right;
    margin-right: -173px;
    display: flex;
    align-items: center;
    > div:first-child {
        font-size: 0.75rem;
        margin-left: 10px;
    }
`;
export const CommentInput = style.input`
    width: 265px;
    height: 16px;
    border: none;
    border-bottom: 1px solid black;
    background-color: rgba(0, 0, 0, 0);
    margin-left: 3px;
    font-size: 0.75rem;
`;
export const Send = style.div`
    margin-left: 2px;
    margin-right: 5px;
    cursor: pointer;
`;

/* 승인 모달 */
export const ModalBackground = style.div`
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
export const ModalBoxTitle = style.div`
    width: 100%;
    height: 3.28vh;
    background-color: #5151E6;
    color: white;
    text-align: center;
    font-size: 1rem;
    padding-top: 3px;
    border-radius: 5px 5px 0 0;
    > span {
        font-weight: bold;
    }
`;
export const ModalBox = style.div`
    width: 100%;
    height: 13.76vh;
    background-color: white;
    padding-top: 3.04vh;
    border-radius: 0 0 5px 5px;
    > div {
        font-size: 1.125rem;
        width: 100%;
        text-align: center;
        margin-bottom: 6.21vh;
    }
`;
export const True = style.button`
    width: 42px;
    height: 20px;
    background-color: #1919B1;
    color: white;
    font-size: 0.75rem;
    padding-bottom: 2px;
    border: none;
    float: right;
    margin-right: 10px;
    border-radius: 9px;
    cursor: pointer;
    text-align: center;
`;
export const Cancle = style(True)`
    background-color: rgba(17, 17, 17, 0.14);
    color: rgba(0, 0, 0, 0.43);
`;

import React, { useState } from 'react';
import * as S from './style';
import DeleteComment from './DeleteComment';
import { Profile } from '../../../assets';

const Comment = ({name, text, date, setData}) => {
    const [isClick, setIsClick] = useState(false);
    const onClick = e => {
        setIsClick(true);
    }
    return (
        <S.Comment>
            <img src={Profile} alt='프로필'/>
            <div>{name}</div>
            <div>{text}</div>
            <div>{date}</div>
            <S.DeleteBtn className='DeleteBtn' onClick={onClick}>삭제</S.DeleteBtn>
            {isClick &&
                <DeleteComment setIsClick={setIsClick} setData={setData} />
            }
        </S.Comment>
    )
}
export default Comment;
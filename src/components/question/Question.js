import React from 'react';
import * as S from './style';
import Header from '../header/Header';
import Line from './Line';

const Question = () => {
    return (
        <S.Background>
            <Header />
            <S.Contents>
                <S.Title>문의사항</S.Title>
                <S.Scontents>
                    <div>
                        <Line 
                            title="문의사항 드립니다"
                            date="2020.10.28"
                            email="rlagPwns@rlagPwns"
                            contents="그냥 드려봤어요"
                        />
                        <Line 
                            title="문의사항 드립니다"
                            date="2020.10.28"
                            email="rlagPwns@rlagPwns"
                            contents="그냥 드려봤어요"
                        />
                        <Line 
                            title="문의사항 드립니다"
                            date="2020.10.28"
                            email="rlagPwns@rlagPwns"
                            contents="그냥 드려봤어요"
                        />
                        <Line 
                            title="문의사항 드립니다"
                            date="2020.10.28"
                            email="rlagPwns@rlagPwns"
                            contents="그냥 드려봤어요"
                        />
                        <Line 
                            title="문의사항 드립니다"
                            date="2020.10.28"
                            email="rlagPwns@rlagPwns"
                            contents="그냥 드려봤어요"
                        />
                        <Line 
                            title="문의사항 드립니다"
                            date="2020.10.28"
                            email="rlagPwns@rlagPwns"
                            contents="그냥 드려봤어요"
                        />
                    </div>
                    <S.More>더보기</S.More>
                </S.Scontents>
            </S.Contents>
        </S.Background>
    )
}

export default Question;
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
                            title="문의사항 드립니다 그 제 잘못은 아닌것같은데 제 잘못 같기도 하고 아니 아무튼
                                   모르겠으니까 문의사항 드리는거에요 아니 일단은 해결해주세요"
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
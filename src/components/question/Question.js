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
                            title="승인되었다는 이메일을 받았는데 게시글에 올라가있지 않습니다."
                            date="2020.10.28"
                            email="rlagPwns@rlagPwns"
                            contents="이메일이 잘못 온 건지 저만 안 보이는 건지 모르겠습니다."
                        />
                        <Line 
                            title="마이페이지에 보고서가 안 보여요"
                            date="2020.10.28"
                            email="rlagPwns@rlagPwns"
                            contents="어제까지만 해도 잘 보였는데 오늘 갑자기 사라졌어요"
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
                </S.Scontents>
            </S.Contents>
        </S.Background>
    )
}

export default Question;
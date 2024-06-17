import styled from 'styled-components';
import rubi from '../font/RubikScribble-Regular.ttf';
import mimo from '../images/mimo.png';
import githubLog from '../images/github.png';
import mailLog from '../images/mail.png';
import githubHover from '../images/githubHover.png';
import mailHover from '../images/mailHover.png';

const MainPageStyle = styled.div`
    text-align: center;
    padding-top: 60px;
    height: 590px;
    background-color: antiquewhite;

    @font-face {
        font-family: 'rubi';
        src: url('${rubi}') format('truetype');
    }

`;
    
const InnerStyle = styled.div`
    margin: 0 200px;
    height: 100%;
    display: flex;
`;

const IntroduceWrap = styled.div`
    width: 60%;
    margin-top: 80px;

    span {
        font-weight: 800;
        font-size: 55px;
        font-family: 'rubi';
    }
`;

const ButtonWrap = styled.div`
    display: flex;
    padding: 0 50px;
    margin-left: auto;
    align-items: center;
    
`;

const GitImg = styled.div`
    background-color: black;
    border-radius: 53%;
    border: 1px solid antiquewhite;

    width: 30px;
    height: 30px;
    margin-left: 20px;
   
    img{
        width: 100%;
        height: 100%;
    }

    &:hover{
        content: url(${githubHover});
        background-color: antiquewhite;
        border: 1px solid #000;
    }
`;

const MailImg = styled.div`
    &:hover{
        content: url(${mailHover})
    };

    width: 30px;
    height: 30px;
    margin-left: 20px;

    img{
        width: 100%;
        height: 100%;
    }
`;

const ProfileWrap = styled.div`
    margin: 50px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;

    img {
        width: 100%;
        height: 100%;
    }
`;


export default function MainPage (){
    return (
        <MainPageStyle>
            <InnerStyle>
                <IntroduceWrap>
                    <span>Developer Seryeong</span>
                    <p>
                        안녕하세요 주니어 개발자 김세령입니다.

                    </p>
                    <ButtonWrap>
                        
                        <GitImg>
                            <a href="https://github.com/kimseryeong" target="_blank" className="aboutMeImg">
                                <img src={githubLog} />
                            </a>
                        </GitImg>

                        <MailImg>
                            <a href="mailto:kxxoo322@gmail.com" className="aboutMeImg">
                                <img src={mailLog}/>
                            </a>
                        </MailImg>
                    </ButtonWrap>

                </IntroduceWrap>
                <ProfileWrap>
                    <img src={mimo} alt='profile'/>
                </ProfileWrap>

            </InnerStyle>

        </MainPageStyle>
        
    );
}
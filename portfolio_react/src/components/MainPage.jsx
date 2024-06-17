import styled from 'styled-components';

const MainPageStyle = styled.div`
    text-align: center;
    padding-top: 60px;
    height: 590px;
    background-color: antiquewhite;

    @font-face {
        font-family: 'rubi';
        src: url('../font/RubikScribble-Regular.ttf') format('truetype');
    }

`;
    
    const InnerStyle = styled.div`
    margin: 0 200px;
    height: 100%;
    background-color: blue;
    display: flex;
    
    .introduce{
        background-color: pink;
        width: 60%;
        margin-top: 80px;
    }

    h1{
        font-family: 'rubi';
    }


    .img{
        margin: 50px;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #fff;

    }
`;

export default function MainPage (){
    return (
        <MainPageStyle>
            <InnerStyle>
                <div className='introduce'>
                    <h1>Developer Seryeong</h1>

                    <div class="gitImg">
                        <a href="https://github.com/kimseryeong" target="_blank" class="aboutMeImg">
                            <img src="../images/github_logo_icon.png" />
                        </a>
                    </div>

                    <div class="mailImg">
                        <a href="mailto:kxxoo322@gmail.com" class="aboutMeImg">
                            <img src="../images/mail.png" />
                        </a>
                    </div>

                </div>
                <div className='img'>
                    <img src='../images/kitten4.jpeg' alt='profile'/>
                </div>

            </InnerStyle>

        </MainPageStyle>
        
    );
}
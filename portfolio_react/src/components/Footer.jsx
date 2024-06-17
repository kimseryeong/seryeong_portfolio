import styled from 'styled-components';

const FooterStyle = styled.footer`
    background: hsl(0, 0%, 38%);
    bottom: 0px;
	height: 6rem;
    width: 100%;
    box-sizing: border-box;
    position: relative;
`;

const FooterInner = styled.div`
    position: absolute;

`;

const CopyRightStyle = styled.div`
    color: #fff;
    margin: 40px;
    width: 50vw;
`;

export default function Footer(){
    return (
        <FooterStyle>
            <FooterInner>
                <CopyRightStyle>
                    ⓒ 2024.kimseryeong
                </CopyRightStyle>
            </FooterInner>
        </FooterStyle>
    );
    
}
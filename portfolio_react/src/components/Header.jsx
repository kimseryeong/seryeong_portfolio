import styled from 'styled-components';

const HeaderStyle = styled.header`
    width: 100%;
    height: 60px;
    position:fixed;
    display: flex;
	margin: 0px auto;
    z-index: 9999;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
`;

const GnbStyle = styled.ul`
    align-items: center;
    margin-left: auto;
	bottom: 0px;
	right: 0px;
    top: 20px;
    display: grid;
    grid-template-columns: 150px 150px 150px 150px;

    li {
        float: left;
        padding: 0;
        margin: 0;
        list-style: none;
    }
    li a {
        color: black;
        text-decoration: none;
    }
    li a:hover {
        color: hsl(222, 100%, 75%);
        font-weight: 900;
    }
`;

export default function Header(){
    const nav = ['about', 'skill', 'project', 'resume'];

    return (
        <HeaderStyle>
            <GnbStyle>
                {
                nav.map((v) => {
                    return <li><a href={`#${v}`}>{v}</a></li>
                })
                }
            </GnbStyle>
        </HeaderStyle>
    );
}
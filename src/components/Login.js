import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = (props) => {
    return (
        <Container>
            <Content>
            <Link to="/home">
                <CTA>
                    <h2>Broad Selection of courses</h2>
                    <h3>Choose from 155,000 online video courses with new additions published every month</h3>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>Stream now. Terms Apply</Description>
                </CTA>
                </Link>
                <BgImage />
            </Content>
        </Container>
    );
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    color: #2F2A4B;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-image: linear-gradient(to top left,#DBCCEF,#FDE4E3,#FDE4E3);
    filter: blue(10px);
    -webkit-filte: blur(10px);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
`;

const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    user-select: none;
    cursor: pointer;

    &:hover {
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    font-size: 11px;
`;

const CTALogoTwo = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
    margin: 10px 0px;
`;

export default Login;
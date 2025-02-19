import styled from 'styled-components';
import BackgroundLogin from '../../assets/background-login.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 80%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    max-width: 50%;
    background: url('${Background}');
    background-color: #1e1e1e;
`;

export const Title = styled.h2`
    font-family: "Road Rage", serif;
`;

export const Form = styled.form``;

export const InputContainer = styled.div``;

export const Link = styled.a``;

export const Button = styled.button``;
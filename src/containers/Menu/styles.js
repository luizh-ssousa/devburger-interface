import styled from 'styled-components';
import BannerHamburger from '../../assets/banner-hamburger.svg';
import { Link } from 'react-router-dom';
import Background from '../../assets/background.svg';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;

     background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url('${Background}');
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    background: url('${BannerHamburger}') no-repeat;
    background-color: #1f1f1f;
    background-position: center;
    background-size: cover;

    h1 {
        font-family: 'Road Rage';
        font-size: 80px;
        line-height: 60px;
        color: #ffffff;
        position: absolute;

        right: 20%;
        top: 30%;
    }

    span {
        display: block;
        color: #ffffff;
        font-size: 20px;
            
        color: #ffffff;
        position: absolute;

        right: 17%;
        top: 70%;
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)``;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto;
`;
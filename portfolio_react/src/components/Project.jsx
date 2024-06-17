import styled from "styled-components";
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

register();

const ProjectStyle = styled.div`
    margin: 50px 0;
    padding: 20px;
    height: 500px;

    .swiper{
        width: 100%;
        height: 100%;
    }
`;

export default function Project(){
    return(
        <ProjectStyle>


        </ProjectStyle>


    );
}
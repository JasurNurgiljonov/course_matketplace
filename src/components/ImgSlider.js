import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src="/images/couse-one.png" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src="/images/course-two.png" />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src="/images/course-three.png" />
                </a>
            </Wrap>

        </Carousel>
    );
};

const Carousel = styled(Slider)`
    margin-top: 20px;

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s, ease 0s;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -75px;
    }

    .slick-next {
        right: -75px;
    }
`;

const Wrap = styled.div`
    border-radius: 20px;
    cursor: pointer;
    position: relative;

    a{
        border-radius: 20px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img {
            height: 100%;
            width: 100%;
            border-radius: 18px;
        }

        &:hover {
            padding: 0;
            border: 4px solid rgba(249, 249, 249, 0.8);
            transition-duration: 300ms;
        }
    }
`;

export default ImgSlider;
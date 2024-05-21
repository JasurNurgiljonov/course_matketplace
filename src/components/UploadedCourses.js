import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";

const UploadedCourses = (props) => {
    const movies = useSelector(selectTrending);
    console.log(movies);
    return(
        <Container>
            <h2>Courses Uploaded by you</h2>
            <Content>
                {movies &&
                    movies.map((movie, key) => (
                        <Wrap key={key}>
                        
                        <Link to={`/detail/` + movie.id}>
                            <div>
                            <img src={movie.cardImg} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <h5>{movie.author}</h5>
                            <h4>{movie.rating}</h4>
                            <h3>{movie.price} <del>{movie.oldprice}</del></h3>
                            </div>
                        </Link>
                        </Wrap>
                ))}
                <Wrap>    
                    <Link to={'upload'}>
                        <div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2ATQzpd4aOzTxi67wb_6Q16BNng6fF4yQg&usqp=CAU" alt="" />
                            <h3>Upload a course</h3>
                        </div>
                    </Link>
                </Wrap>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    padding: 0 0 26px;
    color: #2F2A4B;

`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    background-color: rgba(255, 255, 255, .8);  
    backdrop-filter: blur(5px);
    color: #2F2A4B;
    img {
        inset: 0px;
        display: block;
        width: calc(100% - 20px);
        padding: 30px;

        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 0;
        top: 0;
        border-radius: 10px;
        overflow: hidden;
    }
    &:hover {
        box-shadow: rgb(0 0 0 / 10%) 0px 20px 28px -8px,
        rgb(0 0 0 / 12%) 0px 15px 11px -5px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }

    h4, h3, h5 {
        z-index: 1;
        padding: 0px 20px;
        margin: 0px;
        color: #2F2A4B;

        del {
            color: rgba(42,42,75, 0.5);
            font-weight: lighter;
        }
    }
    h5 {
        color: #6D78BF;
    }

    h4 {
        color: #F6D271;
    }

    div {
        padding: 20px 0px;
    }

`;


export default UploadedCourses;
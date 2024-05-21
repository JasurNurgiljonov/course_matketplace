/* Here we will import all needed functions and components */
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewCourse from "./NewCourse";
import Recommends from "./Recommends";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice"
import { selectUserName } from "../features/user/userSlice";
import Bestsellers from "./Bestsellers";

const Home = (props) => {
        const dispatch = useDispatch();
        const userName = useSelector(selectUserName);
        let recommends = [];
        let newCourses = [];
        let bestsellers = [];
        let trending = [];

        useEffect(() => {
            /* Here we will access database collection */
            db.collection('movies').onSnapshot((snapshot) => {
                /* We will loop through the database documents and add to the array by type */
                snapshot.docs.map((doc) => {
                    switch(doc.data().type) {
                        case 'recommend' : 
                            recommends = [...recommends, { id: doc.id, ...doc.data() }];
                            break;
                        case "new":
                            newCourses = [...newCourses, { id: doc.id, ...doc.data() }];
                            break;

                        case "bestseller":
                            bestsellers = [...bestsellers, { id: doc.id, ...doc.data() }];
                            break;

                        case "trending":
                            trending = [...trending, { id: doc.id, ...doc.data() }];
                            break;
                    }
                });

                dispatch(
                    setMovies({
                      recommend: recommends,
                      newCourse: newCourses,
                      bestseller: bestsellers,
                      trending: trending,
                    })
                );
            });
        }, [userName]);



    return (
        <Container>
            <ImgSlider />
            <Recommends />
            <NewCourse />
            <Bestsellers />
            <Trending />
        </Container>
    );
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 70px;
    padding: 0 calc(3.5vw + 5px);
    border: 2px solid rgba(255,255,255,0.9);

    &:after {
        background-image: linear-gradient(to top left,#DBCCEF,#FDE4E3,#FDE4E3);
        filter: blue(10px);
        -webkit-filte: blur(10px);
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`;

export default Home;
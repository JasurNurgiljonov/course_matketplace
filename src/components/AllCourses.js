import styled from "styled-components";
import Recommends from "./Recommends";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice"
import { selectUserName } from "../features/user/userSlice";

const AllCourses = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    /* Here we will declare some arrays */
    let recommends = [];
    let newCourses = [];
    let bestsellers = [];
    let trending = [];

    useEffect(() => {
        /* Here we will access database collection */
        db.collection('movies').onSnapshot((snapshot) => {
            /* We will loop through the database documents and add to the array */
            snapshot.docs.map((doc) => {
                recommends = [...recommends, { id: doc.id, ...doc.data() }];
            });

            dispatch(
                setMovies({
                /* Here we will assign temporary arrays to database */
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
        <Recommends />
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

export default AllCourses;
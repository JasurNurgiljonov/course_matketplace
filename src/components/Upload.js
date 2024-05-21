import React from "react";
import styled from "styled-components";
import db from "../firebase";
import { useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";

const Upload = (props) => {
    const userName = useSelector(selectUserName);
    /* Here we will save form as a array */
    const saveAnswer = (event) => {
        event.preventDefault();
        const elementsArray = [...event.target.elements];
    
        const formData = elementsArray.reduce((accumulator, currentValue) => {
            if (currentValue.name) {
                accumulator[currentValue.name] = currentValue.value;
            }
    
            return accumulator;
        }, {});
        /* Here we will ad created array to database */
        db.collection("movies").add(formData);
    };
    return (
        <Container className="container">
            <h1>Add Course</h1>
            <form onSubmit={saveAnswer}>
                <input type="text" name="author" value={userName} disabled/>
                <input type="text" name="title" placeholder="Title"/>
                <input type="text" name="cardImg" placeholder="Card Image"/>
                <input type="text" name="price" placeholder="Price"/>
                <input type="text" name="oldprice" placeholder="Old Price"/>
                <input type="text" name="rating" placeholder="rating"/>
                <input type="text" name="cartegory" placeholder="Category"/>
                <input type="text" name="type" placeholder="Type"/>
                <input type="text" name="description" placeholder="description"/>
                <input type="text" name="previewVideo" placeholder="preview Viedo"/>
                <input type="text" name="wylOne" placeholder="What clients will learn"/>
                <input type="text" name="wylTwo" placeholder="What clients will learn"/>
                <input type="text" name="wylThree" placeholder="What clients will learn"/>
                <input type="text" name="wylFour" placeholder="What clients will learn"/>
                <input type="text" name="chapterOne" placeholder="Chapter One Name"/>
                <input type="text" name="chapterOneLink" placeholder="Chapter One Link"/>
                <input type="text" name="chapterTwo" placeholder="Chapter two Name"/>
                <input type="text" name="chapterTwoLink" placeholder="Chapter two Link"/>
                <input type="text" name="chapterThree" placeholder="Chapter Three Name"/>
                <input type="text" name="chapterThreeLink" placeholder="Chapter Three Link"/>
                <button>Submit to Firebase</button>
            </form>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    height: 100vh;
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    form {
        padding: 0px 30px;;
        input {
            width: 100%;
            padding: 15px 10px;
            margin: 10px 0px;
            border-radius: 10px;
            border-style: none;
        }

        button{
            width: 100%;
            padding: 15px 10px;
            margin: 10px 0px;
            border-radius: 10px;
            border-style: none;
        }
    }
`;

export default Upload;
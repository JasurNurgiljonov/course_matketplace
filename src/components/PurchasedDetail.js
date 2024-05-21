import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReactPlayer from 'react-player';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import db from '../firebase';
import { selectUserEmail } from "../features/user/userSlice";
import "react-toastify/dist/ReactToastify.css";

const PurchaseDetail = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const userEmail = useSelector(selectUserEmail);

  useEffect(() => {
    db.collection(userEmail + " purchased")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);


  return (
    <Container>
        <Background></Background>
      <ContentMeta>
        <h1>{detailData.title}</h1>
        <Description>{detailData.description}</Description>
        <SubTitle>By {detailData.author}</SubTitle>
        <CourseDescription>
        <h2>Chapters</h2>
            <span>
                <TextWrap>{detailData.chapterOne}</TextWrap>
                <VideoContainer>
                    <ReactPlayer width='100%' height='270px' controls url={detailData.chapterOneLink}></ReactPlayer>
                </VideoContainer>
                <TextWrap>{detailData.chapterTwo}</TextWrap>
                <VideoContainer>
                    <ReactPlayer width='100%' height='270px' controls url={detailData.chapterTwoLink}></ReactPlayer>
                </VideoContainer>
                <TextWrap>{detailData.chapterThree}</TextWrap>
                <VideoContainer>
                    <ReactPlayer width='100%' height='270px' controls url={detailData.chapterThreeLink}></ReactPlayer>
                </VideoContainer>
            </span>
        </CourseDescription>
      </ContentMeta>     
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
`;

const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to top left,#EE9CA7,#CF8BF3);
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
    position: relative;
    object-fit: contain;
    padding: 20px;

    @media (max-width: 768px) {
        width: initial; 
        padding: 10px;
    }
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
  padding: 0px 20px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  img {
    width: 32px;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SideBar = styled.div`
    right: 0px;
    background-color: rgba(259,259,259,0.6);
    position: relative;
    color: #2F2A4B;

    h1{
        padding: 0px 20px;
    }

    del {
        font-weight: lighter;
    }
    @media (max-width: 768px) {
        position: relative;
        width: initial;
        height: initial;
        padding-bottom: 10px;
    }
`;

const CourseDescription = styled.div`
    padding: 20px;
    background-color: rgba(259,259,259,0.3);
    margin: 20px 0px;
    width: 100%;

    span {
        display: grid;
        grid-gap: 15px;
        gap: 15px;
        grid-template-columns: repeat(1, minmax(0, 1fr));

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }

    h2 {
        width: 100%;
        padding: 0 10px;
    }
`;

const TextWrap = styled.div`
    position: relative;
    padding: 10px;
`;

const VideoContainer = styled.div`
    overflow: hidden;
`;

export default PurchaseDetail;
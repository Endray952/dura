import { useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import AuthController from "../../classes/authorization/AuthController";
import Navbar from "../../components/Navbar/Navbar";
import StudentAbout from "../../components/StudentAccount/StudentAbout/StudentAbout";
import StudentCourses from "../../components/StudentAccount/StudentCourses/StudentCourses";
import StudentLesson from "../../components/StudentAccount/StudentLessons/StudentLessons";
import StudentMarks from "../../components/StudentAccount/StudentMarks/StudentMarks";
import UpperSideBar from "../../components/UpperSideBar/UpperSideBar";

const upperSideBarItems = ["Расписание"];

const Container = styled.div`
    left: 0;
    margin: 0;
    margin-top: 20px;
    padding: 0;
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: center;
`;

const FullItemWrapper = styled.div`
    width: 80%;
`;

const TeacherAccount = () => {
    const [selectedTab, setSelectedTab] = useState<string>("Обо мне");

    const selectTab = (name: string) => {
        if (selectedTab !== name) {
            setSelectedTab(name);
        }
    };

    const access = useRef(false);

    if (!access.current) {
        if (AuthController.userRole === "Учитель") {
            console.log(AuthController.userRole);
            access.current = true;
        } else {
            return <Navigate to={"/"} replace />;
        }
    }

    return (
        <>
            <Navbar></Navbar>
            <UpperSideBar
                items={upperSideBarItems}
                selectedName={selectedTab}
                selectionCallback={selectTab}
            />
            <Container>
                <FullItemWrapper>
                    {selectedTab === "Расписание" && <StudentLesson />}
                </FullItemWrapper>
            </Container>
        </>
    );
};

export default TeacherAccount;

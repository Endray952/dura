import styled from "styled-components";
import EditableListDate from "../EditableList/EditableListDate";
import { TeacherLessonConfig } from "../EditableList/ListConfig/Teacher/TeacherLessonConfig";

const CoursesWrapper = styled.div``;

const CoursesName = styled.h1`
    color: black;
    font-weight: bold;
    font-size: 1.5em;
    margin-left: 20px;
`;

const TeacherLesson = () => {
    return (
        <CoursesWrapper>
            <CoursesName>Расписание</CoursesName>
            <EditableListDate config={TeacherLessonConfig} />
        </CoursesWrapper>
    );
};

export default TeacherLesson;

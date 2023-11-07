import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import HomeDetails from "../../page/homeDetails/HomeDetails";
import KrityStudent from "../../page/krityStudent/KrityStudent";
import Routin from "../../page/routin/Routin";
import Gallery from "../../page/gallary/Gallery";
import Teacher from "../../page/teacher/Teacher";
import Login from "../../page/login/Login";
import Admission from "../../page/admission/Admission";
import AcademicInfo from "../../component/akademicInfo/AcademicInfo";
import ParentInfo from "../../component/parentInfo/ParentInfo";
import PhotoGallery from "../../page/photoGallery/PhotoGallery";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomeDetails></HomeDetails>
            },
            {
                path: '/krityStudent',
                element: <KrityStudent></KrityStudent>
            },
            {
                path: '/rutin',
                element: <Routin></Routin>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/teachers',
                element: <Teacher></Teacher>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/admission',
                element: <Admission></Admission>
            },
            {
                path: '/academicInfo',
                element: <AcademicInfo></AcademicInfo>
            },
            {
                path: '/parentInfo',
                element: <ParentInfo></ParentInfo>
            },
            {
                path: '/photoGallery',
                element: <PhotoGallery></PhotoGallery>
            },
        ],
    }
]);
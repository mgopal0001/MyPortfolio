import Home from "./components/home/Home";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";

export const routes = [
    {
        path:"/",
        component:<Home/>
    },
    {
        path:"/home",
        component: <Home/>,
    },
    {
        path:"/about",
        component:<About/>,
    },
    {
        path:"/resume",
        component:<Resume/>,
    },
    {
        path:"/projects",
        component:<Projects/>,
    }
]
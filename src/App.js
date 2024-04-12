import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import NavBar from "./Component/NavBar";
import Contact from "./Component/Contact";
import UseSearchParams from "./Component/UseSearchParams";
import Page_1 from "./Component/Page_1";
import Page_2 from "./Component/Page_2";
import Page_3 from "./Component/Page_3";
import NestedRouting from "./Component/NestedRouting";
import UseLocationHooks from "./Component/UseLocationHooks";
// import PageNotFound from "./Component/PageNotFound";

function App() {
  return (
    // ! way to setting up react routes
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/useSearchParams" element={<UseSearchParams />}></Route>
        <Route path="/location" element={<UseLocationHooks />}></Route>


        {/* doing dynamic routing here */}
        <Route path="/contact/:name" element={<Contact />}></Route>

        {/* if specified route is not matched then redirect to PageNotFound component */}
        {/* <Route path="/*" element={<PageNotFound />}></Route> */}

        {/* if specified route is not matched then Navigate to home component  */}
        <Route path="/*" element={<Navigate to={"/home"} />}></Route>

        {/* Define Nested Routing here */}
        <Route path="/NestedRouting/" element={<NestedRouting />}>
          <Route path="page_1" element={<Page_1 />} />
          <Route path="page_2" element={<Page_2 />} />
          <Route path="page_3" element={<Page_3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/**
 * Everything related to the routing [Routes and Link] must be placed inside the <BrowserRouter> tag
 */

import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import NavBar from "./Component/NavBar";
import Contact from "./Component/Contact";
import UseSearchParams from "./Component/UseSearchParams";
import Page1 from "./Component/Page1";
import Page2 from "./Component/Page2";
import Page3 from "./Component/Page3";
import NestedRouting from "./Component/NestedRouting";
import UseLocationHooks from "./Component/UseLocationHooks";
import ProtectedRoute from "./Component/ProtectedRoute";
// import PageNotFound from "./Component/PageNotFound";

function App() {
  return (
    // ! way to setting up react routes
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

        {/* ! Apply Protected routing on UseSearchParams component */}
        <Route
          path="/useSearchParams"
          element={<ProtectedRoute cmp={UseSearchParams} />}
        ></Route>

        <Route path="/location" element={<UseLocationHooks />}></Route>

        {/* ! doing dynamic routing here */}
        <Route path="/contact/:name" element={<Contact />}></Route>

        {/* ! if specified route is not matched then redirect to PageNotFound component */}
        {/*  <Route path="/*" element={<PageNotFound />}></Route> */}

        {/* ! if specified route is not matched then Navigate to home component  */}
        <Route path="/*" element={<Navigate to={"/home"} />}></Route>

        {/* ! Define Nested Routing here */}
        <Route path="/NestedRouting/" element={<NestedRouting />}>
          <Route path="page_1" element={<Page1 />} />
          <Route path="page_2" element={<Page2 />} />
          <Route path="page_3" element={<Page3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/**
 * Everything related to the routing [Routes and Link] must be placed inside the <BrowserRouter> tag
 */

import "./App.css";
import { Route, Routes, Navigate, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/posts">Post</Link>
      </div>
      <Routes>
        <Route path="/" element={<h1>homepage</h1>} />
        <Route path="/posts" element={<h1>post list page</h1>} />
        <Route path="/posts/:id" element={<h1>post detail page</h1>} />
        <Route path="/posts/new" element={<h1>post new page</h1>} />
        <Route path="/posts/edit" element={<h1>post edit page</h1>} />
        <Route path="/profile" element={<h1>profile page</h1>} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;

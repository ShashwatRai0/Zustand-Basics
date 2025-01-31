import "./App.css";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import About from "./pages/About";
//import CourseList from './components/CourseList';

const App = () => {
  return (
    <div className="main-container">
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        My TO-DO List
      </h1>
      <CourseForm />
      <CourseList />
    </div>
  );
};

export default App;

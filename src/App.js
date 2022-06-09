import './App.css';
import DataTable from './table/DataTable';

function App() { 
  const showStudentDataHandler = (enteredStudentData) => {
    const studentData = {
      ...enteredStudentData
    };
  };

  return (
    <div className="App">
      <h1>
        Workshop 1
      </h1>
      <div>

      <h3>Reserve for Queries</h3>
      </div>
        <div>
        <DataTable onStudentDetail = {showStudentDataHandler}/>
        </div>
    </div>
    );
  }
export default App;
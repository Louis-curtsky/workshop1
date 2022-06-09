import { TableHeader } from "./TableHeader";
import studentList from "./StudentList";
import {Table, Button, Card} from "react-bootstrap";
import { useState } from "react";

const DataTable = (props) => {
  const [item, setStudent] = useState(props);
  const clickHandle = (data) => {
        setStudent(data);
    };
  props.onStudentDetail();
console.log(item);
  return (
    <div>
      <div>
        <Table striped bordered hover size="sm">
          <TableHeader />
          <tbody>
            {studentList.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.age}</td>
                <td>
                  {" "}
                  <Button
                    variant="outline-primary"
                    type="button"
                    onClick={(e) => clickHandle(data)}
                  >
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Header>{item.id}</Card.Header>
            <Card.Body>
                <Card.Title>{item.first_name} {item.last_name}</Card.Title>
                <Card.Text>{item.age}</Card.Text>
                <Card.Text>{item.gender}</Card.Text>
            </Card.Body>
            </Card>
        </div>
      </div>
    </div>
  );
};
export default DataTable;

// functionconponent

// functionconponent action

// functionconponent
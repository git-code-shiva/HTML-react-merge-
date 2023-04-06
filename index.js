const EditableTable = () => {
    // Define the table data as an array of objects
    const [tableData, setTableData] = React.useState([
      {id: 1, name: 'John', age: 25},
      {id: 2, name: 'Jane', age: 30},
      {id: 3, name: 'Bob', age: 45},
    ]);
  
    // Define a function to handle changes to the table data
    const handleTableDataChange = (event, id, field) => {
      const newData = tableData.map(row => {
        if (row.id === id) {
          return {...row, [field]: event.target.value};
        } else {
          return row;
        }
      });
      setTableData(newData);
    };
  
    // Render the table with editable columns
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td><input type="text" value={row.name} onChange={event => handleTableDataChange(event, row.id, 'name')} /></td>
              <td><input type="number" value={row.age} onChange={event => handleTableDataChange(event, row.id, 'age')} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  // Render the EditableTable component to the root element
  ReactDOM.render(<EditableTable />, document.getElementById('root'));
  
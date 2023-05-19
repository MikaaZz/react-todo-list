const App = () => {
  const [todos, setTodos] = React.useState([
    { title: 'Code a to-do list', done: false },
    { title: 'Eat breakfast', done: true },
    { title: 'Do some exercise', done: false },
    { title: 'Water the plants', done: true },
  ]);

  const [inputValue, setInputValue] = React.useState('');

  const addTodo = () => {
    setTodos([...todos, { title: inputValue, done: false }]);
  };
  const removeTodo = (indexFromItem) => {
    setTodos(todos.filter((element, index) => indexFromItem !== index));
  };
  const handleCheck = (index) => () => {
    setTodos( todos.map((element, i) => { return i === index ? { ...element, done: !element.done } : element; }));
  };

  return (
    <div id="app" className="container">
      <div className="row justify-content-center mt-4">
        <div className="col-lg-4 bg-white rounded shadow-sm p-5">
          <h1 className="mb-3">🗒 My Todo List</h1>
          {todos.map((item, index) => {
            return (
              <div
                key={index}
                className="shadow-sm rounded px-4 py-3 mb-2 border d-flex justify-content-around align-items-center gap-2 w-100"
                onClick={handleCheck(index)}
              >
                <div className="d-flex align-items-center gap-2">
                  <input
                    className="d-flex form-check-input me-1"
                    type="checkbox"
                    checked={item.done}
                  />
                  <div>{item.title}</div>
                </div>
                <button
                  onClick={() => removeTodo(index)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            );
          })}
          <div className="container p-4 bg-white d-flex justify-content-around rounded">
            <input
              type="text"
              placeholder="Your to-do goes here"
              value={inputValue}
              onChange={(event) => setInputValue(event.currentTarget.value)}
            />
            <button className="btn btn-primary" onClick={addTodo}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

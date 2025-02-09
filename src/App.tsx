// import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { TodoCreateForm } from "../ui-components";


const client = generateClient<Schema>();

 function App() {
  // const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }

  const { } =  client.mutations.Invoice({
    name: "Invoice Name",
    move_type: "Invoice Content",
    invoice_date: "1/1/2000",
  });

  return
      return <TodoCreateForm />;

}

export default App;

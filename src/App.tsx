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

  console.log(">" + JSON.stringify(client));
  console.log(">>" + JSON.stringify(client.mutations));
  console.log(">>>" + client.mutations.addInvoice);

  // client.mutations.addInvoice({
  //   name: "Invoice Name",
  //   move_type: "Invoice Content",
  //   invoice_date: "2025-02-09",
  // });

  return (
    <main>
      <h1>Invoices</h1>
      <TodoCreateForm />;
    </main>
  )

}

export default App;

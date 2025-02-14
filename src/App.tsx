// import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { ProductCreateForm } from "./ui-components";
import { ThemeProvider, Theme } from "@aws-amplify/ui-react";


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

  const theme = {
    name: 'my-theme',
    tokens: {
      colors: {
        background: {
          primary: { value: '#f0f0f0' }, // Set your desired background color
        },
        font: {
          primary: { value: '#008080' },
        },
      },
    },
  };
  

  return (
    <ThemeProvider theme={theme}>    
    <main>
      <h1>Product Registry</h1>
      <ProductCreateForm />;
    </main>
    </ThemeProvider>
  )

}

export default App;

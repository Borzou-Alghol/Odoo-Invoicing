import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({

  Product: a
    .model({
      name: a.string(),
      EAN: a.string().required(),
      nationalRefundLogo: a.string(),
      saRefundLogo: a.string(),
      glassColour: a.string(),
      petClour: a.string(),
      designatedCapacityMl: a.string(),
      heightMM: a.string(),
      diameterMM: a.string(),
      weightGM: a.string(),
      productGroupOther: a.string(),
      glassColourOther: a.string(),
      multiSchemeId: a.string(),
      supplierParticipantId: a.string(),
      effectiveFrom: a.string(),
      effectiveTo: a.string(),
      status: a.string(),
      comments: a.hasMany('Comment', 'productId')
    })
    .authorization((allow: any) => [allow.publicApiKey()]),

  Comment: a.model({
    author: a.string(),
    content: a.string(),
    productId: a.id(),
    product: a.belongsTo('Product', 'productId'),
  })
    .authorization((allow: any) => [allow.publicApiKey()]),

  Invoice: a
    .customType({
      name: a.string(),
      move_type: a.string(),
      invoice_date: a.string(),
    }),

  addInvoice: a
    .mutation()
    .arguments({
      name: a.string(),
      move_type: a.string(),
      invoice_date: a.string().required(),

    })
    .returns(a.ref("Invoice"))
    .authorization(allow => [allow.publicApiKey()])
    .handler(
      a.handler.custom({
        dataSource: "HttpDataSource",
        entry: "./addInvoice.js",
      })
    ),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>

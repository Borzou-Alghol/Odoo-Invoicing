import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow : any) => [allow.publicApiKey()]),

    Product: a
    .model({
      name: a.string(),
      EAN: a.string().required(),
      NationalRefundLogo: a.string(),
      SaRefundLogo: a.string(),
      GlassColour: a.string(),
      PetClour: a.string(),
      DesignatedCapacityMl: a.string(),
      HeightMM: a.string(),
      DiameterMM: a.string(),
      WeightGM: a.string(),
      ProductGroupOther: a.string(),
      GlassColourOther: a.string(),
      //CreatedBy: a.string(),
      //CreatedOn: a.string(),
      //LastModifiedBy: a.string(),
      //LastModifiedOn: a.string(),
      MultiSchemeId: a.string(),
      SupplierParticipantId: a.string(),
      EffectiveFrom: a.string(),
      EffectiveTo: a.string(),
    })
    .authorization((allow : any) => [allow.publicApiKey()]),


//     ID                      NOT NULL VARCHAR2(50)  
// PRODUCT_GROUP_ID        NOT NULL VARCHAR2(50)  
// NAME                    NOT NULL VARCHAR2(255) 
// EAN                              VARCHAR2(20)  
// NATIONAL_REFUND_LOGO    NOT NULL NUMBER(1)     
// SA_REFUND_LOGO                   NUMBER(1)     
// GLASS_COLOUR                     VARCHAR2(255) 
// PET_COLOUR                       VARCHAR2(255) 
// DESIGNATED_CAPACITY_ML  NOT NULL FLOAT(126)    
// HEIGHT_MM               NOT NULL FLOAT(126)    
// DIAMETER_MM             NOT NULL FLOAT(126)    
// WEIGHT_GM               NOT NULL FLOAT(126)    
// PRODUCT_GROUP_OTHER              VARCHAR2(80)  
// GLASS_COLOUR_OTHER               VARCHAR2(255) 
// CREATED_BY                       VARCHAR2(255) 
// CREATED_ON                       TIMESTAMP(6)  
// LAST_MODIFIED_BY        NOT NULL VARCHAR2(255) 
// LAST_MODIFIED_ON        NOT NULL DATE          
// MULTI_SCHEME_ID                  NUMBER        
// SUPPLIER_PARTICIPANT_ID          NUMBER        
// EFFECTIVE_FROM                   DATE          
// EFFECTIVE_TO                     DATE         

    Invoice: a.customType({
      name: a.string(),
      move_type: a.string(),
      invoice_date: a.string().required(),
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

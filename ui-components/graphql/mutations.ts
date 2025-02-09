/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addInvoice = /* GraphQL */ `
  mutation AddInvoice(
    $invoice_date: String!
    $move_type: String
    $name: String
  ) {
    addInvoice(
      invoice_date: $invoice_date
      move_type: $move_type
      name: $name
    ) {
      invoice_date
      move_type
      name
      __typename
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $condition: ModelTodoConditionInput
    $input: CreateTodoInput!
  ) {
    createTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $condition: ModelTodoConditionInput
    $input: DeleteTodoInput!
  ) {
    deleteTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $condition: ModelTodoConditionInput
    $input: UpdateTodoInput!
  ) {
    updateTodo(condition: $condition, input: $input) {
      content
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;

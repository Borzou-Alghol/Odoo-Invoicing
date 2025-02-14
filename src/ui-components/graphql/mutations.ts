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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $condition: ModelCommentConditionInput
    $input: CreateCommentInput!
  ) {
    createComment(condition: $condition, input: $input) {
      author
      content
      createdAt
      id
      product {
        EAN
        createdAt
        designatedCapacityMl
        diameterMM
        effectiveFrom
        effectiveTo
        glassColour
        glassColourOther
        heightMM
        id
        multiSchemeId
        name
        nationalRefundLogo
        petClour
        productGroupOther
        saRefundLogo
        supplierParticipantId
        updatedAt
        weightGM
        __typename
      }
      productId
      updatedAt
      __typename
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $condition: ModelProductConditionInput
    $input: CreateProductInput!
  ) {
    createProduct(condition: $condition, input: $input) {
      EAN
      comments {
        nextToken
        __typename
      }
      createdAt
      designatedCapacityMl
      diameterMM
      effectiveFrom
      effectiveTo
      glassColour
      glassColourOther
      heightMM
      id
      multiSchemeId
      name
      nationalRefundLogo
      petClour
      productGroupOther
      saRefundLogo
      supplierParticipantId
      updatedAt
      weightGM
      __typename
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $condition: ModelCommentConditionInput
    $input: DeleteCommentInput!
  ) {
    deleteComment(condition: $condition, input: $input) {
      author
      content
      createdAt
      id
      product {
        EAN
        createdAt
        designatedCapacityMl
        diameterMM
        effectiveFrom
        effectiveTo
        glassColour
        glassColourOther
        heightMM
        id
        multiSchemeId
        name
        nationalRefundLogo
        petClour
        productGroupOther
        saRefundLogo
        supplierParticipantId
        updatedAt
        weightGM
        __typename
      }
      productId
      updatedAt
      __typename
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $condition: ModelProductConditionInput
    $input: DeleteProductInput!
  ) {
    deleteProduct(condition: $condition, input: $input) {
      EAN
      comments {
        nextToken
        __typename
      }
      createdAt
      designatedCapacityMl
      diameterMM
      effectiveFrom
      effectiveTo
      glassColour
      glassColourOther
      heightMM
      id
      multiSchemeId
      name
      nationalRefundLogo
      petClour
      productGroupOther
      saRefundLogo
      supplierParticipantId
      updatedAt
      weightGM
      __typename
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $condition: ModelCommentConditionInput
    $input: UpdateCommentInput!
  ) {
    updateComment(condition: $condition, input: $input) {
      author
      content
      createdAt
      id
      product {
        EAN
        createdAt
        designatedCapacityMl
        diameterMM
        effectiveFrom
        effectiveTo
        glassColour
        glassColourOther
        heightMM
        id
        multiSchemeId
        name
        nationalRefundLogo
        petClour
        productGroupOther
        saRefundLogo
        supplierParticipantId
        updatedAt
        weightGM
        __typename
      }
      productId
      updatedAt
      __typename
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $condition: ModelProductConditionInput
    $input: UpdateProductInput!
  ) {
    updateProduct(condition: $condition, input: $input) {
      EAN
      comments {
        nextToken
        __typename
      }
      createdAt
      designatedCapacityMl
      diameterMM
      effectiveFrom
      effectiveTo
      glassColour
      glassColourOther
      heightMM
      id
      multiSchemeId
      name
      nationalRefundLogo
      petClour
      productGroupOther
      saRefundLogo
      supplierParticipantId
      updatedAt
      weightGM
      __typename
    }
  }
`;

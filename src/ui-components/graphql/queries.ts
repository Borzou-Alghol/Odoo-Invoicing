/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
        status
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
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
      status
      supplierParticipantId
      updatedAt
      weightGM
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        author
        content
        createdAt
        id
        productId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        status
        supplierParticipantId
        updatedAt
        weightGM
        __typename
      }
      nextToken
      __typename
    }
  }
`;

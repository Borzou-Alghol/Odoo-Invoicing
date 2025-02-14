/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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

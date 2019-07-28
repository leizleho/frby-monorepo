import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import {
  CreateOfferMutation,
  CreateOfferMutationVariables
} from '../schemaTypes';

export const createOfferMutation = gql`
  mutation CreateOfferMutation(
    $picture: Upload
    $title: String!
    $category: String!
    $description: String!
    $latitude: Float!
    $longitude: Float!
  ) {
    createOffer(
      input: {
        picture: $picture
        title: $title
        category: $category
        description: $description
        latitude: $latitude
        longitude: $longitude
      }
    )
  }
`;

export interface WithCreateOffer {
  createOffer: (variables: CreateOfferMutationVariables) => void;
}

export const withCreateOffer = graphql<
  any,
  CreateOfferMutation,
  CreateOfferMutationVariables,
  WithCreateOffer
>(createOfferMutation, {
  props: ({ mutate }) => ({
    createOffer: async variables => {
      if (!mutate) {
        return;
      }

      const response = await mutate({
        variables
      });
      console.log(response);
    }
  })
});

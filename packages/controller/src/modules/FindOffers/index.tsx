// import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { FindOffersQuery, FindOffersQuery_findOffers } from '../schemaTypes';

export const findOffersQuery = gql`
  query FindOffersQuery {
    findOffers {
      id
      title
      pictureUrl
      owner {
        id
        email
      }
    }
  }
`;

export interface WithFindOffers {
  offers: FindOffersQuery_findOffers[];
  loading: boolean;
}

export const WithFindOffers = graphql<any, FindOffersQuery, {}, WithFindOffers>(
  findOffersQuery,
  {
    props: ({ data }) => {
      let offers: FindOffersQuery_findOffers[] = [];
      if (data && !data.loading && data.findOffers) {
        offers = data.findOffers;
      }

      return {
        offers,
        loading: data ? data.loading : false
      };
    }
  }
);

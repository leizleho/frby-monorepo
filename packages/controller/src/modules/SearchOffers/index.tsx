import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {
  SearchOffersQuery,
  SearchOffersQueryVariables,
  SearchOffersQuery_searchOffers
} from '../schemaTypes';

export const searchOffersQuery = gql`
  query SearchOffersQuery(
    $input: SearchOffersInput
    $offset: Int!
    $limit: Int!
  ) {
    searchOffers(input: $input, offset: $offset, limit: $limit) {
      id
      title
      description
      category
      longitude
      latitude
      pictureUrl
      owner {
        id
        email
      }
    }
  }
`;

export interface WithSearchOffers {
  offers: SearchOffersQuery_searchOffers[];
  loading: boolean;
  loadMore: () => void;
  hasMoreOffers: boolean;
}

interface Props {
  variables: SearchOffersQueryVariables;
  children: (data: WithSearchOffers) => JSX.Element | null;
}

export class SearchOffers extends React.PureComponent<Props> {
  render() {
    const { children, variables } = this.props;
    return (
      <Query<SearchOffersQuery, SearchOffersQueryVariables>
        query={searchOffersQuery}
        variables={variables}
      >
        {({ data, loading, fetchMore }) => {
          let offers: SearchOffersQuery_searchOffers[] = [];

          if (data && data.searchOffers) {
            offers = data.searchOffers;
          }

          let hasMoreOffers = offers.length % variables.limit === 0;

          if (offers.length <= variables.offset) {
            hasMoreOffers = false;
          }

          return children({
            hasMoreOffers,
            offers,
            loading,
            loadMore: () => {
              fetchMore({
                variables: {
                  ...variables,
                  offset: offers.length
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) {
                    return prev;
                  }
                  return {
                    ...prev,
                    searchOffers: [
                      ...prev.searchOffers,
                      ...fetchMoreResult.searchOffers
                    ]
                  };
                }
              });
            }
          });
        }}
      </Query>
    );
  }
}

// @ts-ignore
import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {
  ViewOfferQuery_viewOffer,
  ViewOfferQuery,
  ViewOfferQueryVariables
} from '../schemaTypes';

export const viewOfferQuery = gql`
  query ViewOfferQuery($id: String!) {
    viewOffer(id: $id) {
      id
      title
      description
      category
      latitude
      longitude
      pictureUrl
      owner {
        id
        email
      }
    }
  }
`;

export interface WithViewOffer {
  offer: ViewOfferQuery_viewOffer | null;
  loading: boolean;
}

interface Props {
  offerId: string;
  children: (data: WithViewOffer) => JSX.Element | null;
}

export class ViewOffer extends React.PureComponent<Props> {
  render() {
    const { children, offerId } = this.props;
    return (
      <Query<ViewOfferQuery, ViewOfferQueryVariables>
        query={viewOfferQuery}
        variables={{ id: offerId }}
      >
        {({ data, loading }) => {
          let offer: ViewOfferQuery_viewOffer | null = null;

          if (data && data.viewOffer) {
            offer = data.viewOffer;
          }

          return children({
            offer,
            loading
          });
        }}
      </Query>
    );
  }
}

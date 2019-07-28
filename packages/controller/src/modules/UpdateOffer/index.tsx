// @ts-ignore
import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation, MutationFn } from 'react-apollo';
import {
  UpdateOfferMutation,
  UpdateOfferMutationVariables
} from '../schemaTypes';

export const updateOfferMutation = gql`
  mutation UpdateOfferMutation($offerId: String!, $input: UpdateOfferInput!) {
    updateOffer(offerId: $offerId, input: $input)
  }
`;

export interface WithUpdateOffer {
  updateOffer: MutationFn<UpdateOfferMutation, UpdateOfferMutationVariables>;
}

interface Props {
  children: (data: WithUpdateOffer) => JSX.Element | null;
}

export class UpdateOffer extends React.PureComponent<Props> {
  render() {
    const { children } = this.props;
    return (
      <Mutation<UpdateOfferMutation, UpdateOfferMutationVariables>
        mutation={updateOfferMutation}
      >
        {mutate => {
          return children({
            updateOffer: mutate
          });
        }}
      </Mutation>
    );
  }
}

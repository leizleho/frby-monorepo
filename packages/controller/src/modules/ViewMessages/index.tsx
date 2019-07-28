// @ts-ignore
import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {
  ViewMessagesQuery_messages,
  ViewMessagesQueryVariables,
  ViewMessagesQuery
} from '../schemaTypes';

export const viewMessagesQuery = gql`
  query ViewMessagesQuery($offerId: String!) {
    messages(offerId: $offerId) {
      text
      user {
        id
        email
      }
      offerId
    }
  }
`;

export const newMessageSubscription = gql`
  subscription NewMessageSubscription($offerId: String!) {
    newMessage(offerId: $offerId) {
      text
      user {
        id
        email
      }
      offerId
    }
  }
`;

export interface WithViewMessages {
  messages: ViewMessagesQuery_messages[];
  loading: boolean;
  subscribe: () => () => void;
}

interface Props {
  offerId: string;
  children: (data: WithViewMessages) => JSX.Element | null;
}

export class ViewMessages extends React.PureComponent<Props> {
  render() {
    const { children, offerId } = this.props;
    return (
      <Query<ViewMessagesQuery, ViewMessagesQueryVariables>
        query={viewMessagesQuery}
        variables={{ offerId }}
      >
        {({ data, loading, subscribeToMore }) => {
          let messages: ViewMessagesQuery_messages[] = [];

          if (data && data.messages) {
            messages = data.messages;
          }

          return children({
            messages,
            loading,
            subscribe: () =>
              subscribeToMore({
                document: newMessageSubscription,
                variables: { offerId },
                updateQuery: (prev, { subscriptionData }) => {
                  console.log('prev', prev);
                  console.log('subscriptionData', subscriptionData);

                  if (!subscriptionData.data) {
                    return prev;
                  }

                  // update prev with new data
                  return {
                    ...prev,
                    messages: [
                      ...prev.messages,
                      (subscriptionData.data as any).newMessage
                    ]
                  };
                }
              })
          });
        }}
      </Query>
    );
  }
}

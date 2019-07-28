import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Text } from 'react-native';
import ViewContainer from '../shared/ViewContainer';

const meQuery = gql`
  {
    me {
      id
      email
    }
  }
`;

export class Me extends React.PureComponent {
  render() {
    return (
      <Query query={meQuery}>
        {({ data }: any) => {
          return (
            <ViewContainer title="Freebay" subtitle="Find Stuff, Give Stuff">
              <Text style={{ fontSize: 30 }}>{JSON.stringify(data)}</Text>
            </ViewContainer>
          );
        }}
      </Query>
    );
  }
}

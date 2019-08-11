import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ViewMessages } from '@frby/controller';

export class MessageConnector extends React.PureComponent<
  RouteComponentProps<{
    offerId: string;
  }>
> {
  render() {
    const {
      match: {
        params: { offerId }
      }
    } = this.props;
    return (
      <ViewMessages offerId={offerId}>
        {({ loading, messages }) => {
          if (loading) {
            return <div>...loading</div>;
          }

          return (
            <div>
              {messages.map((m, i) => (
                <div key={`${i}-lm`}>{m.text}</div>
              ))}
            </div>
          );
        }}
      </ViewMessages>
    );
  }
}

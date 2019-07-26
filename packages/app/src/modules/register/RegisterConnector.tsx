import * as React from 'react';
import { RegisterController } from '@frby/controller';
import { RegisterView } from './RegisterView';

export class RegisterConnector extends React.PureComponent {
  render() {
    return (
      <RegisterController>
        {({ submit }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}

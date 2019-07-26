import * as React from 'react';
import { Platform } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

interface KeyboardSpacerProps {
  enableOnAndroid: boolean;
}

export default class KeyboardSpacerComp extends React.PureComponent<
  KeyboardSpacerProps
> {
  static defaultProps = {
    enableOnAndroid: false
  };

  render(): React.ReactNode {
    const { enableOnAndroid } = this.props;
    if (Platform.OS === 'ios' || enableOnAndroid) {
      return <KeyboardSpacer />;
    }
    return null;
  }
}

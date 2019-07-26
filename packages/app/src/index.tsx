import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Routes } from './routes';
import { client } from './apollo';
import * as Font from 'expo-font';

// tslint:disable-next-line: no-var-requires
const SedwickAveRegular = require('../assets/fonts/SedgwickAve-Regular.ttf');
// tslint:disable-next-line: no-var-requires
const SFProTextBold = require('../assets/fonts/SF-Pro-Text-Bold.otf');
// tslint:disable-next-line: no-var-requires
const SFProTextSemibold = require('../assets/fonts/SF-Pro-Text-Semibold.otf');
// tslint:disable-next-line: no-var-requires
const SFProTextRegular = require('../assets/fonts/SF-Pro-Text-Regular.otf');

interface State {
  isReady: boolean;
}
export default class App extends React.PureComponent<{}, State> {
  state: State = {
    isReady: false
  };

  ready() {
    this.setState({ isReady: true });
  }

  async componentDidMount(): Promise<void> {
    const fonts = Font.loadAsync({
      'SFProText-Bold': SFProTextBold,
      'SFProText-Semibold': SFProTextSemibold,
      'SFProText-Regular': SFProTextRegular,
      'SedgwickAve-Regular': SedwickAveRegular
    });
    try {
      await Promise.all([fonts]);
    } catch (e) {
      // Do nothing
    }
    this.ready();
  }
  render() {
    const { isReady } = this.state;
    return (
      <ApolloProvider client={client}>{isReady && <Routes />}</ApolloProvider>
    );
  }
}

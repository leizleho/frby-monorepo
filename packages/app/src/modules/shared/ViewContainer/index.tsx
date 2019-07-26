import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Dimensions
} from 'react-native';
import KeyboardSpacer from '../KeyboardSpacer';
import StyleGuide from '../StyleGuide';

import Flower from './Flower';

const { height } = Dimensions.get('window');

interface IProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default class ViewContainer extends React.PureComponent<IProps> {
  render(): React.ReactNode {
    const { children, title, subtitle } = this.props;
    return (
      <View style={styles.container}>
        <Flower />
        <ScrollView showsVerticalScrollIndicator bounces={false}>
          <StatusBar barStyle="dark-content" />
          <View style={styles.content}>
            <Text style={styles.headline}>{title}</Text>
            <Text style={styles.title1}>{subtitle}</Text>
            {children}
          </View>
          <KeyboardSpacer />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    height,
    justifyContent: 'center',
    padding: StyleGuide.spacing.base
  },
  title: {
    color: StyleGuide.palette.white
  },
  subtitle: {
    marginBottom: StyleGuide.spacing.small,
    color: StyleGuide.palette.white
  },
  headline: {
    fontSize: 40,
    lineHeight: 60,
    textAlign: 'center',
    fontFamily: 'SedgwickAve-Regular'
  },
  title1: {
    fontSize: 15,
    lineHeight: 41,
    textAlign: 'center',
    fontFamily: 'SFProText-Bold',
    marginBottom: StyleGuide.spacing.small,
    color: StyleGuide.palette.white
  }
});

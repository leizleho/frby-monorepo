import * as React from 'react';

import Header from '../../shared/Header/Header';
import HeaderLinks from '../../shared/Header/HeaderLinks';
import GridContainer from '../../shared/Grid/GridContainer';
import GridItem from '../../shared/Grid/GridItem';

import withStyles from '@material-ui/core/styles/withStyles';
import style from './style';
import image from '../../../assets/img/bg7.jpg';

interface Props {
  classes: any;
}

export class C extends React.PureComponent<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Freebay"
          links={<HeaderLinks dropdownHoverColor="rose" />}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: 'url(' + image + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'top center'
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={8} md={8}>
                Create Offer
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export const CreateOfferConnector = withStyles(style as any)(C);

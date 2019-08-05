import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FormikActions } from 'formik';
import { withCreateOffer, WithCreateOffer } from '@frby/controller';
import { OfferFormValues, OfferForm } from '../shared/OfferForm';

import Header from '../../shared/Header/Header';
import HeaderLinks from '../../shared/Header/HeaderLinks';
import GridContainer from '../../shared/Grid/GridContainer';
import GridItem from '../../shared/Grid/GridItem';
import Card from '../../shared/Card/Card';
import withStyles from '@material-ui/core/styles/withStyles';
import style from './style';
import image from '../../../assets/img/bg7.jpg';

interface Props {
  classes: any;
}

export class C extends React.PureComponent<
  RouteComponentProps<{}> & WithCreateOffer & Props
> {
  submit = async (
    values: OfferFormValues,
    { setSubmitting }: FormikActions<OfferFormValues>
  ) => {
    await this.props.createOffer(values);
    setSubmitting(false);
  };

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
                <Card>
                  <OfferForm submit={this.submit} />
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

const styledCreateOfferForm = withStyles(style as any)(C);
export const CreateOfferConnector = withCreateOffer(styledCreateOfferForm);

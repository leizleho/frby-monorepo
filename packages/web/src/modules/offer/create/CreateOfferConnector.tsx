import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FormikActions } from 'formik';
import { withCreateOffer, WithCreateOffer } from '@frby/controller';
import { OfferFormValues, OfferForm } from './OfferForm';

class C extends React.PureComponent<RouteComponentProps<{}> & WithCreateOffer> {
  submit = async (
    values: OfferFormValues,
    { setSubmitting }: FormikActions<OfferFormValues>
  ) => {
    await this.props.createOffer(values);
    setSubmitting(false);
  };

  render() {
    return <OfferForm submit={this.submit} />;
  }
}

export const CreateOfferConnector = withCreateOffer(C);

import * as React from 'react';
import { Form, Formik, FormikActions } from 'formik';
import Button from '@material-ui/core/Button';

import { Page1 } from './Page1';
import { Page2 } from './Page2';

interface ImageFile extends File {
  preview?: string;
}

export interface OfferFormValues {
  pictureUrl: string | null;
  picture: ImageFile | null;
  title: string;
  category: string;
  description: string;
  latitude: number;
  longitude: number;
}

interface State {
  page: number;
}

interface Props {
  initialValues?: OfferFormValues;
  submit: (
    data: OfferFormValues,
    actions: FormikActions<OfferFormValues>
  ) => Promise<void>;
}

// tslint:disable-next-line:jsx-key
const pages = [<Page1 />, <Page2 />];

export const defaultOfferFormValues = {
  pictureUrl: null,
  picture: null,
  title: '',
  category: '',
  description: '',
  latitude: 0,
  longitude: 0
};

export class OfferForm extends React.PureComponent<Props, State> {
  state = {
    page: 0
  };

  nextPage = () => this.setState(state => ({ page: state.page + 1 }));

  render() {
    const { submit, initialValues = defaultOfferFormValues } = this.props;

    return (
      <Formik<OfferFormValues> initialValues={initialValues} onSubmit={submit}>
        {({ isSubmitting }) => (
          <Form style={{ display: 'flex' }}>
            <div style={{ width: 400, margin: 'auto' }}>
              {pages[this.state.page]}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}
              >
                {this.state.page === pages.length - 1 ? (
                  <div>
                    <Button
                      color="primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      create offer
                    </Button>
                  </div>
                ) : (
                  <Button color="primary" onClick={this.nextPage}>
                    next page
                  </Button>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

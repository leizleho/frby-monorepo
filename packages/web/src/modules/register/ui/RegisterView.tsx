import * as React from 'react';
import { withFormik, FormikErrors, FormikProps, Field, Form } from 'formik';
import { validUserSchema } from '@frby/common';

import CustomInput from '../../shared/CustomInput';
import withStyles from '@material-ui/core/styles/withStyles';
import { InputAdornment } from '@material-ui/core';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import registerStyle from './registerStyle';

import Header from '../../shared/Header/Header';
import HeaderLinks from '../../shared/Header/HeaderLinks';
import GridContainer from '../../shared/Grid/GridContainer';
import GridItem from '../../shared/Grid/GridItem';
import Card from '../../shared/Card/Card';
import CardHeader from '../../shared/Card/CardHeader';
import CardBody from '../../shared/Card/CardBody';
import image from '../../../assets/img/bg7.jpg';
import Button from '../../shared/CustomButtons/Button';
interface FormValues {
  email: string;
  password: string;
}

interface Props {
  classes: any;
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { classes, handleSubmit } = this.props;
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
                <Card className={classes.cardSignup}>
                  <CardHeader
                    color="primary"
                    signup
                    className={classes.cardHeader}
                  >
                    <h2 className={classes.cardTitle}>Register</h2>
                  </CardHeader>
                  <CardBody>
                    <Form className={classes.form}>
                      <Field
                        name="email"
                        prefix={
                          <InputAdornment position="start">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        }
                        placeholder="Email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        component={CustomInput}
                      />

                      <Field
                        name="password"
                        type="password"
                        prefix={
                          <InputAdornment position="start">
                            <Lock className={classes.inputIconsColor} />
                          </InputAdornment>
                        }
                        placeholder="Password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        component={CustomInput}
                      />

                      <div className={classes.textCenter}>
                        <Button
                          onClick={handleSubmit}
                          round
                          size="sm"
                          color="primary"
                        >
                          Register
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

const FormikRegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);

export const RegisterView = withStyles(registerStyle as any)(
  FormikRegisterView
);

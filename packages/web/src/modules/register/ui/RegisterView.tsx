import * as React from 'react';
import { withFormik, FormikErrors, FormikProps } from 'formik';
import { validUserSchema } from '../../../yupSchemas/user';

import CustomInput from '../../shared/CustomInput';
import withStyles from '@material-ui/core/styles/withStyles';
import { Button, InputAdornment } from '@material-ui/core';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import Icon from '@material-ui/core/Icon';
import registerStyle from './registerStyle';

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
    const {
      classes,
      values,
      handleChange,
      handleSubmit,
      handleBlur,
      touched,
      errors
    } = this.props;
    return (
      <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', width: 400, margin: 'auto' }}>
          <CustomInput
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              placeholder: 'Email address',
              name: 'email',
              type: 'email',
              startAdornment: (
                <InputAdornment position="start">
                  <Email className={classes.inputIconsColor} />
                </InputAdornment>
              )
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={touched.email && errors.email}
            errorMsg={touched.email && errors.email ? errors.email : ''}
          />
          <CustomInput
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              placeholder: 'Password',
              name: 'password',
              type: 'password',
              startAdornment: (
                <InputAdornment position="start">
                  <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                </InputAdornment>
              )
            }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && errors.password}
            errorMsg={
              touched.password && errors.password ? errors.password : ''
            }
          />
        </div>
        <Button type="submit" color="primary">
          Register
        </Button>
      </form>
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

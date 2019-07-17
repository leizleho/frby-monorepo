import * as React from 'react';
import { withFormik, FormikErrors, FormikProps } from 'formik';
import CustomInput from '../../shared/CustomInput';
import { Button } from '@material-ui/core';
interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { values, handleChange, handleSubmit } = this.props;
    return (
      <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', width: 400, margin: 'auto' }}>
          <CustomInput
            id="email"
            labelText="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          <CustomInput
            id="password"
            labelText="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <Button type="submit" color="primary">
          Register
        </Button>
      </form>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);

import * as React from 'react';
import { withFormik, FormikErrors, FormikProps } from 'formik';
import { validUserSchema } from '@frby/common';
import { View, Button } from 'react-native';
import { ThemeProvider, Input } from 'react-native-elements';

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const {
      values,
      handleSubmit,
      setFieldValue,
      touched,
      errors,
      setFieldTouched,
      isSubmitting
    } = this.props;
    return (
      <View style={{ marginTop: 200 }}>
        <Input
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={values.email}
          onChangeText={value => setFieldValue('email', value)}
          onBlur={() => setFieldTouched('email')}
          editable={!isSubmitting}
          errorMessage={
            touched.email && errors.email ? errors.email : undefined
          }
        />
        <Input
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          value={values.password}
          onChangeText={value => setFieldValue('password', value)}
          onBlur={() => setFieldTouched('password')}
          editable={!isSubmitting}
          errorMessage={
            touched.password && errors.password ? errors.password : undefined
          }
        />
        <Button title="Submit" onPress={handleSubmit as any} />
      </View>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);

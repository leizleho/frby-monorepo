import * as React from 'react';
import { withFormik, FormikErrors, FormikProps } from 'formik';
import { loginSchema } from '@frby/common';
import { ThemeProvider, Button, Input } from 'react-native-elements';

import ViewContainer from '../shared/ViewContainer';
import StyleGuide from '../shared/StyleGuide';

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  onFinish: () => void;
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
      isSubmitting,
      isValid
    } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <ViewContainer title="Freebay" subtitle="Find Stuff, Give Stuff">
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
          <Button
            title="Login"
            onPress={handleSubmit as any}
            disabled={!isValid || isSubmitting}
            loading={isSubmitting}
            loadingProps={{ size: 'large', color: 'white' }}
          />
        </ViewContainer>
      </ThemeProvider>
    );
  }
}

const theme = {
  Input: {
    inputContainerStyle: {
      ...StyleGuide.styles.borderRadius,
      height: 45,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.5)',
      padding: StyleGuide.spacing.tiny,
      marginBottom: StyleGuide.spacing.tiny,
      ...StyleGuide.styles.shadow
    }
  },
  Button: {
    containerStyle: {
      width: '100%',
      padding: StyleGuide.spacing.small,
      marginBottom: StyleGuide.spacing.small
    },
    buttonStyle: {
      height: 50,
      backgroundColor: '#009884',
      ...StyleGuide.styles.borderRadius
    },
    disabledStyle: {
      backgroundColor: '#009884',
      opacity: 0.4
    },
    titleStyle: { color: 'white' },
    disabledTitleStyle: { color: 'white' }
  }
};

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
    props.onFinish();
  }
})(C);

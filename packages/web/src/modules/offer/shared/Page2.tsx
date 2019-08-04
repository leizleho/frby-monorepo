import * as React from 'react';
import { Field } from 'formik';
import CustomInput from '../../shared/CustomInput';

export const Page2 = () => (
  <>
    <Field
      label="Latitude"
      name="latitude"
      placeholder="Latitude"
      component={CustomInput}
    />
    <Field
      label="Latitude"
      name="longitude"
      placeholder="Longitude"
      component={CustomInput}
    />
  </>
);

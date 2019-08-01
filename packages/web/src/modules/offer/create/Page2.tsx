import * as React from 'react';
import { Field } from 'formik';
import { InputField } from '../../../../modules/shared/InputField';

export const Page2 = () => (
  <>
    <Field
      label="Latitude"
      name="latitude"
      placeholder="Latitude"
      component={InputField}
      useNumberComponent={true}
    />
    <Field
      label="Latitude"
      name="longitude"
      placeholder="Longitude"
      component={InputField}
      useNumberComponent={true}
    />
  </>
);

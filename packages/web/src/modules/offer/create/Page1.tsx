import * as React from 'react';
import { Field } from 'formik';
import CustomInput from '../../shared/CustomInput';
import { DropzoneField } from '../../shared/DropzoneField';
import MapboxField from '../../shared/MapboxField';

export const Page1 = () => (
  <>
    <Field name="title" placeholder="Title" component={InputField} />
    <Field name="category" placeholder="Category" component={InputField} />
    <Field
      name="description"
      placeholder="Description"
      component={CustomInput}
    />
    <Field name="picture" component={DropzoneField} />
    <Field name="location" component={MapboxField} />
  </>
);

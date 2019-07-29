import React from 'react';
import { FieldProps } from 'formik';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Clear from '@material-ui/icons/Clear';
import Check from '@material-ui/icons/Check';
import customInputStyle from './customInputStyle';

interface CustomInputProps extends FieldProps<any> {
  classes: any;
  labelText?: React.ReactNode;
  labelProps?: object;
  id?: string;
  inputProps?: object;
  formControlProps?: any;
  inputRootCustomClasses?: any;
  error?: any;
  success?: boolean;
  white?: boolean;
  placeholder?: string;
  prefix?: React.ReactNode;
}
const CustomInput: React.SFC<CustomInputProps> = ({
  field: { onChange, onBlur, ...field },
  form: { touched, errors, values, setFieldValue, handleSubmit },
  ...props
}) => {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    white,
    inputRootCustomClasses,
    success,
    placeholder,
    prefix
  } = props;

  const error = touched[field.name] && errors[field.name];
  const errorMsg = error ? errors[field.name] : null;

  const labelClasses = classNames({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  });
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white
  });
  let formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + ' ' + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses
        }}
        id={field.name}
        name={field.name}
        placeholder={placeholder}
        value={values[field.name]}
        onChange={onChange}
        onBlur={onBlur}
        startAdornment={prefix}
        {...inputProps}
      />
      {error && (
        <InputLabel className={classes.labelRootError}>{errorMsg}</InputLabel>
      )}
      {error ? (
        <Clear className={classes.feedback + ' ' + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + ' ' + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
};
export default withStyles(customInputStyle as any)(CustomInput);

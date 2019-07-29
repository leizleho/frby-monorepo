import React from 'react';
import classNames from 'classnames';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import buttonStyle from './buttonStyle';

interface RegularButtonProps {
  classes: any;
  color: any;
  size: 'sm' | 'lg';
  simple?: boolean;
  round?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  block?: boolean;
  link?: boolean;
  justIcon?: boolean;
  fileButton?: boolean;
  className?: string | any;
  onClick?: (...args: any[]) => any;
}

type Ref = HTMLButtonElement;

const RegularButton = React.forwardRef<Ref, RegularButtonProps>(
  (props, ref) => {
    const {
      classes,
      round,
      size,
      color,
      children,
      fullWidth,
      disabled,
      simple,
      block,
      link,
      justIcon,
      fileButton,
      className,
      ...rest
    } = props;

    const btnClasses = classNames({
      [classes.button]: true,
      [classes[size]]: size,
      [classes[color]]: color,
      [classes.round]: round,
      [classes.fullWidth]: fullWidth,
      [classes.disabled]: disabled,
      [classes.simple]: simple,
      [classes.block]: block,
      [classes.link]: link,
      [classes.justIcon]: justIcon,
      [classes.fileButton]: fileButton,
      [className]: className
    });
    return (
      <Button {...rest} ref={ref} className={btnClasses}>
        {children}
      </Button>
    );
  }
);

export default withStyles(buttonStyle as any)(RegularButton);

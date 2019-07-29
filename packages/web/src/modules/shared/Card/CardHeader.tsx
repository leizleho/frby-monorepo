import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import cardHeaderStyle from './cardHeaderStyle';

interface CardHeaderProps {
  classes: any;
  className?: any;
  color?: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose';
  plain?: boolean;
  image?: boolean;
  contact?: boolean;
  signup?: boolean;
  noShadow?: boolean;
}
const CardHeader: React.SFC<CardHeaderProps> = ({ ...props }) => {
  const {
    classes,
    className,
    children,
    color,
    plain,
    image,
    contact,
    signup,
    noShadow,
    ...rest
  } = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + 'CardHeader']]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderImage]: image,
    [classes.cardHeaderContact]: contact,
    [classes.cardHeaderSignup]: signup,
    [classes.noShadow]: noShadow,
    [className]: className !== undefined
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
};
export default withStyles(cardHeaderStyle as any)(CardHeader);

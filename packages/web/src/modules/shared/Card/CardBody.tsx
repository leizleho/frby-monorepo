import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import cardBodyStyle from './cardBodyStyle.jsx';

interface CardBodyProps {
  classes: any;
  className?: any;
  background?: boolean;
  plain?: boolean;
  formHorizontal?: boolean;
  pricing?: boolean;
  signup?: boolean;
  color?: boolean;
}
const CardBody: React.SFC<CardBodyProps> = ({ ...props }) => {
  const {
    classes,
    className,
    children,
    background,
    plain,
    formHorizontal,
    pricing,
    signup,
    color,
    ...rest
  } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyFormHorizontal]: formHorizontal,
    [classes.cardPricing]: pricing,
    [classes.cardSignup]: signup,
    [classes.cardBodyColor]: color,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
};
export default withStyles(cardBodyStyle as any)(CardBody);

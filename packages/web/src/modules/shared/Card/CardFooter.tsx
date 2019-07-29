import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import cardFooterStyle from './cardFooterStyle';

interface CardFooterProps {
  classes: any;
  className?: any;
  plain?: boolean;
  profile?: boolean;
  pricing?: boolean;
  testimonial?: boolean;
}

const CardFooter: React.SFC<CardFooterProps> = ({ ...props }) => {
  const {
    classes,
    className,
    children,
    plain,
    profile,
    pricing,
    testimonial,
    ...rest
  } = props;
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile || testimonial,
    [classes.cardFooterPricing]: pricing,
    [classes.cardFooterTestimonial]: testimonial,
    [className]: className !== undefined
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
};
export default withStyles(cardFooterStyle as any)(CardFooter);

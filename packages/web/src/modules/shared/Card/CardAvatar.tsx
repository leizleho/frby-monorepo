import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import cardAvatarStyle from './cardAvatarStyle';

interface CardAvatarProps {
  classes?: any;
  className?: any;
  profile?: boolean;
  plain?: boolean;
  testimonial?: boolean;
  testimonialFooter?: boolean;
}

const CardAvatar: React.SFC<CardAvatarProps> = ({ ...props }) => {
  const {
    classes,
    children,
    className,
    plain,
    profile,
    testimonial,
    testimonialFooter,
    ...rest
  } = props;
  const cardAvatarClasses = classNames({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [classes.cardAvatarTestimonial]: testimonial,
    [classes.cardAvatarTestimonialFooter]: testimonialFooter,
    [className]: className !== undefined
  });
  return (
    <div className={cardAvatarClasses} {...rest}>
      {children}
    </div>
  );
};
export default withStyles(cardAvatarStyle)(CardAvatar);

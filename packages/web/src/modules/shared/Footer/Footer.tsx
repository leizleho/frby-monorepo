/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import footerStyle from './footerStyle.jsx';

interface FooterProps {
  classes: any;
  theme?: any; // 'dark' | 'white' | 'transparent';
  big?: boolean;
  content: React.ReactNode;
  className?: any;
}
const Footer: React.SFC<FooterProps> = props => {
  const { children, content, classes, theme, big, className } = props;
  const themeType =
    theme === 'transparent' || theme === undefined ? false : true;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        {children !== undefined ? (
          <div>
            <div className={classes.content}>{children}</div>
            <hr />
          </div>
        ) : (
          ' '
        )}
        {content}
        <div className={classes.clearFix} />
      </div>
    </footer>
  );
};
export default withStyles(footerStyle as any)(Footer);

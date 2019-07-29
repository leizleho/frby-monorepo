import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

const style = {
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto'
  }
};

interface GridContainerProps {
  classes: any;
  className?: string;
  justify?: any;
}

const GridContainer: React.SFC<GridContainerProps> = ({ ...props }) => {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + ' ' + className}>
      {children}
    </Grid>
  );
};

GridContainer.defaultProps = {
  className: ''
};
export default withStyles(style)(GridContainer);

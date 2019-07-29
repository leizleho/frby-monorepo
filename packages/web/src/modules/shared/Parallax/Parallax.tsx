import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import parallaxStyle from './parallaxStyle';

interface ParallaxProps {
  classes: any;
  className?: any;
  filter?:
    | 'primary'
    | 'rose'
    | 'dark'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
  style?: any;
  image?: string;
  small?: boolean;
}

interface ParallaxState {
  transform: string;
}

class Parallax extends React.Component<ParallaxProps, ParallaxState> {
  constructor(props: any) {
    super(props);
    let windowScrollTop;
    // tslint:disable-next-line: prefer-conditional-expression
    if (window.innerWidth >= 768) {
      windowScrollTop = window.pageYOffset / 3;
    } else {
      windowScrollTop = 0;
    }
    this.state = {
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)'
    };
  }
  componentDidMount() {
    if (window.innerWidth >= 768) {
      const windowScrollTop = window.pageYOffset / 3;
      this.setState({
        transform: 'translate3d(0,' + windowScrollTop + 'px,0)'
      });
      window.addEventListener('scroll', this.resetTransform);
    }
  }
  componentWillUnmount() {
    if (window.innerWidth >= 768) {
      window.removeEventListener('scroll', this.resetTransform);
    }
  }
  resetTransform = () => {
    const windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: 'translate3d(0,' + windowScrollTop + 'px,0)'
    });
  };
  render() {
    const {
      classes,
      filter,
      className,
      children,
      style,
      image,
      small
    } = this.props;
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes[filter + 'Color']]: filter !== undefined,
      [classes.small]: small,
      [className]: className !== undefined
    });
    return (
      <div
        className={parallaxClasses}
        style={{
          ...style,
          backgroundImage: 'url(' + image + ')',
          ...this.state
        }}
      >
        {children}
      </div>
    );
  }
}
export default withStyles(parallaxStyle as any)(Parallax);

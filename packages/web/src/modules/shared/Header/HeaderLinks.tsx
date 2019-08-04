/* eslint-disable */
import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import get from 'lodash.get';
import { Link } from 'react-router-dom';
import CustomDropdown from '../CustomDropdown/CustomDropdown';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Fingerprint from '@material-ui/icons/Fingerprint';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Settings from '@material-ui/icons/Settings';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Loyalty from '@material-ui/icons/Loyalty';
import Redeem from '@material-ui/icons/Redeem';
import ViewList from '@material-ui/icons/ViewList';

import withStyles from '@material-ui/core/styles/withStyles';
import headerLinksStyle from './headerLinksStyle';

function HeaderLinks({ ...props }) {
  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) {
      return (c / 2) * t * t + b;
    }
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e: any, target: any) => {
    if (window.location.pathname === '/sections') {
      const isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        const targetScroll = document.getElementById(target);
        if (targetScroll) {
          scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
        }
      }
    }
  };

  const scrollGo = (element: any, to: number, duration: number) => {
    const start = element.scrollTop;
    const change = to - start;
    let currentTime = 0;
    const increment = 20;

    const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  // const onClickSections = {};

  const { classes, dropdownHoverColor } = props;

  const guestLinks = (
    <div>
      <ListItem className={classes.listItem}>
        <Link to="/register" className={classes.navLink}>
          <PersonAdd /> Register
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/login" className={classes.navLink}>
          <Fingerprint /> Login
        </Link>
      </ListItem>
    </div>
  );

  const authLinks = (
    <div>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="My Account"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          ButtonIcon={ViewList}
          dropdownList={[
            <Link to="/my-offers" className={classes.dropdownLink}>
              <Redeem className={classes.dropdownIcons} /> My Offers
            </Link>,
            <Link to="/mywants" className={classes.dropdownLink}>
              <Loyalty className={classes.dropdownIcons} /> My Wishes
            </Link>,
            <Link to="/myprofile" className={classes.dropdownLink}>
              <AccountCircle className={classes.dropdownIcons} /> Profile
            </Link>,
            <Link
              to="/settings#contacts"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, 'contacts')}
            >
              <Settings className={classes.dropdownIcons} /> Settings
            </Link>,

            <Link to="/logout" className={classes.dropdownLink}>
              <ExitToApp className={classes.dropdownIcons} />
              Logout
            </Link>
          ]}
        />
      </ListItem>
    </div>
  );

  const meQuery = gql`
    {
      me {
        id
        email
      }
    }
  `;

  const navLinks = (
    <Query query={meQuery}>
      {({ data, loading }: any) => {
        if (loading) {
          return null;
        }

        const isLoggedIn = !!get(data, 'me', false);
        if (isLoggedIn) {
          return authLinks;
        }
        return guestLinks;
      }}
    </Query>
  );

  return (
    <List className={classes.list + ' ' + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          <Redeem /> Offers
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/wishes" className={classes.navLink}>
          <Loyalty /> Wishes
        </Link>
      </ListItem>

      {navLinks}
    </List>
  );
}

export default withStyles(headerLinksStyle as any)(HeaderLinks);

/*eslint-disable*/
import React from 'react';
import { SearchOffers } from '@frby/controller';
import classNames from 'classnames';
import Header from '../../shared/Header/Header';
import HeaderLinks from '../../shared/Header/HeaderLinks';
import GridContainer from '../../shared/Grid/GridContainer';
import GridItem from '../../shared/Grid/GridItem';
import Parallax from '../../shared/Parallax/Parallax';

import * as Masonry from 'react-masonry-component';
import * as InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
// import Button from '../../shared/CustomButtons/Button';
import Card from '../../shared/Card/Card';
import CardHeader from '../../shared/Card/CardHeader';
import CardBody from '../../shared/Card/CardBody';
import CardFooter from '../../shared/Card/CardFooter';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import InputAdornment from '@material-ui/core/InputAdornment';
import Footer from '../../shared/Footer/Footer';
import AccessTime from '@material-ui/icons/AccessTime';
import Place from '@material-ui/icons/Place';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './searchViewStyle';

const masonryOptions = {
  transitionDuration: 0,
  fitWidth: true
};

// const imagesLoadedOptions = { background: '.my-bg-image-el' };

interface Props {
  classes?: any;
}

interface State {
  title: string;
}

class SearchOffersConnector extends React.Component<Props, State> {
  state: State = {
    title: ''
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { title } = this.state;

    const { classes } = this.props;
    return (
      <div>
        <Header
          brand="Freebay"
          links={<HeaderLinks dropdownHoverColor="primary" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 300,
            color: 'primary'
          }}
        />
        <Parallax
          image={require('../../../assets/img/clark-street-merc.jpg')}
          filter="primary"
          small
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <div className={classes.brand}>
                  <h1 className={classes.title}>Give Stuff! Find Stuff!</h1>
                  <h4>
                    Got stuff you don't need? <b>give away!</b> Looking for
                    something? <b>search freebay!</b>
                  </h4>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classes.section}>
          <div className={classes.container}>
            <h2>Offers</h2>

            <SearchOffers variables={{ input: { title }, limit: 5, offset: 0 }}>
              {({ offers, hasMoreOffers, loadMore }) => (
                <InfiniteScroll
                  loadMore={loadMore}
                  hasMore={hasMoreOffers}
                  loader={<p key={0}>Loading...</p>}
                >
                  <Masonry
                    className={'my-gallery-class'} // default ''
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                    style={{ margin: '0 auto' }}
                  >
                    {offers.map(offer => (
                      <div
                        style={{
                          position: 'relative',
                          margin: '10px',
                          overflow: 'hidden',
                          width: '240px'
                        }}
                        key={`${offer.id}-div`}
                      >
                        <Card>
                          <CardHeader image>
                            <a href="#!">
                              {offer.pictureUrl && (
                                <img alt="example" src={offer.pictureUrl} />
                              )}
                            </a>
                          </CardHeader>
                          <CardBody className={classes.textCenter} plain>
                            <h4 className={classes.cardTitle}>{offer.title}</h4>
                            <p className={classes.cardDescription}>
                              {offer.description}
                            </p>
                          </CardBody>
                          <CardFooter className={classes.justifyContentBetween}>
                            <Link
                              to={`/update-offer/${offer.id}`}
                              className="btn btn-info"
                            >
                              Update Offer
                            </Link>
                            <div className={classes.stats}>
                              <AccessTime /> 2 days ago
                            </div>
                            <div className={classes.stats}>
                              <Place /> Offer Location
                            </div>
                          </CardFooter>
                        </Card>
                      </div>
                    ))}
                  </Masonry>
                </InfiniteScroll>
              )}
            </SearchOffers>
          </div>
        </div>

        <Footer
          theme="dark"
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://wwww.freebay.app"
                      target="_blank"
                      className={classes.block}
                    >
                      Contact us
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.right}>
                Copyright &copy; {1900 + new Date().getFullYear()}{' '}
                <a
                  href="https://www.freebay.app"
                  target="_blank"
                  className={classes.aClasses}
                >
                  Freebay
                </a>{' '}
                All Rights Reserved.
              </div>
            </div>
          }
        />
      </div>
    );
  }
}
export default withStyles(styles as any)(SearchOffersConnector);

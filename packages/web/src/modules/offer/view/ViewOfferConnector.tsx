import * as React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { ViewOffer } from '@frby/controller';

import Header from '../../shared/Header/Header';
import HeaderLinks from '../../shared/Header/HeaderLinks';
import GridContainer from '../../shared/Grid/GridContainer';
import GridItem from '../../shared/Grid/GridItem';
import Card from '../../shared/Card/Card';
import CardHeader from '../../shared/Card/CardHeader';
import CardBody from '../../shared/Card/CardBody';
import withStyles from '@material-ui/core/styles/withStyles';
import style from './style';
import image from '../../../assets/img/bg7.jpg';

interface Props {
  classes: any;
}

class C extends React.PureComponent<
  RouteComponentProps<{ offerId: string }> & Props
> {
  render() {
    const {
      match: {
        params: { offerId }
      },
      classes
    } = this.props;
    return (
      <ViewOffer offerId={offerId}>
        {data => {
          console.log(data);
          if (!data.offer) {
            return <div>...loading</div>;
          }

          return (
            <div>
              <Header
                absolute
                color="transparent"
                brand="Freebay"
                links={<HeaderLinks dropdownHoverColor="rose" />}
              />
              <div
                className={classes.pageHeader}
                style={{
                  backgroundImage: 'url(' + image + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'top center'
                }}
              >
                <div className={classes.container}>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={8} md={8}>
                      <Card blog>
                        <CardHeader image>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            {data.offer.pictureUrl && (
                              <img src={data.offer.pictureUrl} alt="..." />
                            )}
                          </a>
                          <div
                            className={classes.coloredShadow}
                            style={
                              {
                                backgroundImage: `url(${
                                  data.offer.pictureUrl
                                })`,
                                opacity: '1'
                              } as any
                            }
                          />
                        </CardHeader>
                        <CardBody>
                          <h4 className={classes.cardTitle}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              {data.offer.title}
                            </a>
                          </h4>
                          <p className={classes.cardDescription}>
                            {data.offer.description}
                          </p>
                          <div>
                            <Link to={`/offer/${offerId}/chat`}>chat</Link>
                          </div>
                          <div>
                            <Link to={`/offer/${offerId}/edit`}>edit</Link>
                          </div>
                        </CardBody>
                      </Card>
                    </GridItem>
                  </GridContainer>
                </div>
              </div>
            </div>
          );
        }}
      </ViewOffer>
    );
  }
}

export const ViewOfferConnector = withStyles(style as any)(C);

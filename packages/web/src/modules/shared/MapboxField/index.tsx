import * as React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import Dropdown from './Dropdown';
import './mapboxfield.css';
import { FieldProps } from 'formik';

const token: string = process.env.REACT_APP_MAPBOX_TOKEN as string;
const geocodingUrl = 'https://api.mapbox.com/geocoding/v5';

// tslint:disable-next-line:max-line-length
const mapboxGeocoding = (query: string) =>
  `${geocodingUrl}/mapbox.places/${query}.json?access_token=${token}`;

const Map = ReactMapboxGl({ accessToken: token });

const mapStyle = {
  width: '400px',
  height: '400px'
};

export interface Place {
  id: string;
  name: string;
  center: [number, number];
}

export interface State {
  query: string;
  options: Place[];
  selected?: Place;
  center: [number, number];
}

const req = (url: string, body?: any, method = 'GET') =>
  new Request(url, {
    method,
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Accept-Charset': 'utf-8'
    }),
    body
  });

export interface Props {
  // tslint:disable-next-line:no-any
  onStyleLoad?: (map: any) => any;
}

class MapboxField extends React.Component<FieldProps<any> & Props, State> {
  state: State = {
    query: '',
    options: [],
    selected: undefined,
    center: [-122.463, 37.7648]
  };

  fetch = (query: string) => {
    fetch(req(mapboxGeocoding(query)))
      .then((res: any) => res.json())
      .then((data: any) => {
        console.log('DATA', data);
        this.setState({
          options: data.features.map((place: any) => ({
            id: place.id,
            center: place.center,
            name: place.place_name
          }))
        });
      });
  };

  onSelectItem = (index: number) => {
    const selected = this.state.options[index];
    const {
      form: { setValues, values }
    } = this.props;

    this.setState({
      selected,
      center: selected.center
    });

    setValues({
      ...values,
      latitude: selected.center[1],
      longitude: selected.center[0]
    });
  };

  onSearch = (query: string) => {
    this.setState({ query });
    this.fetch(query);
  };

  onStyleLoad = (map: any) => {
    const { onStyleLoad } = this.props;
    return onStyleLoad && onStyleLoad(map);
  };

  render() {
    const {
      form: { values }
    } = this.props;
    const { options, selected, center } = this.state;

    return (
      <div className="main-container">
        <Dropdown
          onSearch={this.onSearch}
          onSelectItem={this.onSelectItem}
          options={options}
        />
        <Map
          style="mapbox://styles/mapbox/outdoors-v10" //eslint-disable-line
          containerStyle={mapStyle}
          center={center}
          onStyleLoad={this.onStyleLoad}
        >
          {selected && (
            <Marker coordinates={selected.center}>
              <div className="mark" />
            </Marker>
          )}
        </Map>
        <div>Longitude: {values.longitude}</div>
        <div>Latitude: {values.latitude}</div>
      </div>
    );
  }
}

export default MapboxField;

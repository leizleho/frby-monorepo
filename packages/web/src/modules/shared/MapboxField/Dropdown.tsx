import * as React from 'react';
import { Place } from './index';
import './dropdown.css';

export interface Props {
  options: Place[];
  onSearch: (evt: any) => void;
  onSelectItem: (item: number) => void;
}

class Dropdown extends React.Component<Props, {}> {
  public state = {
    value: ''
  };

  private onSelectItem = (index: number) => {
    this.setState({
      value: ''
    });

    this.props.onSelectItem(index);
  };

  private onSearch = ({ target }: any) => {
    this.setState({
      value: target.value
    });

    if (target.value.length > 2) {
      this.props.onSearch(target.value);
    }
  };

  public render() {
    const { options } = this.props;
    const { value } = this.state;

    return (
      <div className="container">
        <input
          className="geocoder-input"
          onChange={this.onSearch}
          value={value}
          placeholder="Search location"
        />
        {value.length > 2 && (
          <ul className="geocoder-ul">
            {options.map((el, index) => (
              <li
                className="geocoder-li"
                key={index}
                onClick={this.onSelectItem.bind(this, index)}
              >
                {el.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Dropdown;

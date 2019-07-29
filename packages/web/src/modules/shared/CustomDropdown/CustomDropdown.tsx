import React from 'react';
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Divider from '@material-ui/core/Divider';
import Popper from '@material-ui/core/Popper';
// core components
import Button from '../CustomButtons/Button';
import customDropdownStyle from './customDropdownStyle';

interface IProps {
  classes: any;
  hoverColor?: any;
  buttonText?: React.ReactNode;
  ButtonIcon?: React.ComponentType<any>;
  dropdownList?: any[];
  buttonProps?: object;
  dropup?: boolean;
  dropdownHeader?: React.ReactNode;
  rtlActive?: boolean;
  caret?: boolean;
  dropPlacement?: any;
  noLiPadding?: boolean;
  innerDropDown?: boolean;
  navDropdown?: boolean;
  onClick?: (...args: any[]) => any;
}

interface IState {
  open: boolean;
}
class CustomDropdown extends React.Component<IProps, IState> {
  static defaultProps = {
    caret: true,
    dropup: false,
    hoverColor: 'primary'
  };

  private anchorRef: React.RefObject<HTMLButtonElement>;
  constructor(props: IProps) {
    super(props);
    this.state = {
      open: false
    };
    this.anchorRef = React.createRef();
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      this.anchorRef.current &&
      this.anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    this.setState({ open: false });
  };

  handleCloseMenu(param: any) {
    this.setState({ open: false });
    if (this.props && this.props.onClick) {
      this.props.onClick(param);
    }
  }
  render() {
    const { open } = this.state;
    const {
      classes,
      buttonText,
      ButtonIcon,
      dropdownList,
      buttonProps,
      dropup,
      dropdownHeader,
      caret,
      hoverColor,
      dropPlacement,
      rtlActive,
      noLiPadding,
      innerDropDown,
      navDropdown
    } = this.props;
    const caretClasses = classNames({
      [classes.caret]: true,
      [classes.caretDropup]: dropup && !open,
      [classes.caretActive]: open && !dropup,
      [classes.caretRTL]: rtlActive
    });
    const dropdownItem = classNames({
      [classes.dropdownItem]: true,
      [classes[hoverColor + 'Hover']]: true,
      [classes.noLiPadding]: noLiPadding,
      [classes.dropdownItemRTL]: rtlActive
    });
    const dropDownMenu = (
      <MenuList role="menu" className={classes.menuList}>
        {dropdownHeader !== undefined ? (
          <MenuItem
            onClick={() => this.handleCloseMenu(dropdownHeader)}
            className={classes.dropdownHeader}
          >
            {dropdownHeader}
          </MenuItem>
        ) : null}
        {dropdownList !== undefined
          ? dropdownList.map((prop, key) => {
              if (prop.divider) {
                return (
                  <Divider
                    key={key}
                    onClick={() => this.handleCloseMenu('divider')}
                    className={classes.dropdownDividerItem}
                  />
                );
              } else if (
                prop.props !== undefined &&
                prop.props['data-ref'] === 'multi'
              ) {
                return (
                  <MenuItem
                    key={key}
                    className={dropdownItem}
                    style={{ overflow: 'visible', padding: 0 }}
                  >
                    {prop}
                  </MenuItem>
                );
              }
              return (
                <MenuItem
                  key={key}
                  onClick={() => this.handleCloseMenu(prop)}
                  className={dropdownItem}
                >
                  {prop}
                </MenuItem>
              );
            })
          : null}
      </MenuList>
    );
    return (
      <div className={innerDropDown ? classes.innerManager : classes.manager}>
        <div className={buttonText !== undefined ? '' : classes.target}>
          <Button
            color="primary"
            size="lg"
            ref={this.anchorRef}
            {...buttonProps}
            onClick={this.handleClick}
          >
            {ButtonIcon !== undefined ? (
              <ButtonIcon className={classes.buttonIcon} />
            ) : null}
            {buttonText !== undefined ? buttonText : null}
            {caret ? <b className={caretClasses} /> : null}
          </Button>
        </div>
        <Popper
          open={open}
          anchorEl={this.anchorRef.current}
          transition
          disablePortal
          placement={dropPlacement}
          className={classNames({
            [classes.popperClose]: !open,
            [classes.pooperResponsive]: true,
            [classes.pooperNav]: open && navDropdown
          })}
        >
          {() => (
            <Grow
              in={open}
              style={
                dropup
                  ? { transformOrigin: '0 100% 0' }
                  : { transformOrigin: '0 0 0' }
              }
            >
              <Paper className={classes.dropdown}>
                {innerDropDown ? (
                  dropDownMenu
                ) : (
                  <ClickAwayListener onClickAway={this.handleClose}>
                    {dropDownMenu}
                  </ClickAwayListener>
                )}
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

export default withStyles(customDropdownStyle as any)(CustomDropdown);

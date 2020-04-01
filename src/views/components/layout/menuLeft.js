import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import routes from "@states/routes";


const MenuLink = ({
  label,
  to,
  activeOnlyWhenExact,
  childs,
  iconImage,
}) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className="menu-list__item">
            <Link to={to} className={`menu-list__link ${active}`}>
            <div className="img">
            <img src={iconImage[0]} alt="" className="icon__cover"/>
            <img src={iconImage[1]} alt="" className="icon__hover"/>
             </div>
              {label}
            </Link>
            {childs ? (
              <ul className="dropdown-list">
                {
                  childs.map((item, index) => {
                    return <Route
                    key={index}
                    path={to}
                    exact={activeOnlyWhenExact}
                    children={({history }) => {
                      var activeDropdown = `${to}/${item.path}` ===  history.location.pathname ? "active" : "";
                      return (
                        <li className="dropdown-list__item" key={index}>
                          <Link
                            to={`${to}/${item.path}`}
                            className={`dropdown-list__link ${activeDropdown}`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    }}/>
                  })
                })}
              </ul>
            ) : (
              ""
            )
          }
          </li>
        );
      }}
    />
  );
};
class HeaderLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false,
    };
  }
  componentDidMount(){
    $("body").on("click", ".menu-list__item:has(.dropdown-list) .menu-list__link", function(e){
      e.preventDefault();
      $(this).parent().find(".dropdown-list").slideToggle();
    });
    $("body").on("click", ".menu-list__link", function(){
      $(this).parent().siblings().find(".dropdown-list").slideUp();
    })
  }
  showMenu = menus => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.path}
            activeOnlyWhenExact={menu.exact}
            iconImage={menu.iconImage}
            childs={menu.childs}
            item={menu}
          />
        );
      });
    }
    return result;
  };
  toggleMenu = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  };
  render() {
    const { toggleMenu } = this.state;
    return (
        <div className="main-left">
        <div className="logo">
          <Link to="/" className="link"><img src="static/images/logo.gif" alt="" /></Link>
          <span className="show__menu" onClick={this.toggleMenu}><i className="fas fa-bars" /></span>
        </div>
        <div className={`menu ${toggleMenu ? "active" : ""}`}>
          <span className="close__menu" onClick={this.toggleMenu}><i className="fas fa-times" /></span>
          <div className="menu-list">
            {this.showMenu(routes)}
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderLeft;

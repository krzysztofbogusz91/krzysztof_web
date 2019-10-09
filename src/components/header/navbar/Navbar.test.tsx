import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should toggle show menu state', () => {
  const navbarInstance = create(<Navbar/>);
  const nav: any = navbarInstance.getInstance();
  expect(nav.state.showMenu).toBeFalsy();
  nav.toggleShowMenu();
  expect(nav.state.showMenu).toBeTruthy();
});
it('should toggle hide menu state', () => {
  const navbarInstance = create(<Navbar/>);
  const nav: any = navbarInstance.getInstance();
  nav.state.showMenu = true;

  expect(nav.state.hideMenu).toBeFalsy();
  nav.toggleHideMenu();
  expect(nav.state.hideMenu).toBeTruthy();
});

it('should call toggle menu when show menu is truthy', () => {
  const navbarInstance = create(<Navbar/>);
  const nav: any = navbarInstance.getInstance();
  const spy = spyOn(nav, 'toggleHideMenu')
  nav.state.showMenu = true;
  nav.toggleShowMenu();
  
  expect(spy).toHaveBeenCalledTimes(1);
});

it('should not to change state when toggle hide menu', () => {
  const navbarInstance = create(<Navbar/>);
  const nav: any = navbarInstance.getInstance();
  nav.state.showMenu = false;
  nav.state.hideMenu = true;

  nav.toggleHideMenu();
  expect(nav.state.hideMenu).toBeTruthy();
});
/* @noflow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  Link,
  AnimatedHeader,
} from 'react-router-native';

import styles from '../styles';

const HomeSwitcher = () => (
  <View style={[styles.switcher, styles.homeSwitcher]}>
    <Link
      to="/home/user"
      style={styles.switcherLink}
      activeStyle={styles.switcherLinkActive}
      underlayColor="transparent"
    >
      <View style={[styles.switcherTabLinkTextWrapper]}><Text>User</Text></View>
    </Link>
    <Link
      to="/home/following"
      style={styles.switcherLink}
      activeStyle={styles.switcherLinkActive}
      underlayColor="transparent"
    >
      <View style={[styles.switcherTabLinkTextWrapper]}><Text>Following</Text></View>
    </Link>
    <Link
      to="/home/following-bar"
      style={styles.switcherLink}
      activeStyle={styles.switcherLinkActive}
      underlayColor="transparent"
    >
      <View style={[styles.switcherTabLinkTextWrapper]}><Text>Bar</Text></View>
    </Link>
  </View>
);

export default class Header extends Component {
  static contextTypes = {
    showMenu: PropTypes.func,
  };

  componentWillMount() {
    this.handlePress = this.handlePress.bind(this);
    this.renderMenuComponent = this.renderMenuComponent.bind(this);
    this.renderSwitcherComponent = this.renderSwitcherComponent.bind(this);
  }

  handlePress() {
    this.context.showMenu();
  }

  renderMenuComponent() {
    return (
      <TouchableHighlight
        style={styles.hamburgerButton}
        onPress={this.handlePress}
        underlayColor="transparent"
      >
        <Text style={styles.hamburgerButtonText}>☰</Text>
      </TouchableHighlight>
    );
  }

  renderSwitcherComponent() {
    return (
      <HomeSwitcher />
    );
  }

  render() {
    return (
      <AnimatedHeader
        style={styles.homeHeader}
        {...this.props}
        renderLeftComponent={this.renderMenuComponent}
        renderTitleComponent={this.renderSwitcherComponent}
      />
    );
  }
}

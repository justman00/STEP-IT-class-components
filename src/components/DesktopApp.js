import React, { Component } from 'react';

export default class DesktopApp extends Component {
  componentDidMount() {
    console.log('sunt pe desktop');
  }

  componentWillUnmount() {
    console.log('am fost scos - desktop');
  }

  render() {
    return <div>desktop app</div>;
  }
}

import React, { Component } from 'react';

export default class MobileApp extends Component {
  componentDidMount() {
    console.log('sunt pe mobile');
  }

  componentWillUnmount() {
    console.log('am fost scos - mobile');
  }

  render() {
    return <div>mobile app</div>;
  }
}

// 1. sunt pe desktop
// 2. am fost scos - desktop
// 3. sunt pe mobile - 400px
// 4. am fost scos - mobile
// 5. sunt pe desktop
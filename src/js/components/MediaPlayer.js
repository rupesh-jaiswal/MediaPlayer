// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';



class MediaPlayer extends Component {
  constructor () {
    super();
    this._onResponsive = this._onResponsive.bind(this);
  }

  _onResponsive (responsive) {
    //this.props.dispatch(navResponsive(responsive));
  }

  render() {
    return (
      <App centered={false}>
        <Article>
          <Section pad='large'
            justify='center'
            align='center' colorIndex='grey-4'>
            <Headline margin='none'>
              Media Player
            </Headline>
          </Section>
        </Article>
      </App>
    );
  }
}

let select = (state) => ({});

export default connect(select)(MediaPlayer);

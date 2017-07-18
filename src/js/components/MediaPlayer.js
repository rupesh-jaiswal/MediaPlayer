// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';



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
          <Box align='center'>
            <object>
                <param name="movie" value="http://www.youtube.com/v/ZuNNhOEzJGA&hl=fr&fs=1&rel=0&color1=0x006699&color2=0x54abd6&border=1"></param>
                <embed src="http://www.youtube.com/v/ZuNNhOEzJGA&hl=fr&fs=1&rel=0&color1=0x006699&color2=0x54abd6&border=1" type="application/x-shockwave-flash" allowfullscreen="true" width="425" height="349"></embed>
            </object>
            <Box colorIndex='grey-4' size='large'>
              <div width='425' height='349'>
              Controls
              </div>
            </Box>
          </Box>
        </Article>
      </App>
    );
  }
}

let select = (state) => ({});

export default connect(select)(MediaPlayer);

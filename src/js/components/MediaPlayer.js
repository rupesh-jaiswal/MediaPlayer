// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CaretNextIcon from 'grommet/components/icons/base/CaretNext';
import CaretPreviousIcon from 'grommet/components/icons/base/CaretPrevious';
import AddIcon from 'grommet/components/icons/base/Add';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';

class MediaPlayer extends Component {
  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this._onResponsive = this._onResponsive.bind(this);
    this._onAddUrl = this._onAddUrl.bind(this);
    this.state={};
  }

  _onAddUrl(event) {
    //this.setState({addVideo:event.currentTarget.value});
    //this.props.dispatch(addVideoURL(this.state.addVideo));
  }
  _onResponsive (responsive) {
    //this.props.dispatch(navResponsive(responsive));
  }

  _onChange(event) {
    this.setState({addVideo:event.currentTarget.value});
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
            <iframe width="560" height="315" src={this.state.addVideo} ></iframe>
            <Box colorIndex='grey-4' size='large'>
              <div width='425' height='349'>
                Controls
                <Menu direction='row' size='large'>
                  <Button icon={<CaretPreviousIcon />} primary={true} plain={true} />
                  <Button icon={<CaretNextIcon />} plain={true}/>
                  <Menu responsive={true}
                    primary={false}
                    inline={false}
                    icon={<AddIcon />}
                    closeOnClick={false}>
                    <FormField >
                      <TextInput id='addVideo'
                        name='addVideo'
                        placeHolder='Enter video url'
                        onDOMChange={this._onChange} />
                    </FormField>
                    <Button icon={<AddIcon />} primary={true} label="Add to Playlist" onClick={this._onAddUrl}/>
                  </Menu>
                </Menu>
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

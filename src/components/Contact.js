import React from 'react';
import {Card, Icon} from 'semantic-ui-react';

const Contact = () => {
  return(
    <div className='main-content'>
      <div className='ui center aligned container'>
        <h1>Contact Me</h1>
        <Card centered>
          <Card.Content>
            <Icon name='mail' /> jgabaja@gmail.com
          </Card.Content>
          <Card.Content>
            <Icon name='facebook' /> <a href='http://www.facebook.com/jgabaja' target='_blank' rel='noopener noreferrer'>@jgabaja</a>
          </Card.Content>
          <Card.Content>
            <Icon name='twitter' /> <a href='https://www.twitter.com/jmsgbrl__' target='_blank' rel='noreferrer noopener'>@jmsgbrl__</a> 
          </Card.Content>
          <Card.Content>
            <Icon name='instagram' /> <a href='https://www.instagram.com/jmsgbrl__'target='_blank' rel='noreferrer noopener'>@jmsgbrl__</a>
          </Card.Content>
          <Card.Content>
            <Icon name='github' /> <a href='https://www.github.com/jamesabaja'target='_blank' rel='noreferrer noopener'>@jamesabaja</a>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
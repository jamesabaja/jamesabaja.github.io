import React from 'react';
import { Message } from 'semantic-ui-react';

const Projects = () => {
  return(
    <div className='main-content'>
      <div className='ui center aligned container'>
        <h1>Projects</h1>
      </div>
      <Message
	    header='Work In Progress'
	    content='This site is still a WIP! Please bear with me. :)'
	    success
	    size='small'
	  />
    </div>
  );
};

export default Projects;
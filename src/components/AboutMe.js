import React from 'react';
import self from '../assets/images/self.jpg';
import android from '../assets/images/android.png';
import css from '../assets/images/css.png';
import django from '../assets/images/django.png';
import html from '../assets/images/html.png';
import java from '../assets/images/java.png';
import javascript from '../assets/images/javascript.png';
import python from '../assets/images/python.png';
import react from '../assets/images/react.png';
import ieclub from '../assets/images/ieclub.png';
import cursor from '../assets/images/cursor.png';
import capes from '../assets/images/capes.png';
import james_iec from '../assets/images/james_iec_dp.jpg';
import james_cursor from '../assets/images/james_cursor_dp.jpg';
import james_capes from '../assets/images/james_capes_dp.png';
import {Button, Header, Modal, Image, Popup, Icon} from 'semantic-ui-react';

const AboutMe = () => {
  return(
    <div className='main-content'>
      <img src={self} className='ui small centered circular image' alt="james"/>
      <div class='ui hidden divider' />
      <div className='ui center aligned container'>
        <h2>I design and develop websites.</h2>
        <p className='bigPadding centered larger'>I became exposed to the world of the web and software development seven years ago, and from then on I never stopped moving forward. From my first 'Hello World!' page rendered using simple HTML, it quickly grew into a passion and it became a big influence why I chose Computer Science for my career path.</p>
        <p className='bigPadding centered larger'>I've worked on projects using different languages and frameworks, but recently, I've worked on a project using Django (back-end) and React (front-end) which became my main weapons in full stack development.</p>
        <h2>Languages, tools, and frameworks I love to use</h2>
        <Image.Group size='tiny'>
        	<Popup trigger={<img src={html} className='ui centered image' alt="html"/>} content='HTML' />
        	<Popup trigger={<img src={css} className='ui centered image' alt="css"/>} content='CSS' />
        	<Popup trigger={<img src={javascript} className='ui centered image' alt="javascript"/>} content='JavaScript' />
        	<Popup trigger={<img src={react} className='ui centered image' alt="react"/>} content='React' />
        	<Popup trigger={<img src={python} className='ui centered image' alt="python"/>} content='Python' />
        	{/*<Popup trigger={<img src={java} className='ui centered image' alt="java"/>} content='Java' />*/}
        	{/*<Popup trigger={<img src={django} className='ui centered image' alt="django"/>} content='Django' />*/}
        	<Popup trigger={<img src={android} className='ui centered image' alt="android"/>} content='Android Development (Android Studio)' />
        </Image.Group>
      </div>
      <div class='ui hidden divider' />
      <div className='ui center aligned container'>
        <h2>Organizations</h2>
      </div>
      <div class='ui hidden divider' />
      <div className='ui center aligned container'>
      <Image.Group size='small'>
        <Modal dimmer='blurring' trigger={<img src={cursor} className='ui image image-zoom padded' alt='cursor'/>} closeIcon>
          <Modal.Header>UP CURSOR <h4>UP Association of Computer Science Majors</h4></Modal.Header>
          <Modal.Content image> 
            <Image wrapped size='massive' src={james_cursor} />
            <Modal.Description>
              <Header>#CURSORSexy</Header>
              <p>Being part of the External Affairs Committee ever since I became a member, CURSOR has offered me a lot of new learnings, experiences, and opportunities. I met people who have the same love and passion for Computer Science, CS and non-CS alike. But of course, I met committed and passionate people working towards a common goal.</p>
              <Header>Why UP CURSOR?</Header>
              <p>CURSOR is my first org. It saw my growth as a person, and in turn, I saw its growth as an org, too. It offered me a lot of opportunities where I can express myself, my love and passion for CS and non-CS stuff like in Awitan and in Volleybagan, well in Engg Week in general. But more than that, somehow, I found a home in CURSOR. It made me appreciate my stay in UP and DCS, making me realize I have a lot to see and experience with CURSOR, other than the four walls of the classroom.</p>
              <Modal trigger={<Button>CURSOR App? Click here.</Button>} closeIcon>
              <Modal.Header>CURSOR Sig Reqs</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Header>Main Sig Reqs</Header>
                  <p><b><i>FIRST SIG:</i></b> Add me on <a href='https://www.facebook.com/jgabaja' target='_blank' rel='noreferrer noopener'>Facebook</a>, and follow me on <a href='https://www.twitter.com/jmsgbrl__' target='_blank' rel='noreferrer noopener'>Twitter (@jmsgbrl__)</a> and <a href='https://www.instagram.com/jmsgbrl__'target='_blank' rel='noreferrer noopener'>Instagram (@jmsgbrl__)</a> (not required if you don't have Twitter/IG, just add me on FB at the very least)</p>
                  <p><b><i>SECOND SIG:</i></b> Just chat with me at the tambayan, and if I feel that I've gotten to know you and the other way around, I'll give this sig. <br/><b>NOTE: Only at the tambayan!!</b></p>
                  <p><b><i>THIRD SIG:</i></b> M I S S I O N :) + Get the (first) sig of the following people: Luis, Tine, Micah, Nathan. </p>
                  <Header>Free Sigs</Header>
                  <p><i>Valid for my second and third sig only!!</i></p>
                  <p><i>(1 sig)</i> Ask for my sig if you see me in the tambayan of my other org.</p> 
                  <p><i>(1 sig)</i> Guess my thesis lab in one try. You can't ask others!! Just guess :)</p>
                  <Header>Availability</Header>
                  <p><b><i>MONDAY</i></b> 11:00 AM - 5:00 PM, <i>Thesis Lab</i></p>
                  <p><b><i>TUESDAY/THURSDAY</i></b> 11:30 AM - 1:00 PM, 2:30 PM - 4:00 PM, <i>Tambayan</i> (If I'm not there, then I'm at my other tambayan. EZ free sig)</p>
                  <p><b><i>WEDNESDAY</i></b> 12:30 PM - 2:30 PM, 4:00 PM onwards, <i>Tambayan</i></p> 
                  <p><b><i>FRIDAY</i></b>4:00 PM onwards, <i>Tambayan</i></p>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <Modal dimmer='blurring' trigger={<img src={capes} className='ui image image-zoom padded' alt='capes'/>} closeIcon>
          <Modal.Header>UP CAPES <h4>UP Career Assistance Program for Engineering Students</h4></Modal.Header>
          <Modal.Content image>
            <Image wrapped size='large' src={james_capes} />
            <Modal.Description>
              <p>UP CAPES gave me an amazing opportunity in serving the College in a whole different perspective. As a project manager and back-end developer for the Online Student Services Team, I contribute in ways where I really enjoy what I do and at the same time people benefit from the services we provide.</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <Modal dimmer='blurring' trigger={<img src={ieclub} className='ui image image-zoom padded' alt='ieclub'/>} closeIcon>
          <Modal.Header>UP IE Club <h4>UP Industrial Engineering Club</h4></Modal.Header>
          <Modal.Content image>
            <Image wrapped src={james_iec} />
            <Modal.Description>
              <Header>#IEClubWin</Header>
              <p>You might be wondering, what's a CS student doing in an IE org (other than the fact that it's actually a University-wide org)? Quite a long story but to give you a gist, I joined IE Club because I want to widen my knowledge in the IE field, and at the same time get to know more people not just in the IE field. And I thought, IE Club is the perfect org for that. I actually got rejected the first time I applied, but got accepted the second time around. I think it was really a good decision for me to not give up when I got rejected because when I became a Clubber, it made me love IE Club even more. This was one of the most unexpected and spontaneous decisions I had done in College, and I have never regretted that decision to make IE Club a part of my life.</p>
              <Header>Why UP IE Club</Header>
              <p>IE Club wasn't meant to be part of my life, but I'm sure glad it was. IE Club opened my eyes in a lot of things, and it really sparked my interest for IE. IE Club made me bring out the best version of me. I know, very cheesy, but true. I met a lot of new people and experienced a lot of new things, and everyday with IE Club felt like a whole new journey.</p> 
              <Modal trigger={<Button>IE Club App? Click here.</Button>} closeIcon>
              <Modal.Header>IE Club Sig Tasks</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <Header>DO BOTH:</Header>
                  <p><b><i>FIRST TASK:</i></b> Add me on <a href='https://www.facebook.com/jgabaja' target='_blank' rel='noreferrer noopener'>Facebook</a>, and follow me on <a href='https://www.twitter.com/jmsgbrl__' target='_blank' rel='noreferrer noopener'>Twitter (@jmsgbrl__)</a> and <a href='https://www.instagram.com/jmsgbrl__'target='_blank' rel='noreferrer noopener'>Instagram (@jmsgbrl__)</a> (not required if you don't have Twitter/IG, just add me on FB at the very least)</p>
                  <p><b><i>SECOND TASK:</i></b> Just chat with me at the tambayan, and if I feel that I've gotten to know you and the other way around, I'll sign your sigsheet the next time we meet (to make sure I really remember you!!) <br/><b>NOTE: Only at the tambayan!!</b></p>
                  <br/>
                  <p><i><b>I'll sign your sigsheet immediately if you're from CS, no need to do the tasks above :)</b></i></p>
                  <Header>Availability</Header>
                  <p><b><i>MONDAY</i></b> 11:00 AM - 5:00 PM, <i>Thesis Lab (4/F DCS aka Engg Lib 2)</i></p>
                  <p><b><i>TUESDAY/THURSDAY</i></b> 11:30 AM - 1:00 PM, 2:30 PM - 4:00 PM, <i>Tambayan</i> (If I'm not there, then I'm at my other tambayan.)</p>
                  <p><b><i>WEDNESDAY</i></b> 12:30 PM - 2:30 PM, 4:00 PM onwards, <i>Tambayan</i></p> 
                  <p><b><i>FRIDAY</i></b>4:00 PM onwards, <i>Tambayan</i></p>
                </Modal.Description>
              </Modal.Content>
            </Modal>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Image.Group>
      </div>
      <div class='ui hidden divider' />
      <div className='ui center aligned container'>
        <h2>Contact Me</h2>
        <h3><Icon name='mail'/> jgabaja@gmail.com</h3>
        <a href='http://www.facebook.com/jgabaja' target='_blank' rel='noopener noreferrer'>
        <Button circular size='large' color='facebook'>
        <Icon name='facebook'/> Facebook</Button></a>{' '}
        <a href='https://www.twitter.com/jmsgbrl__' target='_blank' rel='noreferrer noopener'>
        <Button circular size='large' color='twitter'>
        <Icon name='twitter'/> Twitter</Button></a>{' '}
        <a href='https://www.instagram.com/jmsgbrl__'target='_blank' rel='noreferrer noopener'>
        <Button circular size='large' color='instagram'>
        <Icon name='instagram'/> Instagram</Button></a>{' '}
        <a href='https://linkedin.com/in/jgabaja' target='_blank' rel='noreferrer noopener'>
        <Button circular size='large' color='linkedin'>
        <Icon name='linkedin'/> LinkedIn</Button></a>{' '}
        <a href='https://www.github.com/jamesabaja'target='_blank' rel='noreferrer noopener'>
        <Button circular size='large' color='github'>
        <Icon name='github'/> Github</Button></a>{' '}
      </div>
    </div>
  );
};

export default AboutMe;
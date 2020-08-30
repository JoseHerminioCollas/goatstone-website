import React, { useState, FormEvent, useEffect } from 'react';
import { Icon  } from '@fluentui/react/lib/Icon';
import { Modal, Label, TextField } from '@fluentui/react/lib/'
import { Button } from '@fluentui/react/lib/Button'
import logo from './art/goat-head.svg';
import axios from 'axios';

import { initializeIcons } from '@uifabric/icons';

const url = 'http://54.218.102.36:3000/message'

initializeIcons();
const mailTo = (name: string, message: string, email: string) => {
  axios({
    method: 'POST',
    url,
    params: {
      name,
      message,
      email
    },
  }
  )
  .then(function (response) {
     console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
}
const MailTo = () => {
  const text = {
    contactForm: {
      title: 'Please, send email to Goatstone',
      emailFrom: 'Your Email',
      message: 'Message',
      name: 'Name',
      send: 'Send'
    }
  }
  const [isValid, setIsValid] = useState(false)
  const [msg, setMsg] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const onNameChange = (
    ev: FormEvent<HTMLInputElement | HTMLTextAreaElement>, 
    newValue: (string | undefined) = ''
  ): void => {
    setName(newValue)
  }
  const onEmailChange = (
    ev: FormEvent<HTMLInputElement | HTMLTextAreaElement>, 
    newValue: (string | undefined) = ''
  ): void => {
    setEmail(newValue)
  }
  const onMessageChange = (
      ev: FormEvent<HTMLInputElement | HTMLTextAreaElement>, 
      newValue: (string | undefined) = ''
    ): void => {
      setMsg(newValue)
  }
  // validate the form
  useEffect(() => {
    setIsValid( (msg !== '' && email !== '' && name !== '') )
  }, [msg, email, name])
  // validate email
  const oGEM = (value: string): string => {
    return value.length > 3? '' : 'Valid email required'
  }

  return (
    <section className="mail-dialog">
      <h3>{text.contactForm.title}</h3>
      <input
        required
	type="email"
	name="email"
	placeholder="abc"
      />
      <TextField 
        label={text.contactForm.emailFrom}
        value={email}
        onChange={onEmailChange}
	onGetErrorMessage={oGEM}
	validateOnFocusOut
	validateOnLoad={false}
	required
        />
      <TextField 
        label={text.contactForm.name}
        value={name}
        onChange={onNameChange}
	required
        />
      <TextField
          label={text.contactForm.message}
          value={msg}
          multiline={true}
          onChange={onMessageChange}
	  required
      />
      <Button
        disabled={!isValid}
        onClick={() => mailTo(email, msg, name)}
      >
        {text.contactForm.send}
      </Button>
    </section>
  )
}

function App() {
  const [isVis, setIsVis] = useState(true)
  function hideModal() {
    setIsVis(false)
  }
  function showModal() {
    setIsVis(true)
  }
  return (
    <>
      <Modal
        titleAriaId=""
        isOpen={isVis}
        onDismiss={hideModal}
        isBlocking={false}
      >
        <MailTo />
      </Modal>
      <header>
        <h1>
          Goatstone <i>Web Development</i>
        </h1>
        <Icon
          iconName="Mail"
          className="fluent-icon" 
          onClick={showModal}
        />
        <img src={logo} className="logo" alt="logo" />
      </header>
      <article>
        <h3>Contact</h3>
        <p>
          info.5.2020@goatstone.com
          </p>
         <h5>
          Github
          </h5>
        <ul>
          <li>
            <a href="https://github.com/joseherminiocollas" target="new">
              github.com/joseherminiocollas
              </a>
          </li>
          <li>
            <a href="https://github.com/goatstone" target="new">github.com/goatstone</a>
          </li>
        </ul>
      </article>
      <article>
        <h3>Web Development</h3>
        <p>
          Goatstone is primarily but not exclusively, Jose Collas. Here you will find a collection of some of our
          work. Goatstone is involved in web development, primary using the technologies: JavaScipt, CSS, and HTML.
          I have been working with
            &nbsp;
            <a href="https://reactjs.org/" target="new">React </a>
            &nbsp;
            and
            &nbsp;
            <a href="https://d3js.org/" target="new">D3</a>
            &nbsp;
            lately.
        </p>
        <p>
          I have also been working with generating styles with JavaScript, D3 Interpolators, and JSS. I hope to work
          more with this strategy and see what more could be done with it.
        </p>
      </article>
      <article>
        <h3>
          MapLab
          &nbsp;
          <a href="https://map-lab-goatstone.appspot.com" target="new">https://map-lab-goatstone.appspot.com</a>
        </h3>
        <p>
          Experiments with mapping libraries:
          &nbsp;
          <a href="https://cloud.google.com/maps-platform/">
            Google
          </a>,
          &nbsp;
          <a href="https://leafletjs.com/">
          Leaflet
          </a> and
          &nbsp;
          <a href="https://www.bingmapsportal.com/">
          Bing
          </a>
          .
        </p>
      </article>
      <article>
        <h3>
          D3 Framework
          &nbsp;<a href="https://d3-frame.goatstone.com" target="new">https://d3-frame.goatstone.com</a>
        </h3>
        <p>
          <img src="img/d3-frame-1.png" className="right" width="250" height="160" alt="" />
          <img src="img/d3-frame-3.png" className="right" width="250" height="160" alt="" /> D3 and React
            Methodologies for using the D3 visualization library with React. I have been working with React
            ( reactjs.org ) and D3 ( d3js.org ) together, and I am documenting methodologies in a GitHub repository,
        </p>
      </article>
      <article>
        <h3>
          Minhooks
          &nbsp;
          <a href="https://github.com/JoseHerminioCollas/min-hooks" target="new">https://github.com/JoseHerminioCollas/min-hooks</a>
        </h3>
        <p>
          <img src="img/min-hooks.png" alt="" />
            Minhooks is an attempt to represent the React hooks API in a minimal but functional way. Ideally, this will
            provide a resource for future development.
            I have incorporated the work I have done in the Minhooks repository into the D3Frame repository.
        </p>
      </article>
      <article>
        <h3>
          Color Globe
          &nbsp;
          <a href="http://colorglobe.goatstone.com" target="new">http://colorglobe.goatstone.com</a>
        </h3>
        <p>
          <img src="img/globe.png" alt="" />
                Here the theming strategy using JSS and D3 interpolators are creating various themes for a map generated
                with the D3 Geo library.
        </p>
      </article>
      <article>
        <h3>
          Ameb, a game
          &nbsp;
          <a href="http://ameb.goatstone.com/" target="new">http://ameb.goatstone.com/</a>
        </h3>
        <p>
          <img src="img/ameb.png" alt="" />
              Ameb was an entry into the JS13kGames JavaScript competition. Ameb must eat food in order to accumulate
              health points and stay alive.
              The player of Ameb navigates the character, Ameb, to catch food.
        </p>
      </article>
      <article>
        <h3>
          AlphaCronke
          &nbsp;
          <a href="http://alphacronke.goatstone.com" target="new">http://alphacronke.goatstone.com</a>
        </h3>
        <p>
          <img src="img/alpha-cronke3.png" className="right" alt="" />
                 This example uses a great library D3js (d3js.org).
              "AlphaCronke" is the latest work with this library. The
              application consists of text from the story, Dickory Cronke by Daniel Defoe and a widget that enables the
              user to select words by alphabetical range.

              With this widget, the user can highlight the selected words in the text. D3js is the only library used.
        </p>
      </article>
      <footer>
        Goatstone &copy; 2020
    </footer>
    </>
  );
}

export default App;

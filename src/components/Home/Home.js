import React from 'react';
import Img from 'gatsby-image';

import './Home.scss';

const Home = ({ introImage }) => (
  <div className="Home">
    <div className="Home__left-col">
      <div className="Home__image">
        <Img fluid={introImage.childImageSharp.fluid} />
      </div>

      <div className="Home__links">
        <ul>
          <li>
            <a href="/">Github</a>
          </li>

          <li>
            <a href="/">LinkedIn</a>
          </li>

          <li>
            <a href="/">Resume</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="Home__right-col">
      <div className="Home__content">
        <h1>Hi, I'm Gray.</h1>

        <div className="Home__info">
          <p>
            I'm a Front-End Developer currently based out of Hanoi, Vietnam.
          </p>

          <p>
            I work at <a href="https://bletchley.co">Bletchley Park</a>, where I
            tend to write a lot of JavaScript. I also occasionally do freelance
            work, which inevitably leads to writing even more JavaScript.
          </p>

          <p>
            In my free time, I enjoy traveling (40+ countries visited so far),
            discovering new food, and accumulating more guitars than any one
            person can reasonably deal with.
          </p>

          <p>
            This little site is overengineered with{' '}
            <a href="https://www.gatsbyjs.org/">Gatsby</a>,{' '}
            <a href="https://reactjs.org/">React.js</a>,{' '}
            <a href="https://www.apollographql.com/">Apollo</a>, and{' '}
            <a href="https://graphql.org/">GraphQL</a>, and the source code is
            available{' '}
            <a href="https://github.com/grayontheweb/portfolio">here</a>.
          </p>

          <p>
            If you'd like to get in touch, please use the contact form below.
          </p>
        </div>

        <div className="Home__contact">
          <form className="Home__form">
            <h3>Get in touch:</h3>
            <div className="Home__form__row">
              <label htmlFor="subject">
                Subject
                <input name="subject" type="text" />
              </label>
            </div>

            <div className="Home__form__row">
              <label htmlFor="body">
                Body
                <textarea name="body" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

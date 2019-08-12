import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';

// TODO: get an image of the same dimension and use it here
// import image from './about-us-1056.jpg';
import image from '../../assets/limelightFacebook-1200x630.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage, siteTitle } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: `About ${siteTitle}`,
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>The Limelight Internet Showcase</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>The Limelight is a marketplace that connects talented entertainment service providers with those who are seeking someone with that skillset.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                There’s no need for word of mouth recommendations. We are creating a rolodex of professionals who are the best at what they do. What do you need done?
              </h2>

              <p>
                Being Paid in Experience / Exposure sucks. Let’s be real, experience is awesome, until you have to pay your bills with it. We are giving users a chance to make money, as they gain the valuable experience that will help to take their careers to the next level. Make your talent your full-time-job.
                Simply sign up at <ExternalLink href="https://www.limelightmusicmarketplace">www.limelightmusicmarketplace</ExternalLink>, and get to work today!!
              </p>
              <p>
                We are not only creating a pool of TOP talent, we are helping you connect to the right person for the job. Save time, money, and energy, by finding the right person for the job the first time. We have a rating system that will allow you to filter and search for the ideal local talent to make your next event or project that way that you want. Now, what can the Limelight do for you?
              </p>
              <h3 className={css.subtitle}>Are you under-appreciated talent?</h3>
              <p>
                The Limelight helps you to find the people who are looking for you. As an artist manager, I am often seeking entertainment talent(bg singer, producer, promoter, graphic designer, guitarist, bassist, drummer, keyboardist, dancer, host, DJ, production crew, lighting tech, sound engineer, A/V, videographer, photographer etc); we always have trouble finding the best talent. Sometimes there is no do-over.
                We built this, because sometimes there is no do-over; this is for the people who can help you get it done the right way, the first time. Welcome to The Limelight.
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;

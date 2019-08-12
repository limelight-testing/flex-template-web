import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ExternalLink } from '../../components';

import css from './TermsOfService.css';

const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: August 12, 2019</p>

      <h2>Limelight Terms of Service</h2>
      <p>
      Welcome to The Limelight Internet Showcase, LLC
      <br />
These terms and conditions outline the rules and regulations for the use of The Limelight Internet Showcase, LLC's Website.
The Limelight Internet Showcase, LLC is located at:
      </p>
      <p>
1474 Innes Avenue San Francisco 94124 - CA
      </p>
      <p>
      By accessing this website we assume you accept these terms and conditions in full. Do not continue to use The Limelight Internet Showcase, LLC's website
if you do not accept all of the terms and conditions stated on this page.
The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice
and any or all Agreements: "Client", "You" and "Your" refers to you, the person accessing this website
and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers
to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client
or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake
the process of our assistance to the Client in the most appropriate manner, whether by formal meetings
of a fixed duration, or any other means, for the express purpose of meeting the Client's needs in respect
of provision of the Company's stated services/products, in accordance with and subject to, prevailing law
of . Any use of the above terminology or other words in the singular, plural,
capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>

      <h2>Cookies</h2>
      <p>
We employ the use of cookies. By using The Limelight Internet Showcase, LLC's website you consent to the use of cookies
in accordance with The Limelight Internet Showcase, LLC's privacy policy.Most of the modern day interactive web sites
use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site
to enable the functionality of this area and ease of use for those people visiting. Some of our
affiliate / advertising partners may also use cookies.
      </p>

      <h2>License</h2>
      <p>
Unless otherwise stated, The Limelight Internet Showcase, LLC and/or it's licensors own the intellectual property rights for
all material on The Limelight Internet Showcase, LLC. All intellectual property rights are reserved. You may view and/or print
pages from <ExternalLink href="https://www.limelightmusicmarketplace.com/">https://www.limelightmusicmarketplace.com</ExternalLink> for your own personal use subject to restrictions set in these terms and conditions.
You must not:
      </p>
<ul className={css.list}>
  <li>Republish material from <ExternalLink href="https://www.limelightmusicmarketplace.com/">https://www.limelightmusicmarketplace.com</ExternalLink></li>
<li>Sell, rent or sub-license material from <ExternalLink href="https://www.limelightmusicmarketplace.com/">https://www.limelightmusicmarketplace.com</ExternalLink></li>
<li>Reproduce, duplicate or copy material from <ExternalLink href="https://www.limelightmusicmarketplace.com/">https://www.limelightmusicmarketplace.com</ExternalLink></li>
<li>Redistribute content from The Limelight Internet Showcase, LLC (unless content is specifically made for redistribution).</li>
</ul>

      <h2>Hyperlinking to our Content</h2>

<p>The following organizations may link to our Web site without prior written approval:</p>

<ul className={css.list}>
  <li>Government agencies;</li>
  <li>Search engines;</li>
  <li>News organizations;</li>
</ul>

<p>
Online directory distributors when they list us in the directory may link to our Web site in the same
manner as they hyperlink to the Web sites of other listed businesses; and
Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls,
and charity fundraising groups which may not hyperlink to our Web site.
These organizations may link to our home page, to publications or to other Web site information so long
as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or
approval of the linking party and its products or services; and (c) fits within the context of the linking
party's site.
</p>

<p>We may consider and approve in our sole discretion other link requests from the following types of organizations:</p>
<ul className={css.list}>
  <li>commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile Association, AARP and Consumers Union;</li>
  <li>dot.com community sites;</li>
  <li>associations or other groups representing charities, including charity giving sites, online directory distributors;</li>
  <li>internet portals;</li>
  <li>accounting, law and consulting firms whose primary clients are businesses; and</li>
  <li>educational institutions and trade associations.</li>
</ul>

<p>
We will approve link requests from these organizations if we determine that: (a) the link would not reflect
unfavorably on us or our accredited businesses (for example, trade associations or other organizations
representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed
to link); (b)the organization does not have an unsatisfactory record with us; (c) the benefit to us from
the visibility associated with the hyperlink outweighs the absence of ; and (d) where the
link is in the context of general resource information or is otherwise consistent with editorial content
in a newsletter or similar product furthering the mission of the organization.</p>

<p>
These organizations may link to our home page, to publications or to other Web site information so long as
the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval
of the linking party and it products or services; and (c) fits within the context of the linking party's
site.</p>

<p>
If you are among the organizations listed in paragraph 2 above and are interested in linking to our website,
you must notify us by sending an e-mail to <ExternalLink href="mailto:corp@tllis.net">corp@tllis.net</ExternalLink>.
Please include your name, your organization name, contact information (such as a phone number and/or e-mail
address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site,
and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.</p>

<p>Approved organizations may hyperlink to our Web site as follows:</p>

<ul className={css.list}>
  <li>By use of our corporate name; or</li>
  <li>By use of the uniform resource locator (Web address) being linked to; or</li>
  <li>By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party's site.</li>
</ul>

<p>No use of The Limelight Internet Showcase, LLC's logo or other artwork will be allowed for linking absent a trademark license
agreement.</p>
    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;

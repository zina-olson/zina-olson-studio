import React from 'react';

export class Resume extends React.Component {
  public render() {
    const titleStyles: string = [
      'text-lg',
      'pb-6',
      'font-semibold',
      'pt-6'
    ].join(' ');
    const listStyles: string = [
      'font-normal',
      'list-disc',
      'pl-6',
      'pb-6'
    ].join(' ');
    const pStyles: string = ['font-normal', 'list-disc', 'pb-6'].join(' ');
    return (
      <div className="sm:w-1/2 ml-auto mr-auto">
        <header className="text-center">
          <p className="text-2xl font-mono font-semibold pb-12">
            Software / QA Automation Engineer
          </p>
        </header>
        <h3 className={titleStyles}>Professional Summary</h3>
        <p className={pStyles}>
          Experienced Software Quality Assurance Engineer with 5+ years of
          experience in Manual and Automation testing for web, client/server,
          cloud based and mobile applications. Extensive knowledge of functional
          and non-functional testing, SDLC, STLC, software methodologies such as
          Agile, Scrum, and Waterfall. Solid knowledge of testing tools such as
          Selenium WebDriver, Postman API, Swagger, Lighthouse, GT Metrix,
          SpeedLab, Git, Jira, PSQL, Python and JavaScript.
        </p>

        <h3 className={titleStyles}>Experience</h3>
        <h4 className={pStyles}>
          Implementation Engineer at Iodine Software | May 2021 - May 2022
        </h4>
        <ul className={listStyles}>
          <li>
            Functional and non-functional testing, bug reporting through Jira.
          </li>
          <li>
            Deployed a newly integrated solution as part of the beta testing
            team.
          </li>
          <li>
            Implementation track responsibilities: Site-to-site VPN and
            interfaces connectivity testing, data validation and analysis,
            application deployments, setting up sFTP sites, setting up Azure
            SAML and LDAP authentications, contributing to documentation
            improvemen
          </li>
          <li>
            Project Management responsibilities: data availability discoveries,
            analyzing and proposing project scope and timeline; presenting the
            proposed deliverables to the stakeholders.
          </li>
          <li>Troubleshooting support for client success and support teams.</li>
          <li>
            Leading cross-functional teams to achieve project goals and
            objectives within the agreed upon scope, timelines and budget.
            Tracked projects in Smartsheet.
          </li>
          <li>
            Completed three projects starting at $1.3M each. Led 7 smaller scale
            ad-hoc projects.
          </li>
        </ul>
        <h4 className={pStyles}>
          Technical Account Manager at Yardi Systems | Aug 2017 - May 2021
        </h4>
        <ul className={listStyles}>
          <li>
            Evaluated client reports and drove communication with Development
            teams to confirm bug fixes and potential functional enhancements in
            upcoming releases.
          </li>
          <li>
            Wrote SQL scripts, product customizations, modified reports, tracked
            projects in CRM.
          </li>
          <li>
            Collaborated with a team of 5 on manual testing product
            compatibility with third-party SSO systems such as Okta,
            connectivity, and functionality testing of new products.
          </li>
          <li>
            Produced over 47 documentations and traceability matrices for
            positive, negative and AdHoc functional bugs and delivered 100+
            HotFix requests or workarounds to clients.
          </li>
        </ul>
        <h3 className={titleStyles}>Skills and Interests</h3>
        <ul className=" text-base">
          Selenium WebDriver, Postman API, Swagger, Lighthouse, GT Metrix,
          SpeedLab, Python, JavaScript, XPath, XML, HTML5, CSS3, JSON, PyCharm,
          WebStorm, VScode, Regex, Postgresql, Mozilla Observatory, Agile,
          Scrum, Waterfall, GitHub, Git, Jira, Confluence, CRM, Windows, iOS,
          Android, Netlify, Tailwindcss.
        </ul>
        <p className="pb-4"></p>
        <h3 className={titleStyles}>Education</h3>
        <p>
          Bachelor of Science in Computer Science, Texas State University. Aug
          2014 - Dec 2016
        </p>
        <p>
          Master of Engineering Technical Management, Texas A&M University. Aug
          2019 - May 2021
        </p>
        <p>
          QA Automation Engineer Course at Silicon Valley, CA, QAVS.US April
          2022-Present
        </p>
        <p className="pb-4"></p>
        <p className="font-normal"></p>
      </div>
    );
  }
}

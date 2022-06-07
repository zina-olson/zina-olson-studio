import React from 'react';
import { ContentPane } from '../components/ContentPane';

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
      <ContentPane>
        <header className="text-center">
          <p className="text-2xl font-mono font-semibold pb-12">
            Software / QA Automation Engineer
          </p>
        </header>
        <h3 className={titleStyles}>Professional Summary</h3>
        <p className={pStyles}>
          Software Quality Assurance Engineer with 5+ years of experience in
          Manual and Automation testing for web, client/server, cloud-based and
          mobile applications. Experienced in functional and non-functional
          testing, SDLC, STLC, and software testing methodologies such as Agile,
          Scrum, and Waterfall. Success-driven team player seeking to help teams
          automate testing and build strong, long-term relationships.
        </p>

        <h3 className={titleStyles}>Experience</h3>
        <h4 className={pStyles}>
          Quality Assurance Engineer at FindSkills.Inc | January 2016 - Present
        </h4>
        <ul className={listStyles}>
          <li>
            Responsible for building the Automation and Manual front-end
            cross-browser testing with Selenium WebDriver Python UnitTest.
          </li>
          <li>
            Creating Automation REST API testing with Postman JavaScript,
            Swagger, and Chrome/Firefox Dev tools.
          </li>
          <li>
            Executing Black/Gray/White Box, Functional Ad-Hoc, Unit Smoke, UI/UX
            end-to-end testing.
          </li>
          <li>
            Working with other QA Engineers and Developers to ensure all the
            aspects of the application have proper testing coverage and overall
            system reliability, performance, and quality.
          </li>
          <li>Performing peer code reviews in GitHub repository.</li>
          <li>
            Participating in daily scrum meetings with Agile team members via
            Zoom and Slack.
          </li>
          <li>
            Building QA testing documentation such as test scenarios,
            traceability matrices, test cases, and reports in Jira and
            Confluence.
          </li>
        </ul>
        <h4 className={pStyles}>
          Implementation Engineer at Iodine Software | May 2021 - May 2022
        </h4>
        <ul className={listStyles}>
          <li>
            Functional and non-functional testing and bug reporting through
            Jira.
          </li>
          <li>
            Deployed a newly integrated solution as part of the beta testing
            team. Implementation track responsibilities: Site-to-site VPN and
            interfaces connectivity testing, data validation and analysis,
            application deployments, setting up sFTP sites, setting up Azure
            SAML and LDAP authentications, and contributing to documentation
            improvement.
          </li>
          <li>Troubleshooting support for client success and support teams.</li>
          <li>
            Project Management responsibilities: data availability discoveries,
            analyzing and proposing project scope and timeline, and presenting
            the proposed deliverables to the stakeholders. Leading
            cross-functional teams to achieve project goals and objectives
            within the agreed-upon scope, timelines, and budget. Tracked
            projects in Smartsheet.
          </li>
          <li>
            Completed three projects starting at $1.3M each. Led seven
            smaller-scale ad-hoc projects.
          </li>
        </ul>
        <h4 className={pStyles}>
          Technical Account Manager at Yardi Systems | Aug 2017 - May 2021
        </h4>
        <ul className={listStyles}>
          <li>
            Evaluated client reports and communicated with Development teams to
            confirm bug fixes and potential functional enhancements in upcoming
            releases.
          </li>
          <li>
            Wrote SQL scripts, product customizations, modified reports, and
            tracked projects in CRM.
          </li>
          <li>
            Collaborated with a team of 5 on manual testing product
            compatibility with third-party SSO systems such as Okta,
            connectivity, and functionality testing of new products.
          </li>
          <li>
            Completed extensive manual functional testing for the PayScan Mobile
            app.
          </li>
          <li>
            Produced over 47 documentation and traceability matrices for
            positive, negative, and AdHoc functional bugs and delivered 100+
            HotFix requests or workarounds to clients.
          </li>
        </ul>
        <h3 className={titleStyles}>Skills and Interests</h3>
        <ul className=" text-base">
          Selenium WebDriver, Selenium IDE, Postman API, Swagger, Lighthouse, GT
          Metrix, SpeedLab, Python, JavaScript, SQL, XPath, XML, HTML5, CSS3,
          JSON, Agile, Scrum, Waterfall, PyCharm, WebStorm, VScode, Mozilla
          Observatory, Snyk, GitHub, Git, Jira, Confluence, CRM, Windows, iOS,
          Android, Netlify, Tailwindcss.
        </ul>
        <p className="pb-4"></p>
        <h3 className={titleStyles}>Education</h3>
        <p>
          Bachelor of Science in Computer Science, Texas State University | Aug
          2014 - Dec 2016
        </p>
        <p>
          Master of Engineering Technical Management, Texas A&M University | Aug
          2019 - May 2021
        </p>
        <p>
          QA Automation Engineer Course at Silicon Valley, CA, QAVS.US | April
          2022-Present
        </p>
        <p className="pb-4"></p>
        <p className="font-normal"></p>
      </ContentPane>
    );
  }
}

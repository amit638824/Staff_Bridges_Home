import { APP_URL, SALES_DISPLAY, SALES_TEL, SITE_URL, SUPPORT_DISPLAY, SUPPORT_TEL } from '../../config/constants';

export const LEGAL_UPDATED = '23 September 2026';

export const PRIVACY_SECTIONS = [
  { id: 'intro', title: 'Introduction' },
  { id: 'who', title: 'Who we are' },
  { id: 'collect', title: 'Information we collect' },
  { id: 'use', title: 'How we use information' },
  { id: 'share', title: 'Sharing & disclosure' },
  { id: 'payments', title: 'Payments' },
  { id: 'cookies', title: 'Cookies & devices' },
  { id: 'retain', title: 'Retention' },
  { id: 'security', title: 'Security' },
  { id: 'children', title: 'Children' },
  { id: 'rights', title: 'Your rights' },
  { id: 'changes', title: 'Changes' },
  { id: 'contact', title: 'Contact' },
];

export const TERMS_SECTIONS = [
  { id: 'agree', title: 'Acceptance' },
  { id: 'role', title: 'About the platform' },
  { id: 'eligibility', title: 'Eligibility' },
  { id: 'accounts', title: 'Accounts' },
  { id: 'seekers', title: 'Job seekers' },
  { id: 'recruiters', title: 'Recruiters' },
  { id: 'plans', title: 'Plans, credits & payments' },
  { id: 'use', title: 'Acceptable use' },
  { id: 'content', title: 'Content & IP' },
  { id: 'guarantee', title: 'No hiring guarantee' },
  { id: 'refunds', title: 'Refunds' },
  { id: 'terminate', title: 'Suspension' },
  { id: 'liability', title: 'Liability' },
  { id: 'law', title: 'Governing law' },
  { id: 'changes', title: 'Changes' },
  { id: 'contact', title: 'Contact' },
];

export function PrivacyBody() {
  return (
    <>
      <p>
        This Privacy Policy describes how Staff Bridges (“we”, “us”, “our”) collects, uses, stores, and
        shares personal information when you use{' '}
        <a href={SITE_URL} target="_blank" rel="noopener">staffbridges.com</a>,{' '}
        <a href={APP_URL} target="_blank" rel="noopener">app.staffbridges.com</a>, and related services
        (together, the “Platform”). By using the Platform you agree to this Policy.
      </p>

      <h3 id="intro">1. Introduction</h3>
      <p>
        Staff Bridges is a digital marketplace that helps job seekers find local jobs and helps recruiters
        post openings, review candidates, and hire. We process personal data to run accounts, show relevant
        jobs, enable applications, complete recruiter verification, send OTPs, process payments, and keep
        the Platform safe.
      </p>

      <h3 id="who">2. Who we are</h3>
      <p>
        Staff Bridges operates the public website and the recruiter/job-seeker app. This Policy applies to
        both. For privacy questions, use the contact details in Section 13.
      </p>

      <h3 id="collect">3. Information we collect</h3>
      <p>We collect information you give us, information created when you use the Platform, and information from partners where allowed by law:</p>
      <ul>
        <li><strong>Account data:</strong> name, mobile number, email, password or OTP login, profile photo, city, and role (job seeker / recruiter / admin).</li>
        <li><strong>Job seeker data:</strong> resume/CV, skills, experience, education, preferred location, applications, and interview activity.</li>
        <li><strong>Recruiter / company data:</strong> company name, address, documents for verification, job posts, salary range, and hiring activity.</li>
        <li><strong>Usage data:</strong> pages viewed, device type, browser, IP address, login times, and crash/performance logs.</li>
        <li><strong>Communications:</strong> support tickets, emails, call records where needed, and WhatsApp or OTP messages.</li>
        <li><strong>Payments:</strong> plan selected, order id, amount, and payment status from Razorpay or similar gateways. We do not store full card numbers.</li>
      </ul>

      <h3 id="use">4. How we use information</h3>
      <ul>
        <li>Create and manage your account and verify mobile/email</li>
        <li>Show jobs, process applications, and connect seekers with recruiters</li>
        <li>Verify recruiter documents and keep fake jobs off the Platform</li>
        <li>Send OTPs, alerts, and service messages</li>
        <li>Process subscriptions, credits, and invoices</li>
        <li>Improve the Platform, measure performance, and fix bugs</li>
        <li>Prevent fraud, abuse, and unauthorised access</li>
        <li>Comply with law and respond to lawful requests</li>
      </ul>

      <h3 id="share">5. Sharing &amp; disclosure</h3>
      <p>We do not sell personal data. We may share information only as needed:</p>
      <ul>
        <li><strong>Between users:</strong> recruiters may see candidate profiles you make available; seekers may see company and job details you publish.</li>
        <li><strong>Service providers:</strong> hosting, SMS/OTP, email, analytics, and payment partners bound to use data only for their service.</li>
        <li><strong>Legal:</strong> courts, regulators, or law enforcement when required.</li>
        <li><strong>Business transfer:</strong> if we merge or sell the business, data may move with it under this Policy.</li>
      </ul>

      <h3 id="payments">6. Payments</h3>
      <p>
        Recruiter plans and credits are paid through third-party gateways. The gateway processes card/UPI/net-banking
        data under its own policy. We receive confirmation of payment, not your full card details.
      </p>

      <h3 id="cookies">7. Cookies &amp; devices</h3>
      <p>
        We use cookies and similar tools to keep you signed in, remember preferences, and understand usage.
        You can block cookies in your browser; some features (login, session) may then stop working.
      </p>

      <h3 id="retain">8. Retention</h3>
      <p>
        We keep account and hiring records while your account is active and for a reasonable period after
        closure for legal, tax, dispute, and fraud-prevention reasons. You may ask us to delete data; we may
        retain what the law requires.
      </p>

      <h3 id="security">9. Security</h3>
      <p>
        We use reasonable technical and organisational measures (access control, encrypted transport, OTP login).
        No internet service is 100% secure. Please keep your OTP and device private.
      </p>

      <h3 id="children">10. Children</h3>
      <p>
        The Platform is for users 18 years or older. We do not knowingly collect data from children. If you
        believe a minor has registered, contact us and we will delete the account where required.
      </p>

      <h3 id="rights">11. Your rights</h3>
      <p>Subject to Indian law (including the Digital Personal Data Protection Act, 2023, as applicable), you may:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion or withdraw consent where processing is consent-based</li>
        <li>Ask us to restrict or explain how we use your data</li>
      </ul>
      <p>Send requests to contact@staffbridges.com. We may need to verify your identity before we act.</p>

      <h3 id="changes">12. Changes</h3>
      <p>
        We may update this Policy. The “Last updated” date will change. Continued use after an update means
        you accept the revised Policy. Material changes may also be notified in-app or by email/SMS.
      </p>

      <h3 id="contact">13. Contact</h3>
      <p className="mb-0">
        Email: <a href="mailto:contact@staffbridges.com">contact@staffbridges.com</a><br />
        Support: <a href={`tel:${SUPPORT_TEL}`}>{SUPPORT_DISPLAY}</a><br />
        Plan sales: <a href={`tel:${SALES_TEL}`}>{SALES_DISPLAY}</a>
      </p>
    </>
  );
}

export function TermsBody() {
  return (
    <>
      <p>
        These Terms &amp; Conditions (“Terms”) govern your use of Staff Bridges, including{' '}
        <a href={SITE_URL} target="_blank" rel="noopener">staffbridges.com</a> and{' '}
        <a href={APP_URL} target="_blank" rel="noopener">app.staffbridges.com</a>.
        By creating an account or using the Platform you accept these Terms.
      </p>

      <h3 id="agree">1. Acceptance</h3>
      <p>
        If you do not agree, do not use the Platform. Using the website, app, or any paid plan means you
        accept the current Terms and Privacy Policy.
      </p>

      <h3 id="role">2. About the platform</h3>
      <p>
        Staff Bridges is a job marketplace. We provide tools to post jobs, apply, message, and manage
        hiring. We are not the employer unless we say so in writing. We do not guarantee interviews, jobs,
        or hires.
      </p>

      <h3 id="eligibility">3. Eligibility</h3>
      <p>You must be at least 18 years old and legally able to enter a contract in India. Recruiters must have authority to hire or post for their organisation.</p>

      <h3 id="accounts">4. Accounts</h3>
      <ul>
        <li>Give true, complete information and keep it updated.</li>
        <li>You are responsible for OTP, password, and activity on your account.</li>
        <li>Do not share login access. Tell us at once if you suspect misuse.</li>
        <li>We may refuse, suspend, or close accounts that break these Terms or the law.</li>
      </ul>

      <h3 id="seekers">5. Job seekers</h3>
      <ul>
        <li>Applying on Staff Bridges is free.</li>
        <li>Never pay anyone who promises a job, interview, or offer in our name.</li>
        <li>Upload only your own resume and accurate details.</li>
        <li>Report fake jobs or payment demands to contact@staffbridges.com or support {SUPPORT_DISPLAY}.</li>
      </ul>

      <h3 id="recruiters">6. Recruiters</h3>
      <ul>
        <li>Post only genuine, lawful vacancies. Do not post fake, duplicate, or misleading jobs.</li>
        <li>Do not charge candidates for applying, interviewing, or joining.</li>
        <li>Complete verification (email, mobile, documents) as requested.</li>
        <li>Use candidate data only for hiring for the posted role, not for spam or resale.</li>
      </ul>

      <h3 id="plans">7. Plans, credits &amp; payments</h3>
      <p>
        Recruiters may buy subscriptions, credits, premium jobs, or related add-ons. Prices, validity, and
        features are shown at checkout. Payments are processed by Razorpay or other gateways. Credits and
        plan benefits are for your account only and are non-transferable unless we say otherwise.
      </p>
      <p>
        For custom or enterprise plans call sales at <a href={`tel:${SALES_TEL}`}>{SALES_DISPLAY}</a>.
      </p>

      <h3 id="use">8. Acceptable use</h3>
      <p>You agree not to:</p>
      <ul>
        <li>Post unlawful, discriminatory, or fraudulent jobs or profiles</li>
        <li>Harass, scrape, or bulk-download user data without permission</li>
        <li>Bypass payment, credits, or security controls</li>
        <li>Upload malware or interfere with the Platform</li>
        <li>Impersonate Staff Bridges or another person/company</li>
      </ul>

      <h3 id="content">9. Content &amp; intellectual property</h3>
      <p>
        You keep rights in content you upload (jobs, resumes, logos). You grant us a licence to host, display,
        and share that content as needed to run the Platform. Staff Bridges name, logo, and software remain ours.
      </p>

      <h3 id="guarantee">10. No hiring guarantee</h3>
      <p>
        Listings, matches, and interviews depend on users. We are not liable for hiring decisions, salary
        disputes, or workplace issues between seekers and recruiters.
      </p>

      <h3 id="refunds">11. Refunds</h3>
      <p>
        Fees for plans and credits are generally non-refundable once activated, except where Indian consumer
        law requires otherwise or we agree in writing (for example a failed payment that was charged twice).
      </p>

      <h3 id="terminate">12. Suspension</h3>
      <p>
        We may suspend or terminate access if you break these Terms, if required by law, or to protect users.
        You may close your account by contacting support. Some records may be kept as described in the Privacy Policy.
      </p>

      <h3 id="liability">13. Liability</h3>
      <p>
        The Platform is provided “as is”. To the maximum extent allowed by law, Staff Bridges is not liable
        for indirect, incidental, or consequential losses, or for disputes between users. Our total liability
        for a claim related to paid services is limited to the amount you paid us for that service in the
        three months before the claim.
      </p>

      <h3 id="law">14. Governing law</h3>
      <p>
        These Terms are governed by the laws of India. Courts in India shall have exclusive jurisdiction,
        subject to any mandatory rights you have as a consumer.
      </p>

      <h3 id="changes">15. Changes</h3>
      <p>
        We may change these Terms. The “Last updated” date will be revised. Continued use after a change
        means you accept the new Terms.
      </p>

      <h3 id="contact">16. Contact</h3>
      <p className="mb-0">
        Email: <a href="mailto:contact@staffbridges.com">contact@staffbridges.com</a><br />
        Support: <a href={`tel:${SUPPORT_TEL}`}>{SUPPORT_DISPLAY}</a><br />
        Plan sales: <a href={`tel:${SALES_TEL}`}>{SALES_DISPLAY}</a>
      </p>
    </>
  );
}

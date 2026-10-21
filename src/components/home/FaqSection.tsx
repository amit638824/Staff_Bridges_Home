import { useState, type ReactNode } from 'react';
import { APP_URL, SUPPORT_DISPLAY, SUPPORT_TEL } from '../../config/constants';

interface FaqItem {
  id: string;
  question: string;
  answer: ReactNode;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'f1',
    question: 'Is Staff Bridges free for job seekers?',
    answer: 'Yes. Applying is free. Never pay money to a recruiter for a job.',
  },
  {
    id: 'f2',
    question: 'Where do I login?',
    answer: (
      <>
        Use <a className="themeBlue" href={APP_URL} target="_blank" rel="noopener">app.staffbridges.com</a> with mobile OTP login.
      </>
    ),
  },
  {
    id: 'f3',
    question: 'How can I contact you?',
    answer: (
      <>
        Email <a className="themeBlue" href="mailto:contact@staffbridges.com">contact@staffbridges.com</a> or call support at{' '}
        <a className="themeBlue" href={`tel:${SUPPORT_TEL}`}>{SUPPORT_DISPLAY}</a>.
      </>
    ),
  },
  {
    id: 'f4',
    question: 'How do I apply for a job?',
    answer: (
      <>
        Browse jobs on this page or open <a className="themeBlue" href={APP_URL} target="_blank" rel="noopener">app.staffbridges.com</a>, create your free profile, and apply directly. You can also call HR for free interviews on listed openings.
      </>
    ),
  },
  {
    id: 'f5',
    question: 'Can recruiters post jobs on Staff Bridges?',
    answer: (
      <>
        Yes. Recruiters can sign up on <a className="themeBlue" href={APP_URL} target="_blank" rel="noopener">app.staffbridges.com</a>, complete company verification, and post hiring needs by city and category in minutes.
      </>
    ),
  },
  {
    id: 'f6',
    question: 'Do I need to pay for interviews or job offers?',
    answer: (
      <>
        No. Genuine employers on Staff Bridges do not charge candidates for applying, interviewing, or getting hired. If anyone asks for money, report it immediately to{' '}
        <a className="themeBlue" href="mailto:contact@staffbridges.com">contact@staffbridges.com</a>.
      </>
    ),
  },
  {
    id: 'f7',
    question: 'Which cities and job categories are available?',
    answer: 'We list live openings across multiple Indian cities and categories such as sales, delivery, office staff, technicians, and more. Use the Cities and Categories sections above to explore current options near you.',
  },
  {
    id: 'f8',
    question: 'Is my personal information safe?',
    answer: (
      <>
        We use your details only to connect you with relevant jobs and recruiters.
      </>
    ),
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState('f1');

  return (
    <section id="faq" className="section faq">
      <div className="container" style={{ maxWidth: 740 }}>
        <div className="section-head text-center" data-aos="fade-up">
          <div className="eyebrow">Help</div>
          <h2>Popular questions</h2>
        </div>
        <div className="accordion" data-aos="fade-up">
          {FAQ_ITEMS.map((item) => {
            const open = openId === item.id;
            return (
              <div className="accordion-item" key={item.id}>
                <h2 className="accordion-header">
                  <button
                    type="button"
                    className={`accordion-button${open ? '' : ' collapsed'}`}
                    onClick={() => setOpenId(open ? '' : item.id)}
                  >
                    {item.question}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse${open ? ' show' : ''}`}>
                  <div className="accordion-body text-muted">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

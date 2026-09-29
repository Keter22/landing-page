'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BookmarkCheck,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  GraduationCap,
  MapPin,
  MessageCircle,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'

type PortalRoute = 'home' | 'register' | 'jobs' | 'shortlist' | 'contact'

type PortalPageProps = {
  current: PortalRoute
}

const navigation: { label: string; href: string; route: PortalRoute }[] = [
  { label: 'Home', href: '/', route: 'home' },
  { label: 'Register for a job', href: '/register', route: 'register' },
  { label: 'My registered jobs', href: '/jobs', route: 'jobs' },
  { label: 'Shortlist', href: '/shortlist', route: 'shortlist' },
  { label: 'Contact', href: '/contact', route: 'contact' },
]

const jobListings = [
  {
    title: 'Student Welcome Host',
    employer: 'Student Experience team',
    type: 'Campus · Part-time',
    pay: '$25.50 / hour',
    location: 'Porirua campus',
    category: 'Student support',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85',
    alt: 'Students working together around a table',
    description: 'Help new learners find their feet, answer campus questions and make every first week feel welcoming.',
    date: 'Closes 04 Oct',
  },
  {
    title: 'Library Service Assistant',
    employer: 'Whitireia Library',
    type: 'Campus · Casual',
    pay: '$24.80 / hour',
    location: 'Porirua campus',
    category: 'Customer service',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85',
    alt: 'A calm, sunlit library with rows of bookshelves',
    description: 'Support the library team with front-desk service, resource returns and a calm, helpful study environment.',
    date: 'Closes 06 Oct',
  },
  {
    title: 'Digital Content Assistant',
    employer: 'Marketing & Communications',
    type: 'Campus · 8 hours / week',
    pay: '$26.00 / hour',
    location: 'Petone campus',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
    alt: 'A bright, collaborative creative studio workspace',
    description: 'Bring campus stories to life by helping plan social posts, capture moments and keep our student channels fresh.',
    date: 'Closes 09 Oct',
  },
  {
    title: 'Events Crew Member',
    employer: 'Campus Events',
    type: 'Campus · Flexible shifts',
    pay: '$25.00 / hour',
    location: 'Porirua campus',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=85',
    alt: 'A campus event with a team preparing the room',
    description: 'Get hands-on at student events, from room set-up and guest welcome to pack-down and event-day support.',
    date: 'Closes 12 Oct',
  },
  {
    title: 'IT Service Desk Helper',
    employer: 'Digital Services',
    type: 'Campus · Part-time',
    pay: '$27.00 / hour',
    location: 'Porirua campus',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85',
    alt: 'A small team collaborating on a technology project',
    description: 'Provide friendly first-line support, help learners connect to campus tools and escalate tricky issues to the team.',
    date: 'Closes 15 Oct',
  },
]

const pageCopy: Record<Exclude<PortalRoute, 'home'>, { eyebrow: string; title: string; description: string }> = {
  register: {
    eyebrow: 'YOUR NEXT STEP',
    title: 'Find a role that fits around study.',
    description: 'Tell us a little about yourself and the campus opportunity you would like to apply for.',
  },
  jobs: {
    eyebrow: 'CAMPUS OPPORTUNITIES',
    title: 'Good work. Right here on campus.',
    description: 'Explore student-friendly roles and keep your applications together in one place.',
  },
  shortlist: {
    eyebrow: 'YOUR SAVED ROLES',
    title: 'Keep your favourites close.',
    description: 'Review shortlisted opportunities, update your details, and respond to offers when you are ready.',
  },
  contact: {
    eyebrow: 'WE ARE HERE TO HELP',
    title: 'A question is a good place to start.',
    description: 'Send a note to the campus recruitment team. We will help you find the right next step.',
  },
}

export function PortalPage({ current }: PortalPageProps) {
  return (
    <div className="portal-app">
      <header className="site-header">
        <div className="announcement-bar">
          <span>Make your study experience work for you</span>
          <span className="announcement-separator" aria-hidden="true">·</span>
          <span>Campus jobs, made easier</span>
        </div>
        <div className="brand-lockup">
          <Link className="brand-mark" href="/" aria-label="Whitireia Campus Careers home">
            <span className="brand-icon"><GraduationCap size={24} strokeWidth={1.7} /></span>
            <span className="brand-name">WHITIREIA AND WELTEC</span>
            <span className="brand-subtitle">CAMPUS CAREERS</span>
          </Link>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          <div className="nav-inner">
            {navigation.map((item) => (
              <Link
                className={`nav-link ${current === item.route ? 'is-active' : ''}`}
                href={item.href}
                key={item.route}
                aria-current={current === item.route ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link className="nav-cta" href="/register">
              Find a job <ArrowUpRight size={15} />
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {current === 'home' && <HomeView />}
        {current === 'register' && <RegisterView />}
        {current === 'jobs' && <JobsView />}
        {current === 'shortlist' && <ShortlistView />}
        {current === 'contact' && <ContactView />}
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div>
            <Link className="footer-brand" href="/">WHITIREIA AND WELTEC </WELTEC> <span>Campus Careers</span></Link>
            <p>Opportunity looks good on you.</p>
          </div>
          <div className="footer-links">
            <Link href="/jobs">Explore jobs</Link>
            <Link href="/contact">Talk to our team</Link>
            <span><ShieldCheck size={15} /> Your privacy matters</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Whitireia Campus Careers · Petone, Aotearoa New Zealand</span>
          <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">Photography: Unsplash</a>
        </div>
      </footer>
    </div>
  )
}

function PageIntro({ page }: { page: Exclude<PortalRoute, 'home'> }) {
  const copy = pageCopy[page]
  return (
    <section className="page-intro">
      <div className="page-intro-copy">
        <div className="eyebrow"><span />{copy.eyebrow}</div>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
      </div>
      <div className="intro-note"><Sparkles size={17} /><span>Designed around your study life</span></div>
    </section>
  )
}

function HomeView() {
  const [studentName, setStudentName] = useState('')
  const [greeting, setGreeting] = useState('')
  const [dateTime, setDateTime] = useState('')

  function welcomeStudent() {
    const name = studentName.trim()
    if (!name) return
    window.alert(`Welcome, ${name}`)
    setGreeting(`Kia ora, ${name}`)
  }

  function handleNameKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && !event.nativeEvent.isComposing && event.keyCode !== 229) {
      event.preventDefault()
      welcomeStudent()
    }
  }

  return (
    <>
      <section className="home-hero page-width">
        <div className="hero-copy">
          <div className="eyebrow"><span />YOUR CAMPUS. YOUR OPPORTUNITY.</div>
          <h1>Make your next move <em>on campus.</em></h1>
          <p>Build experience, meet your people and earn while you learn. Your next opportunity is closer than you think.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/jobs">Explore campus jobs <ArrowRight size={17} /></Link>
            <Link className="text-link" href="/register">How it works <ChevronRight size={17} /></Link>
          </div>
          <div className="hero-proof"><span className="proof-icon"><Users size={17} /></span><span><strong>Made for students</strong><br />Flexible roles that fit around your timetable</span></div>
        </div>
        <div className="hero-visual">
          <img src="/whitireia-campus.png" alt="Whitireia students sharing a conversation on campus" />
          <div className="hero-image-label"><span className="live-dot" />A good place to begin <ArrowUpRight size={15} /></div>
          <div className="hero-floating-card"><span className="floating-icon"><BriefcaseBusiness size={18} /></span><span><strong>New this week</strong><br />5 campus opportunities</span></div>
        </div>
      </section>

      <section className="welcome-strip page-width" aria-label="Student sign in demo">
        <div className="welcome-intro"><span className="welcome-icon"><GraduationCap size={19} /></span><span><strong>{greeting || 'Welcome to your campus careers hub'}</strong><small>Enter your name to get started</small></span></div>
        <div className="welcome-controls">
          <label className="sr-only" htmlFor="student-name">Your name</label>
          <input id="student-name" type="text" placeholder="Your name" value={studentName} onChange={(event) => setStudentName(event.target.value)} onKeyDown={handleNameKeyDown} />
          <button className="button button-dark" type="button" onClick={welcomeStudent}>Sign in</button>
          <button className="button button-quiet" type="button" onClick={() => { setStudentName(''); setGreeting('') }}>Clear</button>
        </div>
        <div className="time-tool">
          <button type="button" onClick={() => setDateTime(new Date().toLocaleString('en-NZ', { dateStyle: 'medium', timeStyle: 'short' }))}><Clock3 size={15} /> TIME</button>
          <span aria-live="polite">{dateTime || 'Check the date & time'}</span>
        </div>
      </section>

      <section className="home-content page-width">
        <div className="section-heading">
          <div><div className="eyebrow"><span />A GREAT PLACE TO START</div><h2>Find your kind of opportunity.</h2></div>
          <Link className="text-link" href="/jobs">See all opportunities <ArrowRight size={16} /></Link>
        </div>
        <div className="opportunity-grid">
          {jobListings.slice(0, 3).map((job, index) => (
            <Link className="opportunity-card" href="/jobs" key={job.title}>
              <div className={`opportunity-icon opportunity-icon-${index}`}><BriefcaseBusiness size={20} /></div>
              <span className="opportunity-kicker">{job.category}</span>
              <h3>{job.title}</h3>
              <p>{job.type} <span>·</span> {job.location}</p>
              <span className="card-arrow"><ArrowUpRight size={16} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="campus-section page-width">
        <div className="campus-copy">
          <div className="eyebrow"><span />COME FIND YOUR PLACE</div>
          <h2>One campus.<br /><em>So many ways</em> forward.</h2>
          <p>Whitireia brings learning, creativity and community together. Find a role where you can share what you are good at—and discover what comes next.</p>
          <div className="campus-details"><span><MapPin size={17} /> 3 Wi Neera Drive, Porirua 5022</span><span><Clock3 size={17} /> Monday–Friday, 8:00am–4:00pm</span></div>
          <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=WhitireiaandWeltec+Petone+Campus" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a>
        </div>
        <div className="map-frame">
          <iframe title="Map showing Whitireia and Weltec Petone campus" loading="lazy" src="https://maps.google.com/maps?q=Whitireia%20Porirua%20Campus&t=&z=14&ie=UTF8&iwloc=&output=embed" />
          <div className="map-caption"><MapPin size={16} /><span><strong>Whitireia and Weltec Petone Campus</strong><small>Petone, Wellington region</small></span></div>
        </div>
      </section>
    </>
  )
}

function RegisterView() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedJob, setSelectedJob] = useState(jobListings[0].title)
  return (
    <div className="page-width page-content">
      <PageIntro page="register" />
      <div className="form-layout">
        <form className="portal-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} onChange={() => setSubmitted(false)}>
          <div className="form-section-heading"><span className="step-number">01</span><span><strong>Your details</strong><small>So our coordinator can get in touch.</small></span></div>
          <div className="form-grid">
            <label>Full name<input required name="fullName" placeholder="e.g. Alex Te Awa" autoComplete="name" /></label>
            <label>Student ID<input required name="studentId" placeholder="Your Whitireia ID" /></label>
            <label>Email address<input required type="email" name="email" placeholder="you@example.com" autoComplete="email" /></label>
            <label>Phone number<input required type="tel" name="phone" placeholder="021 555 0123" autoComplete="tel" /></label>
            <label>Programme of study<select required name="programme" defaultValue=""><option value="" disabled>Select your programme</option><option>Information Technology</option><option>Business</option><option>Hospitality</option><option>Health</option><option>Creative Industries</option><option>Trades</option><option>Other</option></select></label>
            <label>Year of study<select required name="year" defaultValue=""><option value="" disabled>Select year</option><option>Year 1</option><option>Year 2</option><option>Year 3</option><option>Other</option></select></label>
          </div>
          <div className="form-section-heading form-section-next"><span className="step-number">02</span><span><strong>What are you interested in?</strong><small>Choose the opportunity you would like to register for.</small></span></div>
          <div className="form-grid">
            <label className="field-span-two">Job wanted<select value={selectedJob} onChange={(event) => setSelectedJob(event.target.value)}>{jobListings.map((job) => <option key={job.title}>{job.title}</option>)}</select></label>
            <label>Registered date<input type="date" name="registeredDate" defaultValue="2026-09-28" /></label>
            <label>Availability<select required name="availability" defaultValue=""><option value="" disabled>Select availability</option><option>Weekdays</option><option>Evenings</option><option>Weekends</option><option>Flexible</option></select></label>
          </div>
          <label className="checkbox-line"><input type="checkbox" required /><span>I agree that the recruitment team may use these details to contact me about this application.</span></label>
          <button className="button button-primary form-submit" type="submit">Submit registration <ArrowRight size={17} /></button>
          {submitted && <p className="form-success" role="status"><Check size={17} /> Registration received for {selectedJob}. This demo keeps your details on this page only.</p>}
        </form>
        <aside className="form-aside">
          <div className="aside-icon"><ShieldCheck size={21} /></div>
          <h3>Your details stay yours.</h3>
          <p>We use your information only to support your campus job application and follow up with you.</p>
          <ul><li><Check size={15} /> Only the recruitment team can view applications</li><li><Check size={15} /> You decide which role to apply for</li><li><Check size={15} /> You can ask us to update your details</li></ul>
          <div className="aside-contact"><MessageCircle size={17} /><span>Need a hand?<Link href="/contact">Contact the coordinator</Link></span></div>
        </aside>
      </div>
    </div>
  )
}

function JobsView() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('All opportunities')
  const [savedJobs, setSavedJobs] = useState<string[]>([])
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch = `${job.title} ${job.employer} ${job.description}`.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch && (category === 'All opportunities' || job.category === category)
  })
  return (
    <div className="page-width page-content">
      <PageIntro page="jobs" />
      <div className="jobs-toolbar">
        <div className="search-field"><Search size={18} /><label className="sr-only" htmlFor="job-search">Search opportunities</label><input id="job-search" placeholder="Search roles, skills or teams" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} /></div>
        <label className="sr-only" htmlFor="job-category">Filter by category</label><select id="job-category" value={category} onChange={(event) => setCategory(event.target.value)}><option>All opportunities</option>{Array.from(new Set(jobListings.map((job) => job.category))).map((item) => <option key={item}>{item}</option>)}</select>
        <span className="results-count">{filteredJobs.length} opportunities</span>
      </div>
      <div className="job-listings">
        {filteredJobs.map((job) => (
          <article className="job-card" key={job.title}>
            <div className="job-photo"><img src={job.image} alt={job.alt} loading="lazy" /><span className="job-category">{job.category}</span></div>
            <div className="job-card-body">
              <div className="job-title-row"><div><span className="job-employer">{job.employer}</span><h2>{job.title}</h2></div><button className="bookmark-button" type="button" aria-pressed={savedJobs.includes(job.title)} aria-label={`${savedJobs.includes(job.title) ? 'Remove' : 'Save'} ${job.title} ${savedJobs.includes(job.title) ? 'from' : 'to'} shortlist`} onClick={() => setSavedJobs((current) => current.includes(job.title) ? current.filter((title) => title !== job.title) : [...current, job.title])}><BookmarkCheck size={19} /></button></div>
              <p className="job-description">{job.description}</p>
              <div className="job-meta"><span><MapPin size={14} />{job.location}</span><span><Clock3 size={14} />{job.type}</span><span><CalendarDays size={14} />{job.date}</span></div>
              <div className="job-card-footer"><strong>{job.pay}</strong><Link className="button button-small" href="/register">Register interest <ArrowRight size={15} /></Link></div>
            </div>
          </article>
        ))}
      </div>
      {filteredJobs.length === 0 && <div className="empty-state"><Search size={24} /><h2>No matching opportunities</h2><p>Try another search or choose a different category.</p></div>}
      <p className="demo-note"><ShieldCheck size={15} /> These sample roles are for the website demonstration. Registering interest does not submit a live application.</p>
    </div>
  )
}

function ShortlistView() {
  const [selectedJob, setSelectedJob] = useState(jobListings[0].title)
  const [jobTitle, setJobTitle] = useState(jobListings[0].title)
  const [description, setDescription] = useState(jobListings[0].description)
  const [updated, setUpdated] = useState(false)
  const [offerStatus, setOfferStatus] = useState('Awaiting review')
  function selectJob(title: string) {
    const job = jobListings.find((item) => item.title === title) ?? jobListings[0]
    setSelectedJob(title)
    setJobTitle(title)
    setDescription(job.description)
    setUpdated(false)
  }
  return (
    <div className="page-width page-content">
      <PageIntro page="shortlist" />
      <div className="shortlist-layout">
        <section className="shortlist-panel">
          <div className="panel-heading"><div><div className="eyebrow"><span />SHORTLISTED BY YOU</div><h2>Your saved opportunities</h2></div><span className="saved-count">03 saved</span></div>
          <div className="saved-role-list">
            {jobListings.slice(0, 3).map((job, index) => (
              <button className={`saved-role ${selectedJob === job.title ? 'selected' : ''}`} key={job.title} type="button" onClick={() => selectJob(job.title)}>
                <span className={`saved-role-icon saved-role-icon-${index}`}><BriefcaseBusiness size={17} /></span><span className="saved-role-copy"><strong>{job.title}</strong><small>Registered 28 Sep 2026</small></span><ChevronRight size={17} />
              </button>
            ))}
          </div>
          <div className="offer-card"><span className="offer-icon"><Sparkles size={18} /></span><span><strong>Offer response</strong><small>{offerStatus}</small></span><div className="offer-actions"><button type="button" onClick={() => setOfferStatus('Offer accepted')}>Accept</button><button type="button" onClick={() => setOfferStatus('Offer declined')}>Decline</button></div></div>
        </section>
        <form className="portal-form edit-form" onSubmit={(event) => { event.preventDefault(); setUpdated(true) }} onChange={() => setUpdated(false)}>
          <div className="form-section-heading"><span className="step-number"><BookmarkCheck size={17} /></span><span><strong>Update your shortlist</strong><small>Edit the details you have registered.</small></span></div>
          <label>Job title<select value={selectedJob} onChange={(event) => selectJob(event.target.value)}>{jobListings.map((job) => <option key={job.title}>{job.title}</option>)}</select></label>
          <label>Registered date<input type="date" defaultValue="2026-09-28" /></label>
          <label>Job description<textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={4} /></label>
          <div className="form-grid"><label>Name of updater<input required defaultValue="Alex Te Awa" /></label><label>Date of updating<input type="date" defaultValue="2026-09-28" /></label></div>
          <button className="button button-primary form-submit" type="submit">Save changes <Check size={16} /></button>
          {updated && <p className="form-success" role="status"><Check size={17} /> Your shortlist has been updated for {jobTitle}.</p>}
        </form>
      </div>
    </div>
  )
}

function ContactView() {
  const [sent, setSent] = useState(false)
  return (
    <div className="page-width page-content">
      <PageIntro page="contact" />
      <div className="contact-layout">
        <section className="contact-panel">
          <div className="contact-panel-heading"><span className="contact-icon"><MessageCircle size={20} /></span><span><strong>Talk to the recruitment team</strong><small>We usually reply within two working days.</small></span></div>
          <div className="contact-detail"><span className="contact-detail-icon"><MailIcon /></span><span><small>Email the coordinator</small><a href="mailto:campusjobs@whitireia.ac.nz">campusjobs@whitireia.ac.nz</a></span></div>
          <div className="contact-detail"><span className="contact-detail-icon"><PhoneIcon /></span><span><small>Call our student team</small><a href="tel:+6442373100">04 237 3100</a></span></div>
          <div className="contact-detail"><span className="contact-detail-icon"><MapPin size={17} /></span><span><small>Visit us</small><strong>3 Wi Neera Drive, Porirua 5022</strong></span></div>
          <div className="contact-hours"><Clock3 size={16} /><span>Monday–Friday<br /><strong>8:00am–4:00pm</strong></span></div>
          <div className="contact-privacy"><ShieldCheck size={16} />Please do not include sensitive personal information in your message.</div>
        </section>
        <form className="portal-form contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }} onChange={() => setSent(false)}>
          <div className="form-section-heading"><span className="step-number">01</span><span><strong>Send us a message</strong><small>Fields marked with * are required.</small></span></div>
          <label>Title of your message *<input required name="subject" placeholder="e.g. Question about an application" /></label>
          <div className="form-grid"><label>Your email address *<input required type="email" name="email" placeholder="you@example.com" autoComplete="email" /></label><label>Phone number<input type="tel" name="phone" placeholder="021 555 0123" autoComplete="tel" /></label></div>
          <label>Job coordinator<select defaultValue="Campus recruitment team"><option>Campus recruitment team</option><option>Student Experience team</option><option>Whitireia Library</option><option>Digital Services</option></select></label>
          <label>Message *<textarea required name="message" rows={5} placeholder="How can we help?" /></label>
          <button className="button button-primary form-submit" type="submit">Send message <Send size={16} /></button>
          {sent && <p className="form-success" role="status"><Check size={17} /> Message ready. Thank you—we will be in touch soon. This demo does not send email.</p>}
        </form>
      </div>
    </div>
  )
}

function PhoneIcon() {
  return <span aria-hidden="true" className="phone-glyph">☎</span>
}

function MailIcon() {
  return <span aria-hidden="true">✉</span>
}

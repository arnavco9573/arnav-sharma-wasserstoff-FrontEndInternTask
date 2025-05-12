export const templates = [
  {
    id: "black",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
    <h1 style="font-size: 28px; font-weight: bold; color: #006666;">SOFTWARE DEVELOPMENT PROPOSAL</h1>

    <br/><br/>

    <h3 style="font-size: 16px; font-weight: bold;">PREPARED FOR</h3>
    <p>Client's name</p>
    <p>Client's company name</p>

    <br/>

    <h3 style="font-size: 16px; font-weight: bold;">PREPARED BY</h3>
    <p>Your name</p>
    <p>Your company name</p>
  `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
    <h1>Hello,</h1>
    <h2>I'm Your Name</h2>
    <p>123 YOUR STREET<br>YOUR CITY, ST 12345<br>TEL: 555.555.5555<br>YOU.REPLY@EXAMPLE.COM</p>

    <h3>Skills</h3>
    <p>Skills description here. Core competencies and key abilities.</p>

    <h3>Experience</h3>
    <p><strong>MONTH 20XX – MONTH 20YY</strong><br><strong>Company Name, Location – Job Title</strong></p>
    <ul>
      <li>Key responsibility or achievement</li>
    </ul>

    <h3>Education</h3>
    <p><strong>College Name, Location — Degree</strong></p>

    <h3>Awards</h3>
    <p>Notable achievement or recognition.</p>
  `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
    <h1>Project Name</h1>
    <p>09.04.20XX</p>
    <p>Your Name<br>Your Company<br>123 Your Street<br>Your City, ST 12345</p>
  `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
    <p><strong>YOUR COMPANY</strong><br>
    123 YOUR STREET<br>
    YOUR CITY, ST 12345<br>
    (123) 456-7890<br>
    MYEMAIL@EXAMPLE.COM</p>

    <p>September 24, 20XX</p>

    <p>Dear Ms. Reader,</p>

    <p>Thank you for your interest in our services.<br>
    We are pleased to provide you with our latest product offerings.<br>
    Our team has extensive experience in business solutions.<br>
    We look forward to discussing this opportunity further.<br>
    Please contact us if you have any questions.</p>

    <p>Sincerely,<br><br>
    <strong>YOUR NAME</strong></p>
  `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
    <p><strong>Your Name</strong><br>
    123 Your Street<br>
    Your City, ST 12345<br>
    phone: (555) 555-5555<br>
    email: your.email@example.com</p>

    <p>September 24, 2024</p>

    <p>Hiring Manager<br>
    Company Name<br>
    123 Company Street<br>
    Company City, ST 12345</p>

    <p>Dear Hiring Manager,</p>

    <p>[Your cover letter content goes here.]</p>

    <p>Sincerely,<br><br>
    Your Name</p>
  `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
    <h2>Your Band</h2>
    <p><em>September 24, 20XX</em></p>

    <h1>Hello fan,</h1>

    <p><strong>First, a big thank you!</strong></p>
    <p>Thanks for being such an amazing supporter of our music.<br>
    We’re excited to announce our new album is coming soon.<br>
    You’ll be the first to hear our latest singles.<br>
    We’re planning something special for our loyal fans.<br>
    Stay tuned for exclusive content and updates.<br>
    Can’t wait to see you at our next show.</p>

    <p>Lots of love,<br><br>
    Your Name</p>
  `,
  },
];

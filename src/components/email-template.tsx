import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  number: string;
  companyName: string;
  link: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  number,
  companyName,
  link,
}) => (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#E4CEFF', padding: '20px'}}>
    <h3>Book Demo request from HiredInn!</h3>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Number: {number}</p>
    <p>Company Name: {companyName}</p>
    <p>Link: {link}</p>
  </div>
);

import { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, number, companyName, link } = await req.json();

    const { data, error } = await resend.emails.send({
      // from: 'HiredInn <noreply@hiredinn.co>',
      from: 'HiredInn <onboarding@resend.dev>',
      to: ['kunal@digixplaymedia.com'],
      subject: "Book a Demo Request",
      react: EmailTemplate({ name, email, number, companyName, link }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
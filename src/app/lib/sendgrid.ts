import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailData {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SendGrid API key is not set');
      return false;
    }
    
    await sgMail.send(data);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

export function createContactNotificationEmail(contactData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): EmailData {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@maabit.com';
  
  return {
    to: adminEmail,
    from: process.env.FROM_EMAIL || 'noreply@maabit.com',
    subject: `New Contact Form Submission: ${contactData.subject}`,
    text: `
      Name: ${contactData.name}
      Email: ${contactData.email}
      Subject: ${contactData.subject}
      Message: ${contactData.message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Subject:</strong> ${contactData.subject}</p>
      <p><strong>Message:</strong> ${contactData.message}</p>
    `,
  };
}

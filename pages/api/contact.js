// api/contact.js (server-side route)

import sgMail from '@sendgrid/mail';

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Define email content
    const emailContent = {
      to: 'recipient@example.com', // Replace with your recipient email
      from: email,
      subject: `Contact Us Form Submission from ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    };

    try {
      // Send email using SendGrid
      await sgMail.send(emailContent);

      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};


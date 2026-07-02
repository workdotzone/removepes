import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, area, message, source } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error('WEB3FORMS_ACCESS_KEY is not set');
      // Still log the lead to server logs even if email can't be sent
      console.log('LEAD:', JSON.stringify({ name, email, phone, service, area, message, source }));
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }

    const emailBody = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : '',
      service ? `Service: ${service}` : '',
      area ? `Area: ${area}` : '',
      message ? `Message: ${message}` : '',
      `Source: ${source || 'Website Form'}`,
    ].filter(Boolean).join('\n');

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `🔔 New Lead: ${service || 'Pest Control'} — ${name} (${phone})`,
        from_name: 'RemovePest Website',
        name,
        email: email || 'noreply@removepest.in',
        phone,
        service: service || '',
        area: area || '',
        message: emailBody,
        redirect: false,
      }),
    });

    const result = await res.json();

    if (!result.success) {
      console.error('Web3Forms error:', result);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}


    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1e3a5f; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #facc15; margin: 0;">🔔 New Lead — RemovePest Website</h2>
        </div>
        <div style="background: #f8f9fa; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px 0; color: #64748b; font-weight: bold; width: 35%;">Name</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Phone</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">
                <a href="tel:${phone}" style="color: #1e40af;">${phone}</a>
              </td>
            </tr>
            ${email ? `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Email</td>
              <td style="padding: 10px 0; color: #0f172a;">
                <a href="mailto:${email}" style="color: #1e40af;">${email}</a>
              </td>
            </tr>` : ''}
            ${service ? `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Service</td>
              <td style="padding: 10px 0;">
                <span style="background: #dbeafe; color: #1e40af; padding: 4px 10px; border-radius: 20px; font-size: 14px; font-weight: 600;">${service}</span>
              </td>
            </tr>` : ''}
            ${area ? `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Area / Location</td>
              <td style="padding: 10px 0; color: #0f172a;">${area}</td>
            </tr>` : ''}
            ${message ? `
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 10px 0; color: #64748b; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #0f172a;">${message}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Source</td>
              <td style="padding: 10px 0; color: #0f172a;">${source || 'Website Form'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background: #fef9c3; border-radius: 8px; border-left: 4px solid #facc15;">
            <p style="margin: 0; color: #713f12; font-weight: bold;">⚡ Respond within 30 minutes for best conversion!</p>
            <a href="tel:${phone}" style="display: inline-block; margin-top: 10px; background: #1e3a5f; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold;">
              📞 Call ${name} Now
            </a>
          </div>
        </div>
        <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 16px;">
          This lead was submitted via removepest.in
        </p>
      </div>
    `;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'RemovePest Leads <onboarding@resend.dev>',
        to: ['jitendra.gupta700@gmail.com'],
        reply_to: email || undefined,
        subject: `🔔 New Lead: ${service || 'Pest Control'} — ${name} (${phone})`,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('Resend error:', err);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

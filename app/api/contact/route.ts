import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, area, message, source } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || 'ed52b2f5-6cd1-4aa2-96ed-f647fffc21ad';

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
        subject: `New Lead: ${service || 'Pest Control'} - ${name} (${phone})`,
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

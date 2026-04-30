import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, organisation, role, market } = body

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'Bridge Website <noreply@bridgegtp.com>',
      to: ['hello@bridgegtp.com'],
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0B2C4A; padding: 24px 32px;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">New Enquiry — Bridge Talent Partners</h1>
          </div>
          <div style="padding: 32px; background: #f7f7f7; border: 1px solid #EEEEEE;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #EEEEEE; font-weight: bold; color: #0B2C4A; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #EEEEEE; color: #333;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #EEEEEE; font-weight: bold; color: #0B2C4A;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #EEEEEE;"><a href="mailto:${email}" style="color: #E53935;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #EEEEEE; font-weight: bold; color: #0B2C4A;">Organisation</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #EEEEEE; color: #333;">${organisation || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #EEEEEE; font-weight: bold; color: #0B2C4A;">Role</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #EEEEEE; color: #333;">${role || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #0B2C4A;">Market / Region</td>
                <td style="padding: 10px 0; color: #333;">${market || '—'}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 20px 32px; background: #0B2C4A;">
            <p style="color: rgba(255,255,255,0.4); font-size: 12px; margin: 0;">
              Sent from bridgegtp.com · Reply directly to this email to respond to ${firstName}.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const RECIPIENT_EMAIL = 'fitmastergijon@gmail.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'noreply@fitmaster.es'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios.' },
        { status: 400 }
      )
    }

    const subjectLabels: Record<string, string> = {
      asesoramiento: 'Solicitar asesoramiento',
      tienda: 'Consulta sobre productos',
      equipo: 'Unirme al equipo',
      patrocinio: 'Colaboración / Patrocinio',
      otro: 'Otro',
    }

    const subjectLabel = subjectLabels[subject] || subject

    // Email al equipo Fitmaster
    await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      reply_to: email,
      subject: `[Fitmaster Web] ${subjectLabel} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 40px;">
          <div style="border-left: 4px solid #D7FB04; padding-left: 20px; margin-bottom: 32px;">
            <h1 style="font-size: 24px; font-weight: 900; text-transform: uppercase; color: #D7FB04; margin: 0 0 4px;">
              Nuevo mensaje
            </h1>
            <p style="color: #888; font-size: 14px; margin: 0;">${subjectLabel}</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a;">
                <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px;">Nombre</p>
                <p style="color: #fff; font-size: 15px; font-weight: 600; margin: 0;">${name}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a;">
                <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px;">Email</p>
                <p style="color: #D7FB04; font-size: 15px; margin: 0;"><a href="mailto:${email}" style="color: #D7FB04;">${email}</a></p>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a;">
                <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px;">Teléfono</p>
                <p style="color: #fff; font-size: 15px; margin: 0;"><a href="tel:${phone}" style="color: #fff;">${phone}</a></p>
              </td>
            </tr>` : ''}
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1a1a1a;">
                <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px;">Motivo</p>
                <p style="color: #fff; font-size: 15px; margin: 0;">${subjectLabel}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 0;">
                <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 10px;">Mensaje</p>
                <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; border-left: 3px solid #D7FB04;">
                  <p style="color: #ccc; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
              </td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #1a1a1a;">
            <p style="color: #444; font-size: 11px; margin: 0;">
              Mensaje enviado desde el formulario de contacto de <strong style="color: #D7FB04;">fitmaster.es</strong>
            </p>
          </div>
        </div>
      `,
    })

    // Email de confirmación al usuario
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Hemos recibido tu mensaje — Fitmaster',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 40px;">
          <div style="margin-bottom: 32px;">
            <h1 style="font-size: 28px; font-weight: 900; text-transform: uppercase; color: #D7FB04; margin: 0 0 8px;">
              Fitmaster
            </h1>
            <p style="color: #888; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0;">
              Método · Disciplina · Resultados
            </p>
          </div>

          <h2 style="font-size: 22px; font-weight: 900; text-transform: uppercase; color: #fff; margin: 0 0 16px;">
            Hemos recibido tu mensaje
          </h2>
          <p style="color: #888; font-size: 15px; line-height: 1.7; margin: 0 0 12px;">
            Hola <strong style="color: #fff;">${name}</strong>,
          </p>
          <p style="color: #888; font-size: 15px; line-height: 1.7; margin: 0 0 12px;">
            Gracias por contactar con Fitmaster. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
          </p>
          <p style="color: #888; font-size: 15px; line-height: 1.7; margin: 0 0 32px;">
            Si tienes urgencia, puedes escribirnos directamente por WhatsApp al <a href="https://wa.me/34722624740" style="color: #D7FB04;">722 624 740</a>.
          </p>

          <div style="border-top: 1px solid #1a1a1a; padding-top: 24px;">
            <p style="color: #444; font-size: 13px; line-height: 1.6; margin: 0 0 8px;">
              <strong style="color: #666;">Fitmaster Gijón</strong><br />
              Avd Portugal, 9, Bajo · 33207 Gijón<br />
              <a href="mailto:fitmastergijon@gmail.com" style="color: #D7FB04;">fitmastergijon@gmail.com</a>
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error enviando email:', error)
    return NextResponse.json(
      { error: 'Error interno al enviar el mensaje.' },
      { status: 500 }
    )
  }
}

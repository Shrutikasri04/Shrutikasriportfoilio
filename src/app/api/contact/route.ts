import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",

      to: "kit28.24bcs160@gmail.com",

      subject: `Portfolio Contact from ${body.firstName}`,

      html: `
      <h2>New Portfolio Inquiry</h2>

      <p><strong>Name:</strong>
      ${body.firstName} ${body.lastName}</p>

      <p><strong>Email:</strong>
      ${body.email}</p>

      <p><strong>Company:</strong>
      ${body.company}</p>

      <p><strong>Role:</strong>
      ${body.role}</p>

      <p><strong>College:</strong>
      ${body.college}</p>

      <hr/>

      <p>${body.message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
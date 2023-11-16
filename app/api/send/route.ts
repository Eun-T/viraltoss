import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as React from "react";
import { EmailTemplate } from "@/components/Common/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  try {
    const body = await request.json();
    console.log(body);
    const { senderEmail, message, number, content } = body;

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "venzire329@gmail.com",
      subject: "Hello world",
      // react: EmailTemplate() as React.ReactElement,
      html: `
    보낸 사람: ${message}<br />
    연락처: ${number}<br />
    이메일: ${senderEmail}<br />
    문의 내용: ${content}
    `,
      reply_to: senderEmail as string,
      text: message as string,
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

"use server"

import { Resend } from 'resend';
import { validateString } from './utils';
// import { useRouter } from 'next/router'

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  // const router = useRouter()
  const senderEmail = formData.get("senderEmail")
  const message = formData.get("message")
  const number = formData.get("number")
  const content = formData.get("content")

  if(!validateString(senderEmail,500)) {
    return {
      error: "Invalid sender email"
    }
  }

  if(!validateString(message,500)) {
    return {
      error: "Invalid message"
    }
  }

  if(!message || typeof message !== 'string') {
    return {
      error: "Invaild message",
    };
  }

  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: 'venzire329@gmail.com',
    subject: 'Hello World',
    html: 
    `
    보낸 사람: ${message}<br />
    연락처: ${number}<br />
    이메일: ${senderEmail}<br />
    문의 내용: ${content}
    `,
    reply_to: senderEmail as string,
    text: message as string
  });

}


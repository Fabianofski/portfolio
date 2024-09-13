import type { RequestEvent } from "./$types";
import * as nodemailer from "nodemailer";
import { fail } from '@sveltejs/kit';
import { EMAIL, EMAIL_PASS, EMAIL_HOST } from "$env/static/private";

const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
        user: EMAIL,
        pass: EMAIL_PASS,
    },
});

export const actions = {
    contact: async ({ request }: RequestEvent) => {
        const data = await request.formData();
        const name = data.get("name");
        const email = data.get("email");
        const subject = data.get("subject");
        const message = data.get("message");

        if (name === '') return fail(400, { name, missing: true})
        if (email === '') return fail(400, { email, missing: true})
        if (subject === '') return fail(400, { subject, missing: true})
        if (message === '') return fail(400, { message, missing: true})

        try {
            await transporter.sendMail({
                from: `"${name}" <${EMAIL}>`,
                to: "friedrich.fabian@gmx.net",
                subject: `${subject}`,
                text: `${message}`
            });

            return { success: true };
        } catch (e) {
            console.error(e);
            return { success: false };
        }
    }
}

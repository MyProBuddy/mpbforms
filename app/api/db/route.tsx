import Airtable from 'airtable'
import { zfd } from 'zod-form-data'

const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
}).base('appKAd5shv5CA7YwN')

const schema = zfd.formData({
    name: zfd.text(),
    phone: zfd.text(),
    email: zfd.text(),
    description: zfd.text(),
    plan: zfd.text(),
    referralOrigin: zfd.text(),
})

export async function POST(request: Request) {
    try {
        const { name, phone, email, description, plan, referralOrigin } =
            schema.parse(await request.formData())
        console.log(
            name,
            phone,
            email,
            description,
            plan,
            referralOrigin.split(',').map((item) => item.trim()),
        )

        const records = await base('Applications').create([
            {
                fields: {
                    Name: name,
                    Phone: phone,
                    Email: email,
                    Description: description,
                    Plan: plan,
                    'Referral Origin': referralOrigin
                        .split(',')
                        .map((item) => item.trim()),
                },
            },
        ])

        return Response.json(
            { message: 'Form submitted successfully' },
            {
                status: 200,
                statusText: 'OK',
            },
        )
    } catch (error: any) {
        console.error(error.message)
        return Response.json(
            { message: error.message },
            {
                status: 500,
                statusText: 'Internal Server Error',
            },
        )
    }
}

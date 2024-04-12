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
    referralOrigin: zfd.text(),
})

export async function POST(request: Request) {
    try {
        const { name, phone, email, description, referralOrigin } =
            schema.parse(await request.formData())
        console.log(
            name,
            phone,
            email,
            description,
            referralOrigin.split(',').map((item) => item.trim()),
        )

        const records = await base('Applications').create([
            {
                fields: {
                    Name: name,
                    Phone: phone,
                    Email: email,
                    Description: description,
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
    } catch (error) {
        console.error(error)
        return Response.json(
            { message: 'An error occurred while submitting the form' },
            {
                status: 500,
                statusText: 'Internal Server Error',
            },
        )
    }
}

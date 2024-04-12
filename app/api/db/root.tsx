import Airtable from 'airtable';
import { zfd } from 'zod-form-data';

const base = new Airtable({ apiKey: 'patpQ2ZxjBJbkY1kq.1f03822fb00cdeb387b6503b14ff0563678a2d7de698e8473aecdac1174b469a' }).base('appKAd5shv5CA7YwN');

const schema = zfd.formData({
    name: zfd.text(),
    phone: zfd.text(),
    email: zfd.text(),
    description: zfd.text(),
});


export default async function POST(request: Request) {
    try {

        const { name, phone, email, description } = schema.parse(await request.formData());
        console.log(name, phone, email, description);

        const records = await base('Applications').create([
            {
                fields: {
                    Name: name,
                    Phone: phone,
                    Email: email,
                    Description: description,
                },
            },
        ]);

        return Response.json({ message: 'Form submitted successfully' }, {
            status: 200,
            statusText: "OK"
        });
    } catch (error) {
        console.error(error);
        return Response.json({ message: 'An error occurred while submitting the form' }, {
            status: 500,
            statusText: "Internal Server Error"
        });
    }
}
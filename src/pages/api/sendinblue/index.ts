import type { NextApiRequest, NextApiResponse } from 'next'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const SibApiV3Sdk = require('sib-api-v3-sdk')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const defaultClient = SibApiV3Sdk.ApiClient.instance
        const { email, listId } = req.body

        if (!email) {
            return res.status(400).json({ message: 'Bad request, you are missing some required parameters' })
        }

        const apiKey = defaultClient.authentications['api-key']
        apiKey.apiKey = process.env.SENDINBLUE_API_KEY

        const apiInstance = new SibApiV3Sdk.ContactsApi()
        const createContact = new SibApiV3Sdk.CreateContact()

        createContact.email = email
        createContact.attributes = {
            EMAIL: email
        }
        createContact.SIGNUP_DATE = new Date()

        if (req.body.name) {
            createContact.FIRSTNAME = req.body.name
        }
        if (req.body.surname) {
            createContact.LASTNAME = req.body.surname
        }
        if (req.body.mavieId) {
            createContact.USERID = req.body.mavieId
        }
        if (req.body.message) {
            createContact.FORM_MESSAGE = req.body.message
        }

        createContact.listIds = [listId]
        createContact.updateEnabled = true

        try {
            await apiInstance.createContact(createContact)
            return res.json({ message: 'Contact email created or updated!' })
        } catch (error) {
            console.log(error)
            return res.status(409).json({ message: 'Error on sending the email, try again later 001!', error })
        }
    } else {
        // Handle any other HTTP method
        return res.status(405).send({ message: 'Method not allowed!' })
    }
}

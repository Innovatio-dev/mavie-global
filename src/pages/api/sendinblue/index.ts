import type { NextApiRequest, NextApiResponse } from 'next'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const SibApiV3Sdk = require('sib-api-v3-sdk')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const defaultClient = SibApiV3Sdk.ApiClient.instance
        const { email } = req.body

        if (!email) {
            return res.status(400).json({ message: 'Bad request, you are missing some required parameters' })
        }

        const apiKey = defaultClient.authentications['api-key']
        apiKey.apiKey = process.env.SENDINBLUE_API_KEY

        const apiInstance = new SibApiV3Sdk.ContactsApi()
        // check the existance of the contact
        let contact
        let inserted = true

        try {
            contact = await apiInstance.getContactInfo(email)

            if (contact.id) {
                if (contact.listIds.includes(64)) {
                    // return res.json(contact)
                    return res.json({ message: 'Contact email already in the list!' })
                }
            }
        } catch (error: any) {
            if (error.status !== 404) {
                // Contact not found
                return res.json({ message: 'Error on the sendmail service! 001', error })
            }
            inserted = false
        }

        if (inserted) {
            const listId = 64
            const contactEmails = new SibApiV3Sdk.AddContactToList()
            contactEmails.emails = [email]

            try {
                await apiInstance.addContactToList(listId, contactEmails)
            } catch (error) {
                // As we already know the contact exists, so
            }
            return res.json({ message: 'Contact email added to the list' })
        }

        // If we get to here, the contact does not exist yet
        const createContact = new SibApiV3Sdk.CreateContact()

        createContact.email = email
        createContact.listIds = [64]

        try {
            const response = await apiInstance.createContact(createContact)

            if (response.id) {
                return res.json({ message: 'Contact email created!' })
            }
        } catch (error) {
            return res.status(409).json({ message: 'Error on sending the email, try again later 001!', error })
        }

        return res.status(409).json({ message: 'Error on sending the email, try again later! 002' })
    } else {
        // Handle any other HTTP method
        return res.status(405).send({ message: 'Method not allowed!' })
    }
}

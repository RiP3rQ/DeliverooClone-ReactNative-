import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: 'j1vs5kdf',
    datasetId: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})

const builer = ImageUrlBuilder(client)
export const urlFor = (source) => builer.image(source)

// Run this to add exception for localhost 3000 CORS policy
// sanity cors add http://localhost:3000

export default client
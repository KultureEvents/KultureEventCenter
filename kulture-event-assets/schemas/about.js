export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title for the About page (e.g., About Us)',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}], // Blocks allow for rich text editing
      description: 'The main content of the About page (body text)',
    },
    {
      name: 'image',
      title: 'About Us Image',
      type: 'image',
      description: 'An image to represent the About Us section',
    },
  ],
}

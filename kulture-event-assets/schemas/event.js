export default {
  name: 'event',
  title: 'Event-Venues',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the event hall',
      //   validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Unique identifier for the event (e.g., "I", "II")',
      options: {
        source: 'title',
        maxLength: 96,
      },
      //   validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Subtitle or description of the event hall',
      //   validation: (Rule) => Rule.required(),
    },
    {
      name: 'floorPlanInfo',
      title: 'Floor Plan Info',
      type: 'text',
      description: 'Information about the floor plan (e.g., square footage)',
      //   validation: (Rule) => Rule.required(),
    },
    {
      name: 'floorPlanImage',
      title: 'Floor Plan Image',
      type: 'image',
      description: 'Image of the floor plan',
      options: {
        hotspot: true, // Enable hotspot for image cropping
      },
      //   validation: (Rule) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      description: 'Additional images of the event hall',
      options: {
        layout: 'grid',
      },
      // validation: (Rule) => Rule.required(),
    },
  ],
}

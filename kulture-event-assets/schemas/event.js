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
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Subtitle or description of the event hall',
    },
    {
      name: 'floorPlanInfo',
      title: 'Floor Plan Info',
      type: 'text',
      description: 'Information about the floor plan (e.g., square footage)',
    },
    {
      name: 'floorPlanImage',
      title: 'Floor Plan Image',
      type: 'image',
      description: 'Image of the floor plan',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'youtubeVideo',
      title: 'YouTube Video',
      type: 'string',
      description:
        'YouTube video link for the event hall (e.g., https://www.youtube.com/watch?v=VIDEO_ID)  NOTE: Use the "Share" link from YouTube and copy the iframe URL in the src attribute.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
          allowRelative: false,
          message:
            'Please enter a valid URL for the YouTube video. NOTE: Use the "Share" link from YouTube and copy the iframe URL in the src attribute.',
        }),
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
    },
  ],
}

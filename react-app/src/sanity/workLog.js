export default {
    name: 'workLog',
    title: 'Loggoppføring',
    type: 'document',
    fields: [
      {
        name: 'author',
        title: 'Forfatter',
        type: 'reference',
        to: [{ type: 'groupMember' }],
      },
      {
        name: 'description',
        title: 'Beskrivelse',
        type: 'string',
      },
    ],
  };
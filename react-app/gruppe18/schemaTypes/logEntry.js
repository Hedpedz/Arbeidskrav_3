// schemas/logEntry.js
export default {
    name: 'logEntry',
    title: 'Loggføring',
    type: 'document',
    fields: [
      {
        name: 'member',
        title: 'Gruppemedlem',
        type: 'reference',
        to: [{ type: 'member' }],
        description: 'Hvilket medlem gjorde dette?',
        validation: Rule => Rule.required(),
      },
      {
        name: 'description',
        title: 'Beskrivelse',
        type: 'string',
        description: 'Kort beskrivelse av arbeidet.',
      },
      {
        name: 'logDate',
        title: 'Dato for hendelse',
        type: 'date',
        description: 'Sett en spesifikk dato for hendelsen hvis den er annerledes enn når loggen ble opprettet.',
        options: {
          dateFormat: 'DD.MM.YYYY',
        },
      },
      {
        name: 'hours',
        title: 'Timer brukt',
        type: 'number',
        description: 'Antall timer brukt',
        validation: Rule => Rule.min(0),
      }
    ],
    preview: {
      select: {
        description: 'description',
        memberName: 'member.name',
        logDate: 'logDate',
        createdAt: '_createdAt' 
      },
      prepare(selection) {
        const { description, memberName, logDate, createdAt } = selection;
        const dateToDisplay = logDate ? logDate : createdAt;
        const formattedDate = new Date(dateToDisplay).toLocaleDateString('nb-NO', {
            day: '2-digit', month: '2-digit', year: 'numeric'
        });
        return {
          title: description || 'Ingen beskrivelse',
          subtitle: `${memberName || 'Ukjent medlem'} - ${formattedDate}`
        };
      }
    },
     orderings: [ 
       {
         title: 'Opprettet, Nyest Først',
         name: 'createdAtDesc',
         by: [
           {field: '_createdAt', direction: 'desc'}
         ]
       }
     ]
  }
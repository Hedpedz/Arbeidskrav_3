# Sanity Clean Content Studio

## Dato i Arbeidslogg

Oppgaven hintet mot bruk av Sanitys `_createdAt`-felt for loggdatoer. Vi fant ut at dette ikke tillater manuell setting av dato (f.eks. for gårsdagens arbeid). Så for å sikre korrekt og fleksibel datering la vi til et manuelt datofelt (`logDate`) i schemaet for loggføringer. 
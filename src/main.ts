// SNACK 1 + SNACK 1 BONUS

let dato: unknown;

if (typeof dato === 'string') {
  console.log(dato.toUpperCase());
} else if (typeof dato === 'number') {
  console.log(dato * 2);
} else if (typeof dato === 'boolean') {
  console.log(dato ? 'Si' : 'No');
} else if (dato === null) {
  console.log('Il dato è vuoto')
  // ARRAY v1 - IS ARRAY
} else if (Array.isArray(dato)) {
  console.log(dato.length);
  // ARRAY v2 - INSTANCE OF
} else if (dato instanceof Array) {
  console.log(dato.length);
} else if (dato instanceof Promise) {
  dato.then((msg) => console.log(msg))
} else {
  console.log('Tipo non supportato');
}


// SNACK 2 + SNACK 2 BONUS

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'm' | 'f',
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: 'indeterminato' | 'determinato' | 'freelance',
}


// SNACK 3

type Developer = Dipendente & {
  livelloEsperienza: 'junior' | 'mid' | 'senior',
  linguaggi?: string[],
  certificazioni: string[],
}

type ProjectManager = Dipendente & {
  teamSize: number | null,
  budgetGestito?: number,
  stakeholderPrincipali: string[],
}

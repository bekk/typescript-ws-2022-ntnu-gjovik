// Oppgave 1: 
// Lag en enum som inneholder måltidstyper (frokost, middag, etc.)


// Oppgave 2:
// Hva må vi sette c.kind til, for at feilen skal forsvinne?
enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: ShapeKind.Square, // Hva kan vi sette kind til?
  radius: 100,
};


// Oppgave 3:
// Hvorfor mener Typescript at det er en unødvendig sjekk?
enum E {
  Foo,
  Bar,
}

function f(x: E) {
  if (x !== E.Foo || x !== E.Bar) {
    //
  }
}

export { }; /* Denne er med for å unngå at alt defineres i det globale skopet */

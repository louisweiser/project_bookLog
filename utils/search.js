export default function searchObjects(array, searchTerm) {
  const regex = new RegExp(searchTerm, "i");
  const result = [];

  array.forEach((item) => {
    if (typeof item === "object") {
      const keys = Object.keys(item);
      keys.forEach((key) => {
        const value = item[key];
        if (typeof value === "string" && regex.test(value)) {
          // Überprüfen, ob das Objekt bereits im Ergebnis-Array vorhanden ist
          if (!result.includes(item)) {
            result.push(item);
          }
        } else if (Array.isArray(value)) {
          // Rekursiv jedes Element im Array durchlaufen
          const subResults = searchObjects(value, searchTerm);
          subResults.forEach((subResult) => {
            // Überprüfen, ob das Objekt bereits im Ergebnis-Array vorhanden ist
            if (!result.includes(subResult)) {
              result.push(subResult);
            }
          });
        } else if (typeof value === "object") {
          // Rekursiv die Objekteigenschaft durchlaufen
          const subResults = searchObjects([value], searchTerm);
          subResults.forEach((subResult) => {
            // Überprüfen, ob das Objekt bereits im Ergebnis-Array vorhanden ist
            if (!result.includes(subResult)) {
              result.push(subResult);
            }
          });
        }
      });
    }
  });

  return result;
}

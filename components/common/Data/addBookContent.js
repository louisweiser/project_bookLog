async function createBookContent(bookID) {
  try {
    const response = await fetch("/api/add/addbookcontent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookID }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log(
        "Content zum Buch erfolgreich hinzugefügt. Daten werden geladen...",
        data
      );
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Fehler beim Hinzufügen des Buchinhalts:", error);
  }
}

export default createBookContent;

/* function createBookContent(bookID) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("/api/add/addbookcontent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookID }),
      });

      const data = await response.json();
      if (response.ok) {
        resolve(data);
        console.log(
          "Content zum Buch erfolgreich hinzugefügt. Daten werden geladen...",
          data
        );
        return "fertig geladen";
      } else {
        reject(data.message);
      }
    } catch (error) {
      reject(error);
    }
  });
}

export default createBookContent; 

Beide Code-Beispiele haben ihre eigenen Vorteile, und die Wahl des "besseren" Weges hängt von Ihren persönlichen Präferenzen und der Codebasis ab, in der Sie arbeiten.

Promise-basierte Implementierung: Die ursprüngliche Implementierung verwendet Promises und resolve und reject Methoden. Diese Methode bietet mehr Flexibilität bei der Handhabung von Erfolgs- und Fehlerfällen, da sie spezifische resolve und reject Funktionen bereitstellt, die von anderen Teilen des Codes verwendet werden können. Dies kann besonders nützlich sein, wenn es mehrere Verbraucher der Funktion gibt, die unterschiedliche Handhabungen der Ergebnisse benötigen.

Async/Await-basierte Implementierung: Die zweite Implementierung verwendet async/await, was zu einem saubereren, einfacher zu lesenden und zu wartenden Code führt, da er einer linearen, synchrone Code-ähnlichen Struktur folgt. Dies kann die Lesbarkeit des Codes und die Fehlersuche erleichtern. Jedoch kann es in einigen Fällen weniger flexibel sein, wenn es um die Handhabung verschiedener Ergebnisse geht.

Insgesamt sind beide Ansätze gültig und funktional. Wenn Sie Wert auf einheitlichen Stil und Lesbarkeit legen, könnte die async/await-basierte Implementierung die bessere Wahl sein. Wenn Sie jedoch mehr Flexibilität bei der Handhabung von Erfolg- und Fehlerfällen benötigen, könnte die Promise-basierte Implementierung besser geeignet sein.

In vielen modernen JavaScript-Codebases ist der async/await-Ansatz jedoch weit verbreitet und bevorzugt, da er einfacher zu verstehen und zu handhaben ist.*/

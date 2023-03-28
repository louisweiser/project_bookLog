import mongoose from "mongoose";

//In diesen Zeilen wird ein neues Mongoose-Schema erstellt, das die Struktur von Buchdokumenten in der Datenbank definiert. Das Schema besteht aus einem einzigen Feld namens book, das ein Objekt mit drei Eigenschaften ist: title, subtitle und author. Jede dieser Eigenschaften ist vom Typ String.
const BooksSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  subtitle: String,
  author: String,
  genre: String,
  tag: [String],
  cover: String,
  coverpath: String,
  slug: String,
  relativefactor: Number,
  bookID: mongoose.Schema.Types.ObjectId,
});

//In diesen Zeilen wird ein Mongoose-Modell namens Books erstellt oder abgerufen. Das Modell basiert auf dem zuvor definierten BookSchema. Wenn das Modell bereits existiert (z. B. wenn der Code mehrmals ausgeführt wird), wird die vorhandene Instanz aus mongoose.models verwendet, um mehrfache Modelldefinitionen zu vermeiden. Andernfalls wird ein neues Modell erstellt. Der dritte Parameter, "books", gibt den Namen der zugrunde liegenden MongoDB-Sammlung an.
const Books =
  mongoose.models.Books || new mongoose.model("Books", BooksSchema, "books");

export default Books;

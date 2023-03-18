/* v v v Hilfskomponente um die breite und höhe eines bildes serverseitig vor dem rendern des browsers zu ermitteln v v v */

import sizeOf from "image-size";

export default function handler(req, res) {
  const { id } = req.query; //die id enthält den Namen des Bildes
  const dimensions = sizeOf(`./public/images/${id}`); //hilsfunktion aus npm paket um breite und höhe des bildes zu ermitteln
  res.status(200).json(dimensions);
}

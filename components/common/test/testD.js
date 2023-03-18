import React from "react";
import RenderBookCoverC from "@/components/common/test/testC";

import { bookMetaData } from "@/public/data/bookmeta.js";

export default function RenderCollection() {
  return bookMetaData.map((objekt) => (
    <div key={objekt.id}>
      <RenderBookCoverC imageName={objekt.name}></RenderBookCoverC>
    </div>
  ));
}

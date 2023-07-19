import { useState } from "react";

export default function Coletor({ id }) {
  const [idColetado, setIdColetado] = useState(id);
  console.log(idColetado);
}

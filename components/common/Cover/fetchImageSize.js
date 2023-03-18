export function fetchImageSize(imageName) {
  let dimensions = {};
  const height = 220;
  async function fetchImageSizeB() {
    const res = await fetch(`/api/image-size?id=${imageName}`);
    const data = await res.json();
    console.log("data" + data);
    dimensions = data;
  }
  fetchImageSizeB();
  console.log("dim" + dimensions);
  const relativFactor = dimensions.width / dimensions.height;
  const relativHeight = height;
  const relativWidth = relativFactor * relativHeight;

  const object = { relativHeight: relativHeight, relativWidth: relativWidth };

  return object;
}

/* export default function fetchImageSize({ imageName }) {
  const [dimensions, setDimensions] = useState({ width: null, height: null });
  const height = 220;
  console.log(imageName);

  useEffect(() => {
    async function fetchImageSizeB() {
      const res = await fetch(`/api/image-size?id=${imageName}`);
      const data = await res.json();
      setDimensions(data);
    }

    fetchImageSizeB();
  });

  //Bestimmung der relativen Seitenverhältnisse des Bildes in abhängigkeit der festgelegten Höhe
  const relativFactor = dimensions.width / dimensions.height;
  const relativHeight = height;
  const relativWidth = relativFactor * relativHeight;

  const object = { relativHeight: relativHeight, relativWidth: relativWidth };

  return object;
} */

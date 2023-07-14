import "./styles.css";

let noOfLevels = 10; // try change this!!
let activeLevel = 3;

export default function App() {
  const totalLevels = noOfLevels + 1;
  const width = totalLevels * 100;
  const gradientPer = ((activeLevel * 100) / width) * 100;

  const getPath = () => {
    let path = "";
    for (let i = 1; i <= totalLevels; i++) {
      path += ` ${i > 1 ? `T` : ``}${i * 100}, 50`;
    }
    console.log("@@@@@@@@@@@@@", path);
    return path;
  };

  const plotPoints = () => {
    let arr = [];
    for (let i = 1; i < totalLevels; i++) {
      arr.push({ x: i * 100, y: 50 });
    }
    console.log("__________________", arr);
    return arr;
  };
  console.log(getPath());
  return (
    <div style={{ height: "500px", flex: 1, overflow: "scroll" }}>
      <svg width={width} style={{ overflow: "scroll" }}>
        <path
          d={`M0 50 Q50 90,` + getPath() + `L${width} 100 L0 100`}
          fill="green"
        />
        <path
          stroke="url(#stroke)"
          strokeWidth={5}
          d={`M0 50 Q50 90,` + getPath()}
          fill="none"
        />
        <defs>
          <linearGradient id="stroke" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#F4BE43" />
            <stop offset={`${gradientPer}%`} stop-color="#EC762E" />
            <stop offset={`${gradientPer}%`} stop-color="grey" />
            <stop offset="100%" stop-color="grey" />
          </linearGradient>
        </defs>
        {plotPoints().map(({ x, y }) => (
          <circle
            onClick={() => alert(`x: ${x}, y: ${y}`)}
            cx={x}
            cy={y}
            r="10"
            stroke="black"
            stroke-width="1"
            fill="red"
          />
        ))}
      </svg>
    </div>
  );
}

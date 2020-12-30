import { IndexByFunc, ResponsiveHeatMap } from "@nivo/heatmap";
import { DataObject } from "../types";

interface HeatMapProps {
  data: DataObject[];
  keys?: string[];
  indexBy?: string | IndexByFunc;
  xLabel?: string;
  yLabel?: string;
}

const HeatMap = ({ data, keys, indexBy }: HeatMapProps) => (
  <ResponsiveHeatMap
    data={data}
    keys={keys}
    indexBy={indexBy}
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
  />
);

export default HeatMap;

// let a = [
//   {
//     country: "AD",
//     "hot dog": 50,
//     "hot dogColor": "hsl(300, 70%, 50%)",
//     burger: 65,
//     burgerColor: "hsl(22, 70%, 50%)",
//     sandwich: 94,
//     sandwichColor: "hsl(199, 70%, 50%)",
//     kebab: 65,
//     kebabColor: "hsl(355, 70%, 50%)",
//     fries: 19,
//     friesColor: "hsl(324, 70%, 50%)",
//     donut: 7,
//     donutColor: "hsl(35, 70%, 50%)",
//     junk: 90,
//     junkColor: "hsl(193, 70%, 50%)",
//     sushi: 16,
//     sushiColor: "hsl(259, 70%, 50%)",
//     ramen: 58,
//     ramenColor: "hsl(351, 70%, 50%)",
//     curry: 13,
//     curryColor: "hsl(151, 70%, 50%)",
//     udon: 43,
//     udonColor: "hsl(126, 70%, 50%)",
//   },
//   {
//     country: "AE",
//     "hot dog": 76,
//     "hot dogColor": "hsl(290, 70%, 50%)",
//     burger: 37,
//     burgerColor: "hsl(253, 70%, 50%)",
//     sandwich: 67,
//     sandwichColor: "hsl(159, 70%, 50%)",
//     kebab: 10,
//     kebabColor: "hsl(333, 70%, 50%)",
//     fries: 48,
//     friesColor: "hsl(338, 70%, 50%)",
//     donut: 6,
//     donutColor: "hsl(194, 70%, 50%)",
//     junk: 18,
//     junkColor: "hsl(47, 70%, 50%)",
//     sushi: 28,
//     sushiColor: "hsl(34, 70%, 50%)",
//     ramen: 50,
//     ramenColor: "hsl(13, 70%, 50%)",
//     curry: 67,
//     curryColor: "hsl(113, 70%, 50%)",
//     udon: 80,
//     udonColor: "hsl(40, 70%, 50%)",
//   },
// ];

import React from "react";
import { Box, Text, Card } from "rebass/styled-components";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";

const dummyBarData = [
  {
    country: "AD",
    "hot dog": 74,
    "hot dogColor": "hsl(51, 70%, 50%)",
    burger: 83,
    burgerColor: "hsl(312, 70%, 50%)",
    sandwich: 87,
    sandwichColor: "hsl(251, 70%, 50%)",
    kebab: 145,
    kebabColor: "hsl(205, 70%, 50%)",
    fries: 199,
    friesColor: "hsl(249, 70%, 50%)",
    donut: 193,
    donutColor: "hsl(110, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 21,
    "hot dogColor": "hsl(18, 70%, 50%)",
    burger: 176,
    burgerColor: "hsl(284, 70%, 50%)",
    sandwich: 97,
    sandwichColor: "hsl(278, 70%, 50%)",
    kebab: 127,
    kebabColor: "hsl(54, 70%, 50%)",
    fries: 17,
    friesColor: "hsl(161, 70%, 50%)",
    donut: 6,
    donutColor: "hsl(124, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 117,
    "hot dogColor": "hsl(13, 70%, 50%)",
    burger: 132,
    burgerColor: "hsl(175, 70%, 50%)",
    sandwich: 11,
    sandwichColor: "hsl(75, 70%, 50%)",
    kebab: 152,
    kebabColor: "hsl(333, 70%, 50%)",
    fries: 54,
    friesColor: "hsl(176, 70%, 50%)",
    donut: 150,
    donutColor: "hsl(323, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 43,
    "hot dogColor": "hsl(275, 70%, 50%)",
    burger: 99,
    burgerColor: "hsl(338, 70%, 50%)",
    sandwich: 108,
    sandwichColor: "hsl(138, 70%, 50%)",
    kebab: 36,
    kebabColor: "hsl(248, 70%, 50%)",
    fries: 26,
    friesColor: "hsl(317, 70%, 50%)",
    donut: 78,
    donutColor: "hsl(140, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 26,
    "hot dogColor": "hsl(221, 70%, 50%)",
    burger: 102,
    burgerColor: "hsl(232, 70%, 50%)",
    sandwich: 72,
    sandwichColor: "hsl(221, 70%, 50%)",
    kebab: 74,
    kebabColor: "hsl(188, 70%, 50%)",
    fries: 193,
    friesColor: "hsl(256, 70%, 50%)",
    donut: 146,
    donutColor: "hsl(210, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 94,
    "hot dogColor": "hsl(11, 70%, 50%)",
    burger: 42,
    burgerColor: "hsl(195, 70%, 50%)",
    sandwich: 128,
    sandwichColor: "hsl(62, 70%, 50%)",
    kebab: 77,
    kebabColor: "hsl(261, 70%, 50%)",
    fries: 183,
    friesColor: "hsl(58, 70%, 50%)",
    donut: 134,
    donutColor: "hsl(337, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 97,
    "hot dogColor": "hsl(90, 70%, 50%)",
    burger: 133,
    burgerColor: "hsl(228, 70%, 50%)",
    sandwich: 151,
    sandwichColor: "hsl(138, 70%, 50%)",
    kebab: 140,
    kebabColor: "hsl(222, 70%, 50%)",
    fries: 140,
    friesColor: "hsl(11, 70%, 50%)",
    donut: 33,
    donutColor: "hsl(27, 70%, 50%)",
  },
];

const dummyLineData = [
  {
    id: "japan",
    color: "hsl(296, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 247,
      },
      {
        x: "helicopter",
        y: 76,
      },
      {
        x: "boat",
        y: 261,
      },
      {
        x: "train",
        y: 140,
      },
      {
        x: "subway",
        y: 233,
      },
      {
        x: "bus",
        y: 131,
      },
      {
        x: "car",
        y: 194,
      },
      {
        x: "moto",
        y: 236,
      },
      {
        x: "bicycle",
        y: 46,
      },
      {
        x: "horse",
        y: 229,
      },
      {
        x: "skateboard",
        y: 266,
      },
      {
        x: "others",
        y: 298,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(268, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 75,
      },
      {
        x: "helicopter",
        y: 164,
      },
      {
        x: "boat",
        y: 294,
      },
      {
        x: "train",
        y: 282,
      },
      {
        x: "subway",
        y: 253,
      },
      {
        x: "bus",
        y: 120,
      },
      {
        x: "car",
        y: 34,
      },
      {
        x: "moto",
        y: 57,
      },
      {
        x: "bicycle",
        y: 166,
      },
      {
        x: "horse",
        y: 85,
      },
      {
        x: "skateboard",
        y: 65,
      },
      {
        x: "others",
        y: 34,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(71, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 8,
      },
      {
        x: "helicopter",
        y: 33,
      },
      {
        x: "boat",
        y: 21,
      },
      {
        x: "train",
        y: 11,
      },
      {
        x: "subway",
        y: 16,
      },
      {
        x: "bus",
        y: 16,
      },
      {
        x: "car",
        y: 109,
      },
      {
        x: "moto",
        y: 280,
      },
      {
        x: "bicycle",
        y: 246,
      },
      {
        x: "horse",
        y: 250,
      },
      {
        x: "skateboard",
        y: 266,
      },
      {
        x: "others",
        y: 66,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(109, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 81,
      },
      {
        x: "helicopter",
        y: 5,
      },
      {
        x: "boat",
        y: 228,
      },
      {
        x: "train",
        y: 126,
      },
      {
        x: "subway",
        y: 1,
      },
      {
        x: "bus",
        y: 241,
      },
      {
        x: "car",
        y: 30,
      },
      {
        x: "moto",
        y: 218,
      },
      {
        x: "bicycle",
        y: 6,
      },
      {
        x: "horse",
        y: 281,
      },
      {
        x: "skateboard",
        y: 208,
      },
      {
        x: "others",
        y: 259,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(11, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 203,
      },
      {
        x: "helicopter",
        y: 272,
      },
      {
        x: "boat",
        y: 111,
      },
      {
        x: "train",
        y: 30,
      },
      {
        x: "subway",
        y: 165,
      },
      {
        x: "bus",
        y: 227,
      },
      {
        x: "car",
        y: 187,
      },
      {
        x: "moto",
        y: 299,
      },
      {
        x: "bicycle",
        y: 114,
      },
      {
        x: "horse",
        y: 165,
      },
      {
        x: "skateboard",
        y: 164,
      },
      {
        x: "others",
        y: 210,
      },
    ],
  },
];

const GraphWrapper = () => (
  <Box padding={4} width={1000} height={128}>
    {/* <Text color="primary"> Maybe one day there will be a graph here</Text> */}
    <div style={{ height: 500, width: 1000 }}>
      <ResponsiveBar
        data={dummyBarData}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
    <hr />
    <div style={{ height: 500, width: 1000 }}>
      <ResponsiveLine
        data={dummyLineData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  </Box>
);

export default GraphWrapper;

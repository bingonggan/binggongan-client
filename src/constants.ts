const BOX_SIZE = {
  w: 520,
  h: 400,
  d: 480,
};

const ITEM_LIST = [
  {
    book: {
      title: "책",
      w: 152,
      h: 200,
      d: 15,
      loadBear: 500,
    },
  },
  {
    shoes_box: {
      title: "신발 상자",
      w: 310,
      h: 130,
      d: 200,
      loadBear: 2000,
    },
  },
  {
    styrofoam_box: {
      title: "스티로폼 상자",
      w: 200,
      h: 230,
      d: 200,
      loadBear: 1000,
    },
  },
  {
    speaker: {
      title: "스피커",
      w: 180,
      h: 300,
      d: 180,
      loadBear: 5000,
    },
  },
  {
    tumbler: {
      title: "텀블러",
      w: 70,
      h: 210,
      d: 70,
      loadBear: 350,
    },
  },
];

export { BOX_SIZE, ITEM_LIST };

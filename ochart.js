    },
    {
        id: 1,
        pid: 88,
        name: "alpha",
        txt: "robo1",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAW3DBuMFkkXW15RIGRWJt7ID2XnjygOIyK5Tdj9KXVp12NCR"
    },
    {
        id: 2,
        pid: 88,
        name: "beta",
        txt: "robo2",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgc55Ng1-rAgGMT6GKcHO0aFUcXSWUHwOp88n2QFQ2T92FJk-t"
    },
    {
        id: 33,
        pid: 88,
        name: "gamma",
        txt: "robo3",
        img: ""
    },
    {
        id: 4,
        pid: 88,
        name: "delta",
        txt: "robo4",
        img: ""
    },
    {
        id: 125,
        pid: 4,
        name: "eric",
        txt: "Executive",
        img: ""
    },
    {
        id: 124,
        pid: 4,
        name: "t'challa",
        txt: "Executive",
        img: "https://static1.squarespace.com/static/56000fe2e4b05e6e3887d5c4/5602274ae4b0641e3a0e98e7/5a961d9424a694da8598769c/1519787606726/Screen+Shot+2018-02-27+at+10.12.55+PM.png?format=1000w"
    },
];
  $("#ochart").dtree({
    isHorizontal: false,
    nodes : treeNodes
  });
});

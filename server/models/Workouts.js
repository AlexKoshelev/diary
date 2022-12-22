const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    cardio: {
      type: String,
    },
    date: {
      type: String,
    },
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "Clients",
      required: true,
    },
    exercise1: {
      name1: {
        type: String,
      },
      rep1: {
        type: String,
      },
      rep2: {
        type: String,
      },
      rep3: {
        type: String,
      },
      rep4: {
        type: String,
      },
      rep5: {
        type: String,
      },
      weight1: {
        type: String,
      },
      weight2: {
        type: String,
      },
      weight3: {
        type: String,
      },
      weight4: {
        type: String,
      },
      weight5: {
        type: String,
      },
    },
    exercise2: {
      name12: {
        type: String,
      },
      rep12: {
        type: String,
      },
      rep22: {
        type: String,
      },
      rep32: {
        type: String,
      },
      rep42: {
        type: String,
      },
      rep52: {
        type: String,
      },
      weight12: {
        type: String,
      },
      weight22: {
        type: String,
      },
      weight32: {
        type: String,
      },
      weight42: {
        type: String,
      },
      weight52: {
        type: String,
      },
    },
    exercise3: {
      name13: {
        type: String,
      },
      rep13: {
        type: String,
      },
      rep23: {
        type: String,
      },
      rep33: {
        type: String,
      },
      rep43: {
        type: String,
      },
      rep53: {
        type: String,
      },
      weight13: {
        type: String,
      },
      weight23: {
        type: String,
      },
      weight33: {
        type: String,
      },
      weight43: {
        type: String,
      },
      weight53: {
        type: String,
      },
    },
    exercise4: {
      name14: {
        type: String,
      },
      rep14: {
        type: String,
      },
      rep24: {
        type: String,
      },
      rep34: {
        type: String,
      },
      rep44: {
        type: String,
      },
      rep54: {
        type: String,
      },
      weight14: {
        type: String,
      },
      weight24: {
        type: String,
      },
      weight34: {
        type: String,
      },
      weight44: {
        type: String,
      },
      weight54: {
        type: String,
      },
    },
    exercise5: {
      name15: {
        type: String,
      },
      rep15: {
        type: String,
      },
      rep25: {
        type: String,
      },
      rep35: {
        type: String,
      },
      rep45: {
        type: String,
      },
      rep55: {
        type: String,
      },
      weight15: {
        type: String,
      },
      weight25: {
        type: String,
      },
      weight35: {
        type: String,
      },
      weight45: {
        type: String,
      },
      weight55: {
        type: String,
      },
    },
    exercise6: {
      name16: {
        type: String,
      },
      rep16: {
        type: String,
      },
      rep26: {
        type: String,
      },
      rep36: {
        type: String,
      },
      rep46: {
        type: String,
      },
      rep56: {
        type: String,
      },
      weight16: {
        type: String,
      },
      weight26: {
        type: String,
      },
      weight36: {
        type: String,
      },
      weight46: {
        type: String,
      },
      weight56: {
        type: String,
      },
    },
    exercise7: {
      name17: {
        type: String,
      },
      rep17: {
        type: String,
      },
      rep27: {
        type: String,
      },
      rep37: {
        type: String,
      },
      rep47: {
        type: String,
      },
      rep57: {
        type: String,
      },
      weight17: {
        type: String,
      },
      weight27: {
        type: String,
      },
      weight37: {
        type: String,
      },
      weight47: {
        type: String,
      },
      weight57: {
        type: String,
      },
    },
    exercise8: {
      name18: {
        type: String,
      },
      rep18: {
        type: String,
      },
      rep28: {
        type: String,
      },
      rep38: {
        type: String,
      },
      rep48: {
        type: String,
      },
      rep58: {
        type: String,
      },
      weight18: {
        type: String,
      },
      weight28: {
        type: String,
      },
      weight38: {
        type: String,
      },
      weight48: {
        type: String,
      },
      weight58: {
        type: String,
      },
    },
    exercise9: {
      name19: {
        type: String,
      },
      rep19: {
        type: String,
      },
      rep29: {
        type: String,
      },
      rep39: {
        type: String,
      },
      rep49: {
        type: String,
      },
      rep59: {
        type: String,
      },
      weight19: {
        type: String,
      },
      weight29: {
        type: String,
      },
      weight39: {
        type: String,
      },
      weight49: {
        type: String,
      },
      weight59: {
        type: String,
      },
    },
    exercise10: {
      name10: {
        type: String,
      },
      rep10: {
        type: String,
      },
      rep20: {
        type: String,
      },
      rep30: {
        type: String,
      },
      rep40: {
        type: String,
      },
      rep50: {
        type: String,
      },
      weight10: {
        type: String,
      },
      weight20: {
        type: String,
      },
      weight30: {
        type: String,
      },
      weight40: {
        type: String,
      },
      weight50: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Workouts", schema);

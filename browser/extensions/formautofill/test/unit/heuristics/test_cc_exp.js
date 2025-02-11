/* global runHeuristicsTest */

"use strict";

runHeuristicsTest(
  [
    {
      fixturePath: "heuristics_cc_exp.html",
      expectedResult: [
        {
          description: "form1",
          default: {
            reason: "autocomplete",
          },
          fields: [
            { fieldName: "cc-name" },
            { fieldName: "cc-number" },
            { fieldName: "cc-exp-month" },
            { fieldName: "cc-exp-year" },
          ],
        },
        {
          description: "form2",
          default: {
            reason: "autocomplete",
          },
          fields: [
            { fieldName: "cc-number" },
            { fieldName: "cc-exp" },
          ],
        },
        {
          description: "form3",
          fields: [
            { fieldName: "cc-number", reason: "autocomplete" },
            { fieldName: "cc-exp", reason: "regex-heuristic" },
          ],
        },
        {
          description: "form4",
          fields: [
            { fieldName: "cc-number", reason: "autocomplete" },
            { fieldName: "cc-exp-month", reason: "regex-heuristic" },
            { fieldName: "cc-exp-year", reason: "regex-heuristic" },
          ],
        },
        {
          description: "form5",
          fields: [
            { fieldName: "cc-exp-month", reason: "regex-heuristic" },
            { fieldName: "cc-exp-year", reason: "regex-heuristic" },
          ],
        },
      ],
    },
  ],
  "../../fixtures/"
);

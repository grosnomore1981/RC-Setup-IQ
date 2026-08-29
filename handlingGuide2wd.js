export const handlingGuide2wd = [

    {
        id: "cornerEntryOffPower",
        name: "Corner Entry / Off Power",

        sections: [

            {
                id: "reduceUndersteer",
                name: "Reduce Understeer (Push)",

                trackConditions: {

                    lowGrip: [
                        { setting: "Front Camber Link: Lower Outside" },
                        { setting: "Front Toe: More Toe Out" },
                        { setting: "Ball / Gear Differential: Looser" },
                        { setting: "Front Lower Shock Mount: More Laid Down" },
                        { setting: "Front Anti Roll Bar: Softer" },
                        { setting: "Weight Distribution: More Forward" },
                        { setting: "Front Spring: Softer" },
                        { setting: "Front Ride Height: Lower" }
                    ],

                    mediumGrip: [
                        { setting: "Front Camber Link: Lower Outside" },
                        { setting: "Front Toe: More Toe Out" },
                        { setting: "Ball / Gear Differential: Looser" },
                        { setting: "Front Lower Shock Mount: More Laid Down" },
                        { setting: "Front Anti Roll Bar: Softer" },
                        { setting: "Front Spring: Softer" },
                        { setting: "Front Ride Height: Lower" }
                    ],

                    highGrip: [
                        { setting: "Front Camber Link: Lower Outside" },
                        { setting: "Front Toe: More Toe Out" },
                        { setting: "Ball / Gear Differential: Looser" },
                        { setting: "Front Anti Roll Bar: Softer" },
                        { setting: "Front Lower Shock Mount: More Laid Down" },
                        { setting: "Front Ride Height: Lower" }
                    ]
                }
            },

            {
                id: "reduceOversteer",
                name: "Reduce Oversteer (Loose)",

                trackConditions: {

                    lowGrip: [
                        { setting: "Rear Camber Link: Lower Outside" },
                        { setting: "Ball / Gear Differential: Tighter" },
                        { setting: "Rear Anti Roll Bar: Softer" },
                        { setting: "Rear Spring: Softer" },
                        { setting: "Rear Upper Shock Mount: More Laid Down" },
                        { setting: "Weight Distribution: More Rearward" },
                        { setting: "Rear Ride Height: Higher" }
                    ],

                    mediumGrip: [
                        { setting: "Rear Anti Roll Bar: Softer" },
                        { setting: "Ball / Gear Differential: Tighter" },
                        { setting: "Rear Camber Link: Lower Outside" },
                        { setting: "Rear Spring: Softer" },
                        { setting: "Rear Upper Shock Mount: More Laid Down" },
                        { setting: "Rear Ride Height: Higher" }
                    ],

                    highGrip: [
                        { setting: "Ball / Gear Differential: Tighter" },
                        { setting: "Rear Anti Roll Bar: Softer" },
                        { setting: "Rear Camber Link: Lower Outside" },
                        { setting: "Rear Upper Shock Mount: More Laid Down" },
                        { setting: "Rear Ride Height: Higher" }
                    ]
                }
            }

        ]
    },

    {
        id: "midCornerNeutralPower",
        name: "Mid Corner / Neutral Power",

        sections: [

            {
                id: "reduceUndersteer",
                name: "Reduce Understeer (Push)",

                trackConditions: {

                    lowGrip: [
                        { setting: "Front Camber Link: Lower Outside" },
                        { setting: "Front Anti Roll Bar: Softer" },
                        { setting: "Front Upper Shock Mount: More Laid Down" },
                        { setting: "Rear Hub Height: Higher" },
                        { setting: "Front Spring: Softer" },
                        { setting: "Ball / Gear Differential: Looser" },
                        { setting: "Weight Distribution: More Forward" }
                    ],

                    mediumGrip: [
                        { setting: "Front Camber Link: Lower Outside" },
                        { setting: "Front Anti Roll Bar: Softer" },
                        { setting: "Front Upper Shock Mount: More Laid Down" },
                        { setting: "Rear Hub Height: Higher" },
                        { setting: "Front Spring: Softer" },
                        { setting: "Ball / Gear Differential: Looser" }
                    ],

                    highGrip: [
                        { setting: "Front Camber Link: Lower Outside" },
                        { setting: "Front Anti Roll Bar: Softer" },
                        { setting: "Front Upper Shock Mount: More Laid Down" },
                        { setting: "Rear Hub Height: Higher" },
                        { setting: "Ball / Gear Differential: Looser" }
                    ]
                }
            },

            {
                id: "reduceOversteer",
                name: "Reduce Oversteer (Loose)",

                trackConditions: {

                    lowGrip: [
                        { setting: "Rear Camber Link: Lower Outside" },
                        { setting: "Rear Hub Height: Lower" },
                        { setting: "Rear Upper Shock Mount: More Laid Down" },
                        { setting: "Rear Anti Roll Bar: Softer" },
                        { setting: "Rear Spring: Softer" },
                        { setting: "Ball / Gear Differential: Tighter" },
                        { setting: "Weight Distribution: More Rearward" }
                    ],

                    mediumGrip: [
                        { setting: "Rear Camber Link: Lower Outside" },
                        { setting: "Rear Hub Height: Lower" },
                        { setting: "Rear Upper Shock Mount: More Laid Down" },
                        { setting: "Rear Anti Roll Bar: Softer" },
                        { setting: "Ball / Gear Differential: Tighter" },
                        { setting: "Rear Spring: Softer" }
                    ],

                    highGrip: [
                        { setting: "Rear Camber Link: Lower Outside" },
                        { setting: "Rear Hub Height: Lower" },
                        { setting: "Rear Upper Shock Mount: More Laid Down" },
                        { setting: "Rear Anti Roll Bar: Softer" },
                        { setting: "Ball / Gear Differential: Tighter" }
                    ]
                }
            }

        ]
    },

    {
        id: "cornerExitOnPower",
        name: "Corner Exit / On Power",

        sections: [

            {
                id: "reduceUndersteer",
                name: "Reduce Understeer (Push)",

                trackConditions: {

                    lowGrip: [
                        { setting: "Ball / Gear Differential: Looser" },
                        { setting: "Rear Toe: Less Toe In" },
                        { setting: "Rear Spring: Stiffer" },
                        { setting: "Rear Anti Roll Bar: Stiffer" },
                        { setting: "Front Upper Shock Mount: More Laid Down" },
                        { setting: "Rear Hub Height: Higher" },
                        { setting: "Weight Distribution: More Forward" }
                    ],

                    mediumGrip: [
                        { setting: "Ball / Gear Differential: Looser" },
                        { setting: "Rear Spring: Stiffer" },
                        { setting: "Rear Anti Roll Bar: Stiffer" },
                        { setting: "Front Upper Shock Mount: More Laid Down" },
                        { setting: "Rear Hub Height: Higher" }
                    ],

                    highGrip: [
                        { setting: "Ball / Gear Differential: Looser" },
                        { setting: "Rear Anti Roll Bar: Stiffer" },
                        { setting: "Front Upper Shock Mount: More Laid Down" },
                        { setting: "Rear Hub Height: Higher" }
                    ]
                }
            },

            {
                id: "reduceOversteer",
                name: "Reduce Oversteer (Loose)",

                trackConditions: {

                    lowGrip: [
                        { setting: "Ball / Gear Differential: Tighter" },
                        { setting: "Rear Toe: More Toe In" },
                        { setting: "Rear Anti Roll Bar: Softer" },
                        { setting: "Rear Spring: Softer" },
                        { setting: "Rear Upper Shock Mount: More Laid Down" },
                        { setting: "Rear Hub Height: Lower" },
                        { setting: "Weight Distribution: More Rearward" }
                    ],

                    mediumGrip: [
                        { setting: "Ball / Gear Differential: Tighter" },
                        { setting: "Rear Anti Roll Bar: Softer" },
                        { setting: "Rear Upper Shock Mount: More Laid Down" },
                        { setting: "Rear Spring: Softer" },
                        { setting: "Rear Hub Height: Lower" }
                    ],

                    highGrip: [
                        { setting: "Ball / Gear Differential: Tighter" },
                        { setting: "Rear Anti Roll Bar: Softer" },
                        { setting: "Rear Upper Shock Mount: More Laid Down" },
                        { setting: "Rear Hub Height: Lower" }
                    ]
                }
            }

        ]
    },

    {
        id: "straights",
        name: "Straights",

        sections: [

            {
                id: "increaseStability",
                name: "Increase Stability",

                trackConditions: {

                    lowGrip: [
                        { setting: "Rear Toe: More Toe In" },
                        { setting: "Ball / Gear Differential: Tighter" },
                        { setting: "Weight Distribution: More Rearward" },
                        { setting: "Rear Anti-Squat: More" },
                        { setting: "Rear Anti Roll Bar: Softer" }
                    ],

                    mediumGrip: [
                        { setting: "Rear Toe: More Toe In" },
                        { setting: "Ball / Gear Differential: Tighter" },
                        { setting: "Rear Anti-Squat: More" },
                        { setting: "Rear Anti Roll Bar: Softer" }
                    ],

                    highGrip: [
                        { setting: "Ball / Gear Differential: Tighter" },
                        { setting: "Rear Toe: More Toe In" },
                        { setting: "Rear Anti-Squat: More" }
                    ]
                }
            }

        ]
    },

    {
        id: "bumps",
        name: "Bumps",

        sections: [

            {
                id: "improveBumpHandling",
                name: "Improve Bump Handling",

                trackConditions: {

                    lowGrip: [
                        { setting: "Ride Height: Higher" },
                        { setting: "Spring Rate: Softer" },
                        { setting: "Shock Oil: Lighter" },
                        { setting: "Lower Shock Mount: More Laid Down" },
                        { setting: "Front Camber Link: Raise Inside" },
                        { setting: "Rear Camber Link: Raise Inside" },
                        { setting: "Rear Anti-Squat: Less" },
                        { setting: "Front Anti Roll Bar: Softer" }
                    ],

                    mediumGrip: [
                        { setting: "Ride Height: Higher" },
                        { setting: "Rear Spring: Softer" },
                        { setting: "Shock Oil: Lighter" },
                        { setting: "Lower Shock Mount: More Laid Down" },
                        { setting: "Front Camber Link: Raise Inside" },
                        { setting: "Rear Camber Link: Raise Inside" },
                        { setting: "Rear Anti-Squat: Less" },
                        { setting: "Front Anti Roll Bar: Softer" }
                    ],

                    highGrip: [
                        { setting: "Ride Height: Higher" },
                        { setting: "Shock Oil: Lighter" },
                        { setting: "Lower Shock Mount: More Laid Down" },
                        { setting: "Front Camber Link: Raise Inside" },
                        { setting: "Rear Camber Link: Raise Inside" },
                        { setting: "Rear Anti-Squat: Less" },
                        { setting: "Front Anti Roll Bar: Softer" }
                    ]
                }
            }

        ]
    },

    {
        id: "tractionRoll",
        name: "Traction Roll",

        sections: [

            {
                id: "reduceTractionRoll",
                name: "Reduce Traction Roll",

                trackConditions: {

                    lowGrip: [
                        { setting: "Ride Height: Lower" },
                        { setting: "Anti Roll Bars: Stiffer" },
                        { setting: "Spring Rate: Stiffer" },
                        { setting: "Shock Position: More Laid Down" },
                        { setting: "Rear Hub Height: Higher" }
                    ],

                    mediumGrip: [
                        { setting: "Ride Height: Lower" },
                        { setting: "Anti Roll Bars: Stiffer" },
                        { setting: "Spring Rate: Stiffer" },
                        { setting: "Shock Position: More Laid Down" },
                        { setting: "Rear Hub Height: Higher" }
                    ],

                    highGrip: [
                        { setting: "Ride Height: Lower" },
                        { setting: "Anti Roll Bars: Stiffer" },
                        { setting: "Shock Position: More Laid Down" },
                        { setting: "Rear Hub Height: Higher" },
                        { setting: "Spring Rate: Stiffer" }
                    ]
                }
            }

        ]
    }

]
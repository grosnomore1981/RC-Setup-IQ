export const handlingGuide = [
    {
    id: "cornerEntryOffPower",
    name: "Corner Entry / Off Power",

    sections: [

        {
            id: "reduceUndersteer",
            name: "Reduce Understeer (Push)",

            trackConditions: {

                lowGrip: [
                    { setting: "Front Anti Roll Bar: Softer" },
                    { setting: "Front Differential: Thinner" },
                    { setting: "Front Spring: Softer" },
                    { setting: "Front Ride Height: Lower" },
                    { setting: "Front Camber Link: Lower Outside" },
                    { setting: "Front Caster: Less" }
                ],

                mediumGrip: [
                    { setting: "Front Anti Roll Bar: Softer" },
                    { setting: "Front Differential: Thinner" },
                    { setting: "Front Spring: Softer" },
                    { setting: "Front Ride Height: Lower" },
                    { setting: "Front Camber Link: Lower Outside" },
                    { setting: "Front Caster: Less" }                    
                ],

                highGrip: [
                    { setting: "Front Differential: Thinner" },
                    { setting: "Front Anti Roll Bar: Softer" },
                    { setting: "Front Camber Link: Lower Outside" },
                    { setting: "Front Ride Height: Lower" },
                    { setting: "Front Caster: Less" }                    
                ]
            }
        },

        {
            id: "reduceOversteer",
            name: "Reduce Oversteer (Loose)",

            trackConditions: {

                lowGrip: [
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Rear Spring: Softer" },
                    { setting: "Front Differential: Thicker" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Rear Ride Height: Higher" },
                    { setting: "Front Caster: More" },                    
                ],

                mediumGrip: [
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Front Differential: Thicker" },
                    { setting: "Rear Spring: Softer" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Rear Ride Height: Higher" },
                    { setting: "Front Caster: More" }
                ],

                highGrip: [
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Front Differential: Thicker" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Rear Ride Height: Higher" },
                    { setting: "Front Caster: More" }
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
                    { setting: "Front Anti Roll Bar: Softer" },
                    { setting: "Front Spring: Softer" },
                    { setting: "Front Camber Link: Lower Outside" },
                    { setting: "Front Ride Height: Lower" },
                    { setting: "Front Camber: More Negative" },
                    { setting: "Front Caster: More" }
                ],

                mediumGrip: [
                    { setting: "Front Anti Roll Bar: Softer" },
                    { setting: "Front Spring: Softer" },
                    { setting: "Front Camber Link: Lower Outside" },
                    { setting: "Front Ride Height: Lower" },
                    { setting: "Front Camber: More Negative" },
                    { setting: "Front Caster: More" }
                ],

                highGrip: [
                    { setting: "Front Anti Roll Bar: Softer" },
                    { setting: "Front Camber Link: Lower Outside" },
                    { setting: "Front Ride Height: Lower" },
                    { setting: "Front Camber: More Negative" },
                    { setting: "Front Caster: More" }
                ]
            }
        },

        {
            id: "reduceOversteer",
            name: "Reduce Oversteer (Loose)",

            trackConditions: {

                lowGrip: [
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Rear Spring: Softer" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Rear Ride Height: Higher" },
                    { setting: "Rear Camber: Less Negative" },
                    { setting: "Front Caster: Less" }
                ],

                mediumGrip: [
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Rear Spring: Softer" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Rear Ride Height: Higher" },
                    { setting: "Rear Camber: Less Negative" },
                    { setting: "Front Caster: Less" }
                ],

                highGrip: [
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Rear Ride Height: Higher" },
                    { setting: "Rear Camber: Less Negative" },
                    { setting: "Front Caster: Less" }
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
                    { setting: "Front Differential: Thicker" },
                    { setting: "Rear Toe: Less Toe In" },
                    { setting: "Rear Anti Roll Bar: Stiffer" },
                    { setting: "Rear Ride Height: Lower" },
                    { setting: "Rear Camber Link: Raise Outside" },
                    { setting: "Front Caster: More" }
                ],

                mediumGrip: [
                    { setting: "Front Differential: Thicker" },
                    { setting: "Rear Toe: Less Toe In" },
                    { setting: "Rear Anti Roll Bar: Stiffer" },
                    { setting: "Rear Ride Height: Lower" },
                    { setting: "Rear Camber Link: Raise Outside" },
                    { setting: "Front Caster: More" }
                ],

                highGrip: [
                    { setting: "Front Differential: Thicker" },
                    { setting: "Rear Toe: Less Toe In" },
                    { setting: "Rear Anti Roll Bar: Stiffer" },
                    { setting: "Rear Camber Link: Raise Outside" },
                    { setting: "Front Caster: More" }
                ]
            }
        },

        {
            id: "reduceOversteer",
            name: "Reduce Oversteer (Loose)",

            trackConditions: {

                lowGrip: [
                    { setting: "Rear Toe: More Toe In" },
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Front Differential: Thinner" },
                    { setting: "Rear Spring: Softer" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Rear Ride Height: Higher" }
                ],

                mediumGrip: [
                    { setting: "Rear Toe: More Toe In" },
                    { setting: "Front Differential: Thinner" },
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Rear Spring: Softer" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Rear Ride Height: Higher" }
                ],

                highGrip: [
                    { setting: "Rear Toe: More Toe In" },
                    { setting: "Front Differential: Thinner" },
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Rear Ride Height: Higher" }
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
                    { setting: "Front Differential: Thicker" },
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Rear Ride Height: Higher" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Front Caster: More" }
                ],

                mediumGrip: [
                    { setting: "Rear Toe: More Toe In" },
                    { setting: "Front Differential: Thicker" },
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Rear Ride Height: Higher" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Front Caster: More" }
                ],

                highGrip: [
                    { setting: "Rear Toe: More Toe In" },
                    { setting: "Front Differential: Thicker" },
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Front Caster: More" }                    
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
                    { setting: "Shock Oil: Lighter" },
                    { setting: "Spring Rate: Softer" },
                    { setting: "Ride Height: Higher" },
                    { setting: "Droop: More" },
                    { setting: "Shock Position: More Laid Down" },
                    { setting: "Shock Piston: Larger Holes" }
                ],

                mediumGrip: [
                    { setting: "Shock Oil: Lighter" },
                    { setting: "Ride Height: Higher" },
                    { setting: "Spring Rate: Softer" },
                    { setting: "Droop: More" },
                    { setting: "Shock Position: More Laid Down" },
                    { setting: "Shock Piston: Larger Holes" }
                ],

                highGrip: [
                    { setting: "Ride Height: Higher" },
                    { setting: "Shock Oil: Lighter" },
                    { setting: "Droop: More" },
                    { setting: "Shock Position: More Laid Down" },
                    { setting: "Shock Piston: Larger Holes" }
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
                    { setting: "Front Anti Roll Bar: Stiffer" },
                    { setting: "Front Spring: Stiffer" },
                    { setting: "Front Camber Link: Raise Outside" },
                    { setting: "Front Differential: Thicker" }
                ],

                mediumGrip: [
                    { setting: "Front Anti Roll Bar: Stiffer" },
                    { setting: "Ride Height: Lower" },
                    { setting: "Front Spring: Stiffer" },
                    { setting: "Front Camber Link: Raise Outside" },
                    { setting: "Front Differential: Thicker" },
                    { setting: "Front Caster: Less" }
                ],

                highGrip: [
                    { setting: "Front Anti Roll Bar: Stiffer" },
                    { setting: "Ride Height: Lower" },
                    { setting: "Front Spring: Stiffer" },
                    { setting: "Front Differential: Thicker" },
                    { setting: "Front Camber Link: Raise Outside" },
                    { setting: "Front Caster: Less" }
                ]
            }
        }

    ]
}

]
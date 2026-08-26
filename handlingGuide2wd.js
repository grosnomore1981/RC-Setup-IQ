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
                    { setting: "Front Anti Roll Bar: Softer" },
                    { setting: "Ball / Gear Differential: Looser" },
                    { setting: "Front Camber Link: Lower Outside" },
                    { setting: "Front Spring: Softer" },
                    { setting: "Front Ride Height: Lower" },
                    { setting: "Front Toe: More Toe Out" },
                    { setting: "Weight Distribution: More Forward" }
                ],

                mediumGrip: [
                    { setting: "Front Anti Roll Bar: Softer" },
                    { setting: "Ball / Gear Differential: Looser" },
                    { setting: "Front Camber Link: Lower Outside" },
                    { setting: "Front Spring: Softer" },
                    { setting: "Front Ride Height: Lower" },
                    { setting: "Front Toe: More Toe Out" }
                ],

                highGrip: [
                    { setting: "Front Camber Link: Lower Outside" },
                    { setting: "Front Anti Roll Bar: Softer" },
                    { setting: "Front Ride Height: Lower" },
                    { setting: "Front Toe: More Toe Out" },
                    { setting: "Ball / Gear Differential: Looser" }
                ]
            }
        },

        {
            id: "reduceOversteer",
            name: "Reduce Oversteer (Loose)",

            trackConditions: {

                lowGrip: [
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Ball / Gear Differential: Tighter" },
                    { setting: "Rear Spring: Softer" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Rear Ride Height: Higher" },
                    { setting: "Weight Distribution: More Rearward" }
                ],

                mediumGrip: [
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Ball / Gear Differential: Tighter" },
                    { setting: "Rear Spring: Softer" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Rear Ride Height: Higher" }
                ],

                highGrip: [
                    { setting: "Ball / Gear Differential: Tighter" },
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Rear Camber Link: Lower Outside" },
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
                    { setting: "Front Anti Roll Bar: Softer" },
                    { setting: "Front Camber Link: Lower Outside" },
                    { setting: "Rear Hub Height: Higher" },
                    { setting: "Front Spring: Softer" },
                    { setting: "Ball / Gear Differential: Looser" },
                    { setting: "Weight Distribution: More Forward" }
                ],

                mediumGrip: [
                    { setting: "Front Anti Roll Bar: Softer" },
                    { setting: "Front Camber Link: Lower Outside" },
                    { setting: "Rear Hub Height: Higher" },
                    { setting: "Front Spring: Softer" },
                    { setting: "Ball / Gear Differential: Looser" }
                ],

                highGrip: [
                    { setting: "Front Camber Link: Lower Outside" },
                    { setting: "Front Anti Roll Bar: Softer" },
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
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Rear Hub Height: Lower" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Rear Spring: Softer" },
                    { setting: "Ball / Gear Differential: Tighter" },
                    { setting: "Weight Distribution: More Rearward" }
                ],

                mediumGrip: [
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Rear Hub Height: Lower" },
                    { setting: "Rear Camber Link: Lower Outside" },
                    { setting: "Ball / Gear Differential: Tighter" },
                    { setting: "Rear Spring: Softer" }
                ],

                highGrip: [
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Rear Hub Height: Lower" },
                    { setting: "Rear Camber Link: Lower Outside" },
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
                    { setting: "Rear Hub Height: Higher" },
                    { setting: "Ball / Gear Differential: Looser" },
                    { setting: "Rear Anti Roll Bar: Stiffer" },
                    { setting: "Rear Spring: Stiffer" },
                    { setting: "Weight Distribution: More Forward" }
                ],

                mediumGrip: [
                    { setting: "Rear Hub Height: Higher" },
                    { setting: "Ball / Gear Differential: Looser" },
                    { setting: "Rear Anti Roll Bar: Stiffer" },
                    { setting: "Rear Spring: Stiffer" }
                ],

                highGrip: [
                    { setting: "Rear Hub Height: Higher" },
                    { setting: "Ball / Gear Differential: Looser" },
                    { setting: "Rear Anti Roll Bar: Stiffer" }
                ]
            }
        },

        {
            id: "reduceOversteer",
            name: "Reduce Oversteer (Loose)",

            trackConditions: {

                lowGrip: [
                    { setting: "Ball / Gear Differential: Tighter" },
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Rear Spring: Softer" },
                    { setting: "Rear Hub Height: Lower" },
                    { setting: "Weight Distribution: More Rearward" }
                ],

                mediumGrip: [
                    { setting: "Ball / Gear Differential: Tighter" },
                    { setting: "Rear Anti Roll Bar: Softer" },
                    { setting: "Rear Spring: Softer" },
                    { setting: "Rear Hub Height: Lower" }
                ],

                highGrip: [
                    { setting: "Ball / Gear Differential: Tighter" },
                    { setting: "Rear Anti Roll Bar: Softer" },
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
                    { setting: "Weight Distribution: More Rearward" },
                    { setting: "Rear Anti-Squat: More" },
                    { setting: "Ball / Gear Differential: Tighter" },
                    { setting: "Rear Toe: More Toe In" },
                    { setting: "Rear Anti Roll Bar: Softer" }
                ],

                mediumGrip: [
                    { setting: "Ball / Gear Differential: Tighter" },
                    { setting: "Rear Anti-Squat: More" },
                    { setting: "Rear Toe: More Toe In" },
                    { setting: "Rear Anti Roll Bar: Softer" }
                ],

                highGrip: [
                    { setting: "Ball / Gear Differential: Tighter" },
                    { setting: "Rear Anti-Squat: More" },
                    { setting: "Rear Toe: More Toe In" }
                ]
            }
        },
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
                    { setting: "Front Anti Roll Bar: Softer" },
                    { setting: "Rear Hub Height: Lower" }
                ],

                mediumGrip: [
                    { setting: "Ride Height: Higher" },
                    { setting: "Rear Spring: Softer" },
                    { setting: "Shock Oil: Lighter" },
                    { setting: "Front Anti Roll Bar: Softer" },
                    { setting: "Rear Hub Height: Lower" }
                ],

                highGrip: [
                    { setting: "Ride Height: Higher" },
                    { setting: "Shock Oil: Lighter" },
                    { setting: "Front Anti Roll Bar: Softer" },
                    { setting: "Rear Hub Height: Lower" }
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
                    { setting: "Anti Roll Bars: Stiffer" },
                    { setting: "Spring Rate: Stiffer" },
                    { setting: "Ride Height: Lower" },
                    { setting: "Rear Hub Height: Higher" }
                ],

                mediumGrip: [
                    { setting: "Anti Roll Bars: Stiffer" },
                    { setting: "Ride Height: Lower" },
                    { setting: "Spring Rate: Stiffer" },
                    { setting: "Rear Hub Height: Higher" }
                ],

                highGrip: [
                    { setting: "Anti Roll Bars: Stiffer" },
                    { setting: "Ride Height: Lower" },
                    { setting: "Rear Hub Height: Higher" },
                    { setting: "Spring Rate: Stiffer" },
                ]
            }
        },
    ]
},


]
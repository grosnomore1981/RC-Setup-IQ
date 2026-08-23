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
                    {
                        setting: "Front Anti Roll Bar: Softer"
                    },
                    {
                        setting: "Front Caster: Less"
                    },
                    {
                        setting: "Front Differential: Thinner"
                    },
                    {
                        setting: "Front Spring: Softer"
                    }
                ],

                mediumGrip: [
                    {
                        setting: "Front Caster: Less"
                    },
                    {
                        setting: "Front Anti Roll Bar: Softer"
                    },
                    {
                        setting: "Front Differential: Thinner"
                    },
                    {
                        setting: "Front Spring: Softer"
                    }
                ],

                highGrip: [
                    {
                        setting: "Front Caster: Less"
                    },
                    {
                        setting: "Front Anti Roll Bar: Softer"
                    },
                    {
                        setting: "Front Differential: Thinner"
                    }
                ]
            }
        },

        {
            id: "reduceOversteer",
            name: "Reduce Oversteer (Loose)",

            trackConditions: {

                lowGrip: [
                    {
                        setting: "Rear Anti Roll Bar: Softer"
                    },
                    {
                        setting: "Front Caster: More"
                    },
                    {
                        setting: "Rear Spring: Softer"
                    },
                    {
                        setting: "Front Differential: Thicker"
                    }
                ],

                mediumGrip: [
                    {
                        setting: "Front Caster: More"
                    },
                    {
                        setting: "Rear Anti Roll Bar: Softer"
                    },
                    {
                        setting: "Front Differential: Thicker"
                    },
                    {
                        setting: "Rear Spring: Softer"
                    }
                ],

                highGrip: [
                    {
                        setting: "Front Caster: More"
                    },
                    {
                        setting: "Rear Anti Roll Bar: Softer"
                    },
                    {
                        setting: "Front Differential: Thicker"
                    }
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
                    {
                        setting: "Front Anti Roll Bar: Softer"
                    },
                    {
                        setting: "Front Spring: Softer"
                    },
                    {
                        setting: "Front Caster: More"
                    },
                    {
                        setting: "Rear Anti Roll Bar: Stiffer"
                    }
                ],

                mediumGrip: [
                    {
                        setting: "Front Anti Roll Bar: Softer"
                    },
                    {
                        setting: "Front Caster: More"
                    },
                    {
                        setting: "Front Spring: Softer"
                    },
                    {
                        setting: "Rear Anti Roll Bar: Stiffer"
                    }
                ],

                highGrip: [
                    {
                        setting: "Front Anti Roll Bar: Softer"
                    },
                    {
                        setting: "Front Caster: More"
                    },
                    {
                        setting: "Rear Anti Roll Bar: Stiffer"
                    }
                ]
            }
        },

        {
            id: "reduceOversteer",
            name: "Reduce Oversteer (Loose)",

            trackConditions: {

                lowGrip: [
                    {
                        setting: "Rear Anti Roll Bar: Softer"
                    },
                    {
                        setting: "Rear Spring: Softer"
                    },
                    {
                        setting: "Front Anti Roll Bar: Stiffer"
                    },
                    {
                        setting: "Front Caster: Less"
                    }
                ],

                mediumGrip: [
                    {
                        setting: "Rear Anti Roll Bar: Softer"
                    },
                    {
                        setting: "Front Anti Roll Bar: Stiffer"
                    },
                    {
                        setting: "Rear Spring: Softer"
                    },
                    {
                        setting: "Front Caster: Less"
                    }
                ],

                highGrip: [
                    {
                        setting: "Rear Anti Roll Bar: Softer"
                    },
                    {
                        setting: "Front Anti Roll Bar: Stiffer"
                    },
                    {
                        setting: "Front Caster: Less"
                    }
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
                    {
                        setting: "Front Differential: Thicker"
                    },
                    {
                        setting: "Rear Toe: Less Toe In"
                    },
                    {
                        setting: "Front Caster: More"
                    },
                    {
                        setting: "Rear Anti Roll Bar: Stiffer"
                    }
                ],

                mediumGrip: [
                    {
                        setting: "Front Differential: Thicker"
                    },
                    {
                        setting: "Front Caster: More"
                    },
                    {
                        setting: "Rear Toe: Less Toe In"
                    },
                    {
                        setting: "Rear Anti Roll Bar: Stiffer"
                    }
                ],

                highGrip: [
                    {
                        setting: "Front Differential: Thicker"
                    },
                    {
                        setting: "Front Caster: More"
                    },
                    {
                        setting: "Rear Toe: Less Toe In"
                    }
                ]
            }
        },

        {
            id: "reduceOversteer",
            name: "Reduce Oversteer (Loose)",

            trackConditions: {

                lowGrip: [
                    {
                        setting: "Rear Toe: More Toe In"
                    },
                    {
                        setting: "Rear Anti Roll Bar: Softer"
                    },
                    {
                        setting: "Front Differential: Thinner"
                    },
                    {
                        setting: "Rear Spring: Softer"
                    }
                ],

                mediumGrip: [
                    {
                        setting: "Rear Toe: More Toe In"
                    },
                    {
                        setting: "Front Differential: Thinner"
                    },
                    {
                        setting: "Rear Anti Roll Bar: Softer"
                    },
                    {
                        setting: "Rear Spring: Softer"
                    }
                ],

                highGrip: [
                    {
                        setting: "Rear Toe: More Toe In"
                    },
                    {
                        setting: "Front Differential: Thinner"
                    },
                    {
                        setting: "Rear Anti Roll Bar: Softer"
                    }
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
                    {
                        setting: "Front Caster: More"
                    },
                    {
                        setting: "Rear Toe: More Toe In"
                    },
                    {
                        setting: "Front Differential: Thicker"
                    },
                    {
                        setting: "Rear Anti Roll Bar: Softer"
                    }
                ],

                mediumGrip: [
                    {
                        setting: "Front Caster: More"
                    },
                    {
                        setting: "Rear Toe: More Toe In"
                    },
                    {
                        setting: "Front Differential: Thicker"
                    }
                ],

                highGrip: [
                    {
                        setting: "Front Caster: More"
                    },
                    {
                        setting: "Rear Toe: More Toe In"
                    },
                    {
                        setting: "Front Differential: Thicker"
                    }
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
                    {
                        setting: "Shock Oil: Lighter"
                    },
                    {
                        setting: "Spring Rate: Softer"
                    },
                    {
                        setting: "Ride Height: Higher"
                    },
                    {
                        setting: "Droop: More"
                    }
                ],

                mediumGrip: [
                    {
                        setting: "Shock Oil: Lighter"
                    },
                    {
                        setting: "Ride Height: Higher"
                    },
                    {
                        setting: "Spring Rate: Softer"
                    },
                    {
                        setting: "Droop: More"
                    }
                ],

                highGrip: [
                    {
                        setting: "Ride Height: Higher"
                    },
                    {
                        setting: "Shock Oil: Lighter"
                    },
                    {
                        setting: "Droop: More"
                    }
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
                    {
                        setting: "Ride Height: Lower"
                    },
                    {
                        setting: "Front Anti Roll Bar: Stiffer"
                    },
                    {
                        setting: "Front Spring: Stiffer"
                    }
                ],

                mediumGrip: [
                    {
                        setting: "Front Anti Roll Bar: Stiffer"
                    },
                    {
                        setting: "Ride Height: Lower"
                    },
                    {
                        setting: "Front Caster: Less"
                    },
                    {
                        setting: "Front Spring: Stiffer"
                    }
                ],

                highGrip: [
                    {
                        setting: "Front Anti Roll Bar: Stiffer"
                    },
                    {
                        setting: "Front Caster: Less"
                    },
                    {
                        setting: "Ride Height: Lower"
                    },
                    {
                        setting: "Front Spring: Stiffer"
                    },
                    {
                        setting: "Front Differential: Thicker"
                    }
                ]
            }
        }

    ]
}

]
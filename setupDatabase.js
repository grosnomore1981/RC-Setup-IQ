export const setupDatabase = [

   {
    id: "frontRideHeight",

    name: "Front Ride Height",

    category: "Ride Height",

    increaseTitle: "Raise Front Ride Height",
    decreaseTitle: "Lower Front Ride Height",

    whatItIs:
        "Front Ride Height is the distance between the front of the chassis and the ground when the vehicle is at its natural settled position. Changing front ride height alters chassis attitude, front weight transfer characteristics, and steering balance.",

    whyItMatters:
        "Front ride height influences steering aggressiveness, front grip, stability, weight transfer, and overall vehicle balance. Small changes can significantly alter how responsive or forgiving the front end feels.",

    increase: {

        effects: [
            "Raises the front of the chassis",
            "Increases front weight transfer",
            "Generally increases front grip",
            "Generally smooths steering response",
            "Can improve corner entry stability",
            "Can make the vehicle feel calmer",
            "Can improve consistency in low-grip conditions"
        ],

        benefits: [
            "Increased front traction",
            "Improved corner entry stability",
            "More forgiving handling",
            "Improved consistency",
            "Can improve performance on lower-grip tracks"
        ],

        drawbacks: [
            "Reduces steering aggressiveness",
            "Can slow initial turn-in",
            "May reduce responsiveness",
            "Can make the vehicle feel less precise"
        ]
    },

    decrease: {

        effects: [
            "Lowers the front of the chassis",
            "Reduces front weight transfer",
            "Generally increases steering aggressiveness",
            "Generally increases steering response",
            "Can improve turn-in speed",
            "Can make the vehicle react more quickly",
            "Can increase front-end precision"
        ],

        benefits: [
            "Improved steering response",
            "Faster turn-in",
            "More aggressive front-end feel",
            "Improved precision",
            "Can improve performance on high-grip tracks"
        ],

        drawbacks: [
            "Can reduce front grip",
            "Can reduce stability",
            "May make the vehicle feel nervous",
            "Can make the vehicle less forgiving"
        ]
    },

    tradeOffs: [
        "Higher front ride height generally increases front grip and stability but reduces steering aggressiveness.",
        "Lower front ride height generally increases steering response and precision but reduces front grip.",
        "Front ride height is often used to fine-tune steering balance after tires, springs, and ride height baseline settings are established.",
        "Small front ride height changes can produce noticeable handling differences."
    ],

    quickSummary:
        "Higher Front Ride Height generally increases front grip, stability, and forgiveness but reduces steering aggressiveness. Lower Front Ride Height generally increases steering response, turn-in speed, and precision but reduces front grip and stability."
},

   {
    id: "rearRideHeight",

    name: "Rear Ride Height",

    category: "Ride Height",

    increaseTitle: "Raise Rear Ride Height",
    decreaseTitle: "Lower Rear Ride Height",

    whatItIs:
        "Rear Ride Height is the distance between the rear of the chassis and the ground when the vehicle is at its natural settled position. Changing rear ride height alters chassis attitude, rear weight transfer characteristics, and overall vehicle rotation.",

    whyItMatters:
        "Rear ride height influences rear grip, stability, vehicle rotation, steering balance, and overall handling responsiveness. Small changes can significantly alter how aggressive or planted the vehicle feels.",

    increase: {

        effects: [
            "Raises the rear of the chassis",
            "Increases rear weight transfer",
            "Generally increases vehicle rotation",
            "Generally increases steering",
            "Can free up the rear end",
            "Can improve direction changes",
            "Can make the vehicle feel more responsive"
        ],

        benefits: [
            "Improved rotation",
            "More steering",
            "Quicker direction changes",
            "Improved responsiveness",
            "Can reduce rear push"
        ],

        drawbacks: [
            "Can reduce rear stability",
            "Can reduce rear traction",
            "May make the vehicle feel nervous",
            "Can make the vehicle harder to drive consistently"
        ]
    },

    decrease: {

        effects: [
            "Lowers the rear of the chassis",
            "Reduces rear weight transfer",
            "Generally increases rear grip",
            "Generally increases stability",
            "Generally reduces vehicle rotation",
            "Can improve forward traction",
            "Can make the vehicle feel more planted"
        ],

        benefits: [
            "Increased rear traction",
            "Improved stability",
            "More forgiving handling",
            "Improved consistency",
            "Can improve performance on lower-grip tracks"
        ],

        drawbacks: [
            "Reduces steering",
            "Reduces vehicle rotation",
            "Can make the vehicle feel slower to change direction",
            "May increase rear push"
        ]
    },

    tradeOffs: [
        "Higher rear ride height generally increases steering and rotation but reduces rear grip and stability.",
        "Lower rear ride height generally increases rear grip and stability but reduces steering and rotation.",
        "Rear ride height is often used to fine-tune vehicle balance after major setup changes have been completed.",
        "Small rear ride height changes can produce noticeable handling differences."
    ],

    quickSummary:
        "Higher Rear Ride Height generally increases steering, rotation, and responsiveness but reduces rear grip and stability. Lower Rear Ride Height generally increases rear traction, stability, and consistency but reduces steering and vehicle rotation."
},

    {
    id: "frontToe",

    name: "Front Toe",

    category: "Geometry",

    increaseTitle: "Increase Positive Front Toe-Out",
    decreaseTitle: "Decrease Positive Front Toe-Out",

    whatItIs:
        "Front toe refers to the angle of the front tires when viewed from above. RC vehicles use front toe-out, meaning the fronts of the tires point slightly away from each other. Typical front toe-out settings are usually between 1 and 3 degrees.",

    whyItMatters:
        "Front toe affects steering response, stability, cornering smoothness, and straight-line efficiency. It influences how quickly the vehicle reacts to steering inputs and how stable it feels at speed.",

    increase: {

        effects: [
            "Increases front toe-out",
            "Generally smooths initial steering response",
            "Generally reduces steering sensitivity around center",
            "Can improve stability in sweeping corners",
            "Generally reduces overall steering"
        ],

        benefits: [
            "More predictable steering response",
            "Improved high-speed stability",
            "Smoother cornering feel",
            "Can make the vehicle feel more predictable"
        ],

        drawbacks: [
            "Reduces overall steering",
            "Can make the vehicle feel less responsive",
            "Excessive toe-out can scrub speed",
            "Excessive toe-out can reduce straight-line efficiency"
        ]
    },

    decrease: {

        effects: [
            "Decreases front toe-out",
            "Generally increases steering response",
            "Generally increases steering sensitivity",
            "Can increase steering aggressiveness",
            "Reduces tire scrub"
        ],

        benefits: [
            "Improved steering response",
            "More aggressive steering feel",
            "Can improve steering precision",
            "Improved straight-line efficiency"
        ],

        drawbacks: [
            "Reduced steering stability",
            "Can make the vehicle feel nervous or twitchy",
            "May be harder to drive smoothly at high speed",
            "Can reduce consistency on high-grip tracks"
        ]
    },

    tradeOffs: [
        "More front toe-out generally increases stability but reduces steering response.",
        "Less front toe-out generally increases steering response but reduces stability.",
        "Excessive toe-out can reduce vehicle efficiency by increasing tire scrub and drag."
    ],

    quickSummary:
        "More front toe-out generally produces smoother steering and greater stability but less overall steering. Less front toe-out generally produces quicker steering response and a more aggressive steering feel but can make the vehicle feel less stable and more reactive to driver inputs."
    },

    {
    id: "rearToe",

    name: "Rear Toe",

    category: "Geometry",

    increaseTitle: "Increase Negative Rear Toe-In",
    decreaseTitle: "Decrease Negative Rear Toe-In",

    whatItIs:
        "Rear toe refers to the angle of the rear tires when viewed from above. RC vehicles use rear toe-in, meaning the fronts of the rear tires point slightly toward each other. Rear toe can be adjusted through inboard toe at the suspension mounts and, on many vehicles, additional toe at the rear hub.",

    whyItMatters:
        "Rear toe is one of the most influential rear grip and stability adjustments on the vehicle. It affects rear grip characteristics, stability, vehicle rotation, corner speed, and overall vehicle confidence.",

    increase: {

        effects: [
            "Generally increases rear grip characteristics",
            "Generally increases rear stability",
            "Generally reduces vehicle rotation",
            "Can make the vehicle feel easier to drive",
            "Can make the rear end feel more secure",
            "Can increase rollover tendency in some situations"
        ],

        benefits: [
            "Improved rear stability",
            "More secure rear-end feel",
            "More forgiving handling characteristics",
            "More predictable rear-end behavior"
        ],

        drawbacks: [
            "Reduces vehicle rotation",
            "Can reduce corner speed potential",
            "Can make the vehicle feel less free through corners",
            "May increase rollover tendency"
        ]
    },

    decrease: {

        effects: [
            "Generally reduces rear grip characteristics",
            "Generally reduces rear stability",
            "Generally increases vehicle rotation",
            "Can increase corner speed potential",
            "Can make the vehicle feel more free and agile",
            "Can make the rear end feel less secure"
        ],

        benefits: [
            "Increased vehicle rotation",
            "Higher corner speed potential",
            "Freer vehicle rotation",
            "More responsive handling characteristics"
        ],

        drawbacks: [
            "Reduced rear stability",
            "Can make the rear end feel loose",
            "Less forgiving handling",
            "May be harder to drive consistently"
        ]
    },

    tradeOffs: [
        "More rear toe generally increases rear stability but reduces vehicle rotation and corner speed potential.",
        "Less rear toe generally increases vehicle rotation and corner speed potential but reduces rear stability.",
        "Higher rear toe typically produces a more forgiving vehicle, while lower rear toe typically produces a more aggressive vehicle."
    ],

    quickSummary:
        "More rear toe generally provides greater rear stability, a more secure rear-end feel, and a more forgiving driving experience, but reduces vehicle rotation and corner speed potential. Less rear toe generally provides more rotation, freer handling, and higher corner speed potential, but reduces rear stability and forgiveness."
    },

    {
    id: "frontCaster",

    name: "Front Caster",

    category: "Geometry",

    whatItIs:
        "Caster is the angle between the steering axis (king pin axis) and vertical when viewed from the side of the vehicle. All RC vehicles use positive caster, meaning the top of the steering axis is positioned further rearward than the bottom. Caster is typically adjusted through the front hub, caster block, or upper suspension arm mounting positions.",

    whyItMatters:
        "Caster influences steering response, steering consistency, straight-line stability, bump handling, cornering balance, and how the front tires generate grip as they are steered. It affects both the contact patch and camber gain of the front tires during steering movement.",

    increase: {

        effects: [
            "Reduces corner entry steering",
            "Increases mid-corner steering",
            "Increases on-power steering",
            "Produces smoother and more consistent steering",
            "Improves steering in long sweeping corners",
            "Increases straight-line stability",
            "Improves stability in bumps",
            "Increases the self-centering effect of the steering"
        ],

        benefits: [
            "More predictable handling",
            "Greater stability on rough tracks",
            "Improved confidence at high speed",
            "More consistent steering throughout the corner",
            "Better performance in long sweeping corners"
        ],

        drawbacks: [
            "Reduced corner entry steering",
            "Reduced low-speed responsiveness",
            "Can feel less precise in tight sections"
        ]
    },

    decrease: {

        effects: [
            "Increases corner entry steering",
            "Makes steering more responsive",
            "Makes the vehicle feel more aggressive",
            "Produces a more precise front end",
            "Reduces mid-corner steering",
            "Reduces on-power steering",
            "Reduces bump stability",
            "Reduces straight-line stability"
        ],

        benefits: [
            "Improved response in tight corners",
            "More aggressive turn-in",
            "More precise steering feel"
        ],

        drawbacks: [
            "Can feel twitchy or edgy",
            "May be harder to drive on rough tracks",
            "Less forgiving at high speed",
            "Can reduce steering consistency"
        ]
    },

    tradeOffs: [
        "More caster generally reduces corner entry steering but increases mid-corner and on-power steering.",
        "More caster generally improves stability but reduces steering responsiveness.",
        "Less caster generally increases steering responsiveness but reduces stability."
    ],

    quickSummary:
        "More caster generally produces a calmer, smoother, and more stable vehicle with increased mid-corner and on-power steering. Less caster generally produces a more aggressive and responsive vehicle with stronger corner entry steering but reduced stability."
    },

    {
    id: "frontKickUp",

    name: "Front Kick Up",

    category: "Geometry",

    whatItIs:
        "Front kick up is the upward angle of the front suspension arms relative to the chassis when viewed from the side. It is created when the front suspension mounting point is positioned higher than the rear mounting point of the front arm. Front kick up is typically adjusted through suspension inserts, mounting blocks, or chassis geometry.",

    whyItMatters:
        "Front kick up affects steering timing, weight transfer, bump handling, jump handling, chassis attitude during acceleration and braking, and overall front-end feel. It also contributes to the vehicle's effective caster geometry.",

    increase: {

        effects: [
            "Increases front suspension angle",
            "Allows more front-end rise during acceleration",
            "Allows more front-end dive during braking",
            "Reduces corner entry steering response",
            "Increases mid-corner steering",
            "Increases corner exit steering",
            "Can improve bump handling",
            "Can improve jump handling",
            "Can make the front end feel softer"
        ],

        benefits: [
            "Improved bump compliance",
            "Better jump-face stability",
            "Smoother steering characteristics",
            "More steering through the middle and exit of the corner",
            "More forgiving front-end behavior"
        ],

        drawbacks: [
            "Reduced steering response entering corners",
            "Less precise front-end feel",
            "Can feel slower to react to steering inputs",
            "Increased chassis movement during acceleration and braking"
        ]
    },

    decrease: {

        effects: [
            "Decreases front suspension angle",
            "Reduces front-end rise during acceleration",
            "Reduces front-end dive during braking",
            "Increases corner entry steering response",
            "Reduces mid-corner steering",
            "Reduces corner exit steering",
            "Can reduce bump compliance",
            "Can reduce jump handling performance",
            "Can make the front end feel firmer"
        ],

        benefits: [
            "More responsive steering",
            "Improved corner entry precision",
            "More direct front-end feel",
            "Reduced chassis movement during acceleration and braking"
        ],

        drawbacks: [
            "Reduced bump handling capability",
            "Can feel harsher on rough surfaces",
            "Less forgiving front-end behavior",
            "Reduced steering through the middle and exit of the corner"
        ]
    },

    tradeOffs: [
        "More front kick up generally reduces corner entry steering but increases mid-corner and corner exit steering.",
        "More front kick up generally improves bump and jump handling but reduces steering responsiveness.",
        "Less front kick up generally improves steering precision and responsiveness but reduces compliance over rough surfaces."
    ],

    quickSummary:
        "More front kick up generally produces a softer, more forgiving front end with improved bump handling and increased mid-corner and corner exit steering. Less front kick up generally produces a firmer, more responsive front end with stronger corner entry steering and greater steering precision."
    },

    {
    id: "rearAntiSquat",

    name: "Rear Anti-Squat",

    category: "Geometry",

    whatItIs:
        "Rear anti-squat is the upward angle of the rear suspension arms relative to the chassis when viewed from the side. It is created when the front mounting point of the rear arm is positioned higher than the rear mounting point. Anti-squat is typically adjusted through suspension inserts, mounting blocks, or chassis geometry.",

    whyItMatters:
        "Rear anti-squat affects weight transfer under acceleration, rear suspension compliance, corner entry rotation, acceleration response, bump handling, and jump characteristics. It is one of the most influential rear suspension geometry adjustments on the vehicle.",

    increase: {

        effects: [
            "Increases rear suspension angle",
            "Reduces rear suspension squat during acceleration",
            "Increases acceleration response",
            "Increases corner entry rotation",
            "Can make the rear suspension feel firmer",
            "Can increase jump-face pop",
            "Reduces rear suspension compliance over bumps"
        ],

        benefits: [
            "More responsive acceleration feel",
            "Increased corner entry rotation",
            "More direct rear-end response",
            "Reduced chassis squat under power"
        ],

        drawbacks: [
            "Reduced bump compliance",
            "Can reduce rear grip on rough surfaces",
            "Can make the rear suspension feel less forgiving",
            "May reduce consistency in difficult track conditions"
        ]
    },

    decrease: {

        effects: [
            "Decreases rear suspension angle",
            "Allows more rear suspension squat during acceleration",
            "Reduces acceleration response",
            "Reduces corner entry rotation",
            "Can make the rear suspension feel softer",
            "Increases rear suspension compliance",
            "Improves the suspension's ability to follow uneven surfaces"
        ],

        benefits: [
            "Improved bump handling",
            "Increased rear grip characteristics",
            "More compliant rear suspension",
            "More forgiving vehicle behavior"
        ],

        drawbacks: [
            "Reduced corner entry rotation",
            "Less responsive acceleration feel",
            "Increased chassis squat under power",
            "Can feel less direct during rapid direction changes"
        ]
    },

    tradeOffs: [
        "More anti-squat generally increases acceleration response and corner entry rotation but reduces suspension compliance.",
        "Less anti-squat generally increases rear suspension compliance and grip characteristics but reduces rotation and acceleration response.",
        "More anti-squat typically produces a more responsive rear end, while less anti-squat typically produces a more compliant and forgiving rear end."
    ],

    quickSummary:
        "More rear anti-squat generally produces a firmer, more responsive rear end with increased acceleration response and corner entry rotation, but reduced bump compliance. Less rear anti-squat generally produces a softer, more compliant rear end with increased grip characteristics and improved rough-surface behavior, but reduced rotation and acceleration response."
    },

    {
    id: "frontCamber",

    name: "Front Camber",

    category: "Geometry",

    increaseTitle: "Add Negative Front Camber",
    decreaseTitle: "Reduce Negative Front Camber",

    whatItIs:
        "Front camber is the inward or outward tilt of the front tires when viewed from the front of the vehicle. Negative camber means the tops of the tires lean inward toward the centerline of the vehicle. RC vehicles typically run small amounts of negative front camber.",

    whyItMatters:
        "Front camber affects steering feel, steering consistency, tire contact during cornering, and overall front-end behavior. Small changes can significantly alter how the steering responds throughout the corner.",

    increase: {

        effects: [
            "Increases negative front camber",
            "Can make steering feel less linear",
            "Can create a point where steering becomes more aggressive during cornering",
            "Reduces side bite",
            "Can smooth steering response before peak steering is reached",
            "Reduces the front tire contact patch during straight-line driving"
        ],

        benefits: [
            "Can smooth initial steering feel",
            "Can reduce the tendency to catch ruts",
            "Can reduce the tendency to traction roll",
            "Can improve tire contact during cornering"
        ],

        drawbacks: [
            "Can make steering feel inconsistent",
            "Can create a steering 'grab' point during cornering",
            "Reduces forward bite",
            "Can increase uneven tire wear"
        ]
    },

    decrease: {

        effects: [
            "Decreases negative front camber",
            "Can make steering feel more linear",
            "Can make steering feel safer and more predictable",
            "Increases side bite",
            "Increases the front tire contact patch during straight-line driving",
            "Increases forward bite"
        ],

        benefits: [
            "More consistent steering feel",
            "More predictable steering response",
            "Improved forward bite",
            "Improved acceleration efficiency"
        ],

        drawbacks: [
            "Can increase the tendency to catch bumps and ruts",
            "Can increase the tendency to traction roll",
            "May reduce tire contact during cornering"
        ]
    },

    tradeOffs: [
        "More negative front camber generally reduces side bite and can smooth steering response, but may make steering feel less linear.",
        "Less negative front camber generally increases side bite and forward bite, but can make the vehicle more reactive to bumps and ruts.",
        "Front camber is often adjusted to achieve the desired steering feel rather than to maximize grip."
    ],

    quickSummary:
        "More negative front camber generally reduces side bite and can smooth steering response, but may create a less linear steering feel. Less negative front camber generally increases side bite, forward bite, and steering consistency, but can make the vehicle more reactive to bumps and ruts."
    },

    {
    id: "rearCamber",

    name: "Rear Camber",

    category: "Geometry",

    increaseTitle: "Add Negative Rear Camber",
    decreaseTitle: "Reduce Negative Rear Camber",

    whatItIs:
        "Rear camber is the inward or outward tilt of the rear tires when viewed from the front or rear of the vehicle. Negative camber means the tops of the tires lean inward toward the centerline of the vehicle. RC vehicles typically run negative rear camber to optimize tire contact during cornering.",

    whyItMatters:
        "Rear camber affects rear grip characteristics, cornering behavior, vehicle rotation, corner speed, forward bite, and overall rear-end stability. Small changes can significantly alter how secure or free the rear of the vehicle feels during cornering.",

    increase: {

        effects: [
            "Increases negative rear camber",
            "Reduces side bite",
            "Reduces forward bite",
            "Can improve tire contact during cornering",
            "Can make the rear end feel freer during cornering",
            "Can increase vehicle rotation",
            "Can smooth rear-end behavior through corners"
        ],

        benefits: [
            "Can improve cornering smoothness",
            "Can increase vehicle rotation",
            "Can improve corner speed potential",
            "Can help maintain a smoother cornering arc",
            "Can make the vehicle feel more settled while cornering"
        ],

        drawbacks: [
            "Reduces forward bite",
            "Can reduce acceleration performance",
            "Can make the rear end feel looser",
            "Can increase uneven tire wear"
        ]
    },

    decrease: {

        effects: [
            "Decreases negative rear camber",
            "Increases side bite",
            "Increases forward bite",
            "Can increase rear-end stability",
            "Can make the rear end feel more secure",
            "Can reduce vehicle rotation",
            "Can increase rear grip characteristics"
        ],

        benefits: [
            "Improved forward bite",
            "Improved acceleration performance",
            "More secure rear-end feel",
            "Increased rear stability",
            "Can make the vehicle easier to drive consistently"
        ],

        drawbacks: [
            "Can reduce corner speed potential",
            "Can reduce vehicle rotation",
            "May be more sensitive to bumps and ruts",
            "May not feel as smooth through long corners"
        ]
    },

    tradeOffs: [
        "More negative rear camber generally increases cornering freedom and rotation but reduces forward bite.",
        "Less negative rear camber generally increases rear stability and forward bite but reduces rotation.",
        "Rear camber balances cornering performance against rear-end security and acceleration performance."
    ],

    quickSummary:
        "More negative rear camber generally produces a freer rear end with increased rotation and corner speed potential, but reduces forward bite and acceleration. Less negative rear camber generally produces a more secure rear end with increased stability and forward bite, but reduces rotation and cornering freedom."
    },

    {
    id: "frontCamberLink",

    name: "Front Camber Link",

    category: "Geometry",

    whatItIs:
        "The Front Camber Link and its mounting positions influence front roll center height, camber gain, chassis roll, steering response, and front grip generation.",

    whyItMatters:
        "Changing the front camber link mounting positions is one of the primary methods of tuning front roll center height and front-end behavior.",

    adjustments: [

        {
            title: "Raise Inside",

            effects: [
                "Lowers front roll center",
                "Reduces camber gain",
                "Increases chassis roll",
                "Generally increases front grip",
                "Generally smooths steering response"
            ],

            benefits: [
                "Increased front traction",
                "Improved consistency",
                "More forgiving handling"
            ],

            drawbacks: [
                "Reduced steering response",
                "Less aggressive corner entry"
            ]
        },

        {
            title: "Lower Inside",

            effects: [
                "Raises front roll center",
                "Increases camber gain",
                "Reduces chassis roll",
                "Generally increases steering response",
                "Generally increases side bite"
            ],

            benefits: [
                "Improved steering response",
                "More aggressive corner entry",
                "Increased front-end precision"
            ],

            drawbacks: [
                "Reduced front traction",
                "Can feel nervous on low grip"
            ]
        },

        {
            title: "Raise Outside",

            effects: [
                "Raises front roll center",
                "Increases camber gain",
                "Reduces chassis roll",
                "Generally increases steering response",
                "Generally increases front-end precision"
            ],

            benefits: [
                "Improved steering response",
                "Reduced chassis roll",
                "Can reduce traction roll"
            ],

            drawbacks: [
                "Can reduce front grip",
                "Can reduce forgiveness"
            ]
        },

        {
            title: "Lower Outside",

            effects: [
                "Lowers front roll center",
                "Reduces camber gain",
                "Increases chassis roll",
                "Generally increases front grip",
                "Generally smooths steering response"
            ],

            benefits: [
                "Increased front traction",
                "Improved consistency",
                "More forgiving handling"
            ],

            drawbacks: [
                "Reduced steering response",
                "May increase traction roll"
            ]
        }

    ],

    tradeOffs: [
        "Higher roll center generally increases steering response but reduces front grip.",
        "Lower roll center generally increases front grip but reduces steering response.",
        "Changes affect both roll center height and camber gain simultaneously."
    ],

    quickSummary:
        "Lower Inside or Raise Outside generally increases steering response. Raise Inside or Lower Outside generally increases front grip and forgiveness."
    },

    {
    id: "rearCamberLink",

    name: "Rear Camber Link",

    category: "Geometry",

    whatItIs:
        "The Rear Camber Link and its mounting positions influence rear roll center height, camber gain, chassis roll, rear grip generation, stability, and vehicle rotation.",

    whyItMatters:
        "Changing the rear camber link mounting positions is one of the primary methods of tuning rear roll center height and rear-end behavior.",

    adjustments: [

        {
            title: "Raise Inside",

            effects: [
                "Lowers rear roll center",
                "Reduces camber gain",
                "Increases chassis roll",
                "Generally increases rear grip",
                "Generally increases stability"
            ],

            benefits: [
                "Increased rear traction",
                "Improved rear stability",
                "Improved consistency"
            ],

            drawbacks: [
                "Reduced rotation",
                "Reduced responsiveness"
            ]
        },

        {
            title: "Lower Inside",

            effects: [
                "Raises rear roll center",
                "Increases camber gain",
                "Reduces chassis roll",
                "Generally increases rotation",
                "Generally increases responsiveness"
            ],

            benefits: [
                "Improved rotation",
                "Quicker direction changes",
                "Can reduce rear push"
            ],

            drawbacks: [
                "Reduced rear traction",
                "Can reduce stability"
            ]
        },

        {
            title: "Raise Outside",

            effects: [
                "Raises rear roll center",
                "Increases camber gain",
                "Reduces chassis roll",
                "Generally increases rotation",
                "Generally increases responsiveness"
            ],

            benefits: [
                "Improved rotation",
                "Reduced chassis roll",
                "Quicker direction changes"
            ],

            drawbacks: [
                "Reduced rear traction",
                "Can make the rear feel nervous"
            ]
        },

        {
            title: "Lower Outside",

            effects: [
                "Lowers rear roll center",
                "Reduces camber gain",
                "Increases chassis roll",
                "Generally increases rear grip",
                "Generally increases stability"
            ],

            benefits: [
                "Increased rear traction",
                "Improved stability",
                "More forgiving handling"
            ],

            drawbacks: [
                "Reduced rotation",
                "Can increase rear push"
            ]
        }

    ],

    tradeOffs: [
        "Higher roll center generally increases rotation but reduces rear grip.",
        "Lower roll center generally increases rear grip but reduces rotation.",
        "Changes affect both roll center height and camber gain simultaneously."
    ],

    quickSummary:
        "Lower Inside or Raise Outside generally increases rotation. Raise Inside or Lower Outside generally increases rear grip and stability."
    },

    {
    id: "frontSpring",

    name: "Front Spring",

    category: "Suspension",

    increaseTitle: "Use Stiffer Front Springs",
    decreaseTitle: "Use Softer Front Springs",

    whatItIs:
        "The Front Spring supports the front of the vehicle and controls how much the front suspension compresses, rolls, and transfers weight. Spring rate determines how easily the chassis can move during braking, cornering, acceleration, bumps, and jumps.",

    whyItMatters:
        "Front spring rate influences steering response, front grip, chassis roll, weight transfer, bump handling, jump behavior, and overall vehicle responsiveness. Springs are used to keep the chassis operating within its intended working range for the available traction level.",

    increase: {

        effects: [
            "Increases spring stiffness",
            "Reduces chassis roll",
            "Reduces weight transfer",
            "Reduces front mechanical grip",
            "Increases steering responsiveness",
            "Increases front-end support",
            "Generally improves jump takeoff characteristics",
            "Can make the vehicle react more quickly"
        ],

        benefits: [
            "More responsive steering",
            "Improved front-end support",
            "Reduced chassis movement",
            "Can improve performance on high-grip tracks",
            "Can improve consistency during aggressive driving"
        ],

        drawbacks: [
            "Reduces front grip",
            "Can reduce mid-corner steering",
            "Can reduce bump compliance",
            "May make the vehicle feel nervous on rough or low-grip tracks"
        ]
    },

    decrease: {

        effects: [
            "Decreases spring stiffness",
            "Increases chassis roll",
            "Increases weight transfer",
            "Increases front mechanical grip",
            "Increases mid-corner steering",
            "Improves bump compliance",
            "Can make the vehicle feel calmer",
            "Allows the chassis to move more easily"
        ],

        benefits: [
            "Increased front grip",
            "Improved mid-corner steering",
            "Better bump handling",
            "Can improve performance on low-grip tracks",
            "More forgiving handling characteristics"
        ],

        drawbacks: [
            "Reduces steering responsiveness",
            "Can allow excessive chassis movement",
            "May reduce support on high-grip tracks",
            "Can make the vehicle feel less precise"
        ]
    },

    tradeOffs: [
        "Stiffer front springs generally increase responsiveness and support but reduce front grip.",
        "Softer front springs generally increase front grip and mid-corner steering but reduce responsiveness.",
        "High-grip conditions typically require stiffer springs to control chassis movement.",
        "Low-grip conditions typically benefit from softer springs that allow the chassis to transfer weight more easily.",
        "Spring changes should generally be matched with appropriate shock oil changes."
    ],

    quickSummary:
        "Stiffer Front Springs generally provide more responsiveness, support, and precision but less front grip and mid-corner steering. Softer Front Springs generally provide more front grip, more mid-corner steering, and better bump handling but less responsiveness and support."
    },

    {
    id: "frontShockOil",

    name: "Front Shock Oil",

    category: "Suspension",

    increaseTitle: "Use Thicker Front Shock Oil",
    decreaseTitle: "Use Thinner Front Shock Oil",

    whatItIs:
        "Front Shock Oil controls the damping of the front suspension by regulating how quickly oil can flow through the shock piston. Shock oil primarily affects the speed of suspension movement rather than the amount of movement. Thicker oils increase damping while thinner oils decrease damping.",

    whyItMatters:
        "Front shock oil influences steering response, weight transfer speed, bump handling, jump behavior, chassis control, and overall front-end feel. Shock oil determines how quickly the suspension reacts to changing track conditions and driver inputs.",

    increase: {

        effects: [
            "Increases damping",
            "Slows suspension movement",
            "Slows weight transfer",
            "Increases pack",
            "Increases front-end support",
            "Generally increases steering response",
            "Can improve jump takeoff characteristics",
            "Can make the vehicle react more quickly to steering inputs"
        ],

        benefits: [
            "Improved front-end support",
            "More responsive steering",
            "Better chassis control",
            "Can improve performance on smooth high-grip tracks",
            "Can improve jump consistency"
        ],

        drawbacks: [
            "Can reduce bump compliance",
            "Can reduce front grip on rough tracks",
            "May cause the vehicle to feel nervous",
            "Can make the suspension less forgiving"
        ]
    },

    decrease: {

        effects: [
            "Decreases damping",
            "Allows suspension to move more freely",
            "Speeds weight transfer",
            "Reduces pack",
            "Improves bump compliance",
            "Can increase front grip on rough surfaces",
            "Can make the vehicle feel calmer",
            "Allows the suspension to follow the track more easily"
        ],

        benefits: [
            "Improved bump handling",
            "Better rough-track performance",
            "Increased compliance",
            "Can improve grip in difficult conditions",
            "More forgiving handling characteristics"
        ],

        drawbacks: [
            "Reduces front-end support",
            "Can reduce steering responsiveness",
            "May allow excessive chassis movement",
            "Can reduce jump consistency"
        ]
    },

    tradeOffs: [
        "Thicker front shock oil generally increases support and responsiveness but reduces compliance.",
        "Thinner front shock oil generally increases compliance and grip but reduces support and responsiveness.",
        "Shock oil primarily controls suspension speed, while springs primarily control suspension movement.",
        "Front shock oil should generally be matched to spring stiffness and piston configuration.",
        "Smooth high-grip tracks often tolerate thicker oil, while rough tracks often benefit from thinner oil."
    ],

    quickSummary:
        "Thicker Front Shock Oil generally provides more support, more pack, and quicker steering response, but less compliance and bump handling. Thinner Front Shock Oil generally provides better compliance, improved rough-track performance, and increased forgiveness, but less support and responsiveness."
    },

    {
    id: "frontShockPiston",

    name: "Front Shock Piston",

    category: "Suspension",

    increaseTitle: "Use a Higher-Pack Front Piston",
    decreaseTitle: "Use a Lower-Pack Front Piston",

    whatItIs:
        "The Front Shock Piston controls how shock oil flows through the front shock during suspension movement. Piston tuning is primarily achieved by changing the number of holes, hole size, or piston design. While shock oil mainly determines damping level, the piston largely determines the shock's pack characteristics.",

    whyItMatters:
        "Front shock pistons influence bump handling, jump landings, bottoming resistance, steering response, chassis control, and suspension compliance. Piston changes allow tuning of high-speed shock behavior while maintaining a desired damping level through oil adjustments.",

    increase: {

        effects: [
            "Uses smaller holes or fewer holes",
            "Increases damping resistance at high shaft speeds",
            "Increases pack",
            "Increases bottoming resistance",
            "Increases front-end support",
            "Generally increases steering responsiveness",
            "Can improve jump landings",
            "Can make the vehicle feel more precise"
        ],

        benefits: [
            "Improved jump landing support",
            "Reduced bottoming",
            "More responsive handling",
            "Improved chassis control",
            "Can improve performance on smooth tracks"
        ],

        drawbacks: [
            "Can reduce bump compliance",
            "Can reduce grip on rough tracks",
            "May cause the suspension to feel harsh",
            "Can make the vehicle more difficult to drive in bumps"
        ]
    },

    decrease: {

        effects: [
            "Uses larger holes or more holes",
            "Reduces damping resistance at high shaft speeds",
            "Reduces pack",
            "Improves suspension compliance",
            "Allows the suspension to react more freely",
            "Improves bump absorption",
            "Can increase front grip on rough surfaces",
            "Can make the vehicle feel smoother"
        ],

        benefits: [
            "Improved bump handling",
            "Better rough-track performance",
            "Increased suspension compliance",
            "Can improve grip in difficult conditions",
            "More forgiving handling characteristics"
        ],

        drawbacks: [
            "Reduced jump landing support",
            "Increased bottoming tendency",
            "Less steering response",
            "Reduced chassis support"
        ]
    },

    tradeOffs: [
        "Smaller or fewer piston holes generally increase pack, support, and responsiveness but reduce compliance.",
        "Larger or more piston holes generally improve compliance and bump handling but reduce support and pack.",
        "Piston changes primarily affect high-speed shock behavior, while oil changes primarily affect overall damping.",
        "Piston and oil changes should typically be considered together when tuning shocks.",
        "Smooth tracks and large jumps often benefit from more pack, while rough tracks often benefit from less pack."
    ],

    quickSummary:
        "Smaller or fewer piston holes generally create more pack, more support, improved jump landings, and increased responsiveness. Larger or more piston holes generally create less pack, better bump handling, improved compliance, and a smoother, more forgiving vehicle."
    },

    {
    id: "frontUpperShockMount",

    name: "Front Upper Shock Mount Position",

    category: "Suspension",

    increaseTitle: "Move Shock In on Tower",
    decreaseTitle: "Move Shock Out on Tower",

    whatItIs:
        "The Front Upper Shock Mount Position refers to the mounting location of the top of the front shock on the shock tower. Moving the shock inward lays the shock down and increases its angle. Moving the shock outward stands the shock up and reduces its angle.",

    whyItMatters:
        "Front upper shock position affects suspension progression, chassis roll, steering response, front grip, bump handling, jump behavior, and overall vehicle responsiveness. It is one of the most effective ways to fine-tune front suspension feel without changing springs or oil.",

    increase: {

        effects: [
            "Moves the shock outward on the tower",
            "Stands the shock up",
            "Produces a more linear suspension action",
            "Increases suspension support",
            "Generally increases steering response",
            "Reduces chassis roll",
            "Can improve jump performance",
            "Can improve bump handling on some tracks"
        ],

        benefits: [
            "More responsive steering",
            "Improved front-end support",
            "Reduced chassis roll",
            "Improved jump consistency",
            "Often beneficial on smooth high-grip tracks"
        ],

        drawbacks: [
            "Can reduce overall front grip",
            "May reduce forgiveness",
            "Can make the vehicle feel more aggressive",
            "May reduce compliance in low-grip conditions"
        ]
    },

    decrease: {

        effects: [
            "Moves the shock inward on the tower",
            "Lays the shock down",
            "Produces a more progressive suspension action",
            "Increases chassis roll",
            "Generally increases front grip",
            "Can increase mid-corner steering",
            "Can make the vehicle feel smoother",
            "Can improve performance in low-grip conditions"
        ],

        benefits: [
            "Increased front traction",
            "Improved low-grip performance",
            "More forgiving handling",
            "Improved mid-corner steering",
            "Smoother vehicle response"
        ],

        drawbacks: [
            "Reduces steering response",
            "Can feel less precise",
            "May reduce jump performance",
            "Can allow excessive chassis roll on high-grip tracks"
        ]
    },

    tradeOffs: [
        "Standing the shock up generally increases responsiveness and support but reduces overall grip.",
        "Laying the shock down generally increases grip and forgiveness but reduces responsiveness.",
        "Standing the shock up produces a more linear suspension action, while laying the shock down produces a more progressive suspension action.",
        "Smooth high-grip tracks often favor more upright shock positions, while loose or difficult tracks often favor more laid-down positions."
    ],

    quickSummary:
        "Standing the Front Shock Up generally increases steering response, support, and precision while reducing front grip. Laying the Front Shock Down generally increases front grip, forgiveness, and mid-corner steering while reducing responsiveness."
    },

    {
    id: "frontLowerShockMount",

    name: "Front Lower Shock Mount Position",

    category: "Suspension",

    increaseTitle: "Move Shock In on Arm",
    decreaseTitle: "Move Shock Out on Arm",

    whatItIs:
        "The Front Lower Shock Mount Position refers to the mounting location of the bottom of the front shock on the suspension arm. Moving the shock inward places it closer to the hinge pin and reduces leverage on the shock. Moving the shock outward places it closer to the wheel and increases leverage on the shock.",

    whyItMatters:
        "Front lower shock position affects wheel rate, damping effectiveness, chassis roll, steering response, front grip, bump handling, jump performance, and overall vehicle responsiveness. It changes how much influence the spring and shock have at the wheel without changing the actual spring or oil.",

    increase: {

        effects: [
            "Moves the shock outward on the arm",
            "Increases wheel rate",
            "Increases effective spring stiffness",
            "Increases effective damping",
            "Reduces chassis roll",
            "Increases front-end support",
            "Generally increases steering responsiveness",
            "Generally increases stability on high-grip tracks"
        ],

        benefits: [
            "More responsive handling",
            "Improved front-end support",
            "Reduced chassis roll",
            "More precise steering feel",
            "Often beneficial on smooth high-grip tracks"
        ],

        drawbacks: [
            "Can reduce front grip",
            "Can reduce bump compliance",
            "May reduce rough-track performance",
            "Can make the vehicle less forgiving"
        ]
    },

    decrease: {

        effects: [
            "Moves the shock inward on the arm",
            "Reduces wheel rate",
            "Reduces effective spring stiffness",
            "Reduces effective damping",
            "Increases chassis roll",
            "Increases suspension compliance",
            "Generally increases front grip",
            "Can improve bump handling"
        ],

        benefits: [
            "Increased front traction",
            "Improved bump handling",
            "Better rough-track performance",
            "More forgiving handling",
            "Improved low-grip performance"
        ],

        drawbacks: [
            "Reduces steering response",
            "Can feel less precise",
            "May allow excessive chassis movement",
            "Can reduce support on high-grip tracks"
        ]
    },

    tradeOffs: [
        "Moving the shock outward increases wheel rate, support, and responsiveness but can reduce grip and compliance.",
        "Moving the shock inward decreases wheel rate and increases compliance but can reduce responsiveness.",
        "Outward positions generally suit smoother, higher-grip conditions.",
        "Inward positions generally suit rougher or lower-grip conditions.",
        "Lower shock mount position changes both spring effectiveness and damping effectiveness through motion ratio changes.",
        "Shock position changes should be considered when evaluating spring and oil changes."
    ],

    quickSummary:
        "Moving the Front Shock Outward on the Arm generally increases support, responsiveness, and steering precision. Moving the Front Shock Inward on the Arm generally increases compliance, front grip, and bump handling but reduces responsiveness and support."
    },

    {
    id: "frontDroop",

    name: "Front Droop",

    category: "Suspension",

    increaseTitle: "Use More Front Droop",
    decreaseTitle: "Use Less Front Droop",

    whatItIs:
        "Front droop is the amount of suspension extension available from the vehicle's normal ride height. Increasing droop allows the front suspension to extend further, while decreasing droop limits suspension extension.",

    whyItMatters:
        "Front droop affects front traction, steering response, chassis roll, bump handling, jump landings, stability, and overall vehicle balance. It influences how effectively the front tires maintain contact with the track during weight transfer and over uneven surfaces.",

    increase: {

        effects: [
            "Increases available suspension extension",
            "Generally increases front traction",
            "Allows the front tires to maintain contact with the track longer",
            "Increases chassis roll potential",
            "Improves bump handling",
            "Improves jump landings",
            "Makes the front suspension more compliant",
            "Generally slows steering response"
        ],

        benefits: [
            "Increased front grip",
            "Improved bump handling",
            "Better jump landing performance",
            "Improved performance on rough tracks",
            "More forgiving handling characteristics"
        ],

        drawbacks: [
            "Increased chassis roll",
            "Reduced steering responsiveness",
            "Reduced steering precision",
            "Can make weight transfer feel slower",
            "Too much droop can make the vehicle feel lazy"
        ]
    },

    decrease: {

        effects: [
            "Reduces available suspension extension",
            "Generally reduces front traction",
            "Reduces chassis roll potential",
            "Increases steering responsiveness",
            "Improves steering precision",
            "Makes the vehicle feel more direct",
            "Reduces rollover tendency",
            "Can reduce bump and landing performance"
        ],

        benefits: [
            "More responsive steering",
            "Improved precision",
            "Reduced chassis movement",
            "Improved performance on smooth high-grip tracks",
            "More direct vehicle response"
        ],

        drawbacks: [
            "Reduced front grip",
            "Reduced bump handling",
            "Reduced jump landing performance",
            "Reduced performance on rough tracks",
            "Can make the vehicle less forgiving"
        ]
    },

    tradeOffs: [
        "More front droop generally increases front grip and compliance but reduces steering response and precision.",
        "Less front droop generally increases steering response and precision but reduces front grip and compliance.",
        "More front droop typically benefits rough, loose, and low-grip conditions.",
        "Less front droop typically benefits smooth, high-grip conditions.",
        "Front droop primarily adjusts the balance between front traction and steering responsiveness."
    ],

    quickSummary:
        "More Front Droop generally increases front grip, compliance, and rough-track performance but reduces steering response and precision. Less Front Droop generally increases steering responsiveness and precision but reduces front grip and bump-handling capability."
},

    {
    id: "frontAntiRollBar",

    name: "Front Anti-Roll Bar",

    category: "Suspension",

    increaseTitle: "Use Stiffer Front Anti-Roll Bar",
    decreaseTitle: "Use Softer Front Anti-Roll Bar",

    whatItIs:
        "The Front Anti-Roll Bar (sway bar) connects the left and right front suspension and resists chassis roll during cornering. Increasing bar stiffness reduces front suspension roll, while decreasing bar stiffness allows more front suspension roll.",

    whyItMatters:
        "Front anti-roll bar stiffness affects front grip, steering balance, chassis roll, responsiveness, and overall vehicle handling. It is commonly used to adjust vehicle balance and adapt the suspension to changing grip conditions.",

    increase: {

        effects: [
            "Increases front roll stiffness",
            "Reduces front chassis roll",
            "Generally reduces front overall grip",
            "Generally increases steering responsiveness",
            "Can make the vehicle react more quickly to steering inputs",
            "Can improve support on high-grip tracks",
            "Transfers more cornering load across the front axle"
        ],

        benefits: [
            "More responsive steering",
            "Reduced chassis roll",
            "Improved support on high-grip tracks",
            "Can help reduce oversteer",
            "Can improve stability during aggressive driving"
        ],

        drawbacks: [
            "Can reduce front grip",
            "May reduce steering in some conditions",
            "Can make the vehicle harder to drive on loose tracks",
            "Can reduce compliance over bumps",
            "May make the front end feel nervous on high-grip tracks"
        ]
    },

    decrease: {

        effects: [
            "Decreases front roll stiffness",
            "Allows more front chassis roll",
            "Generally increases front overall grip",
            "Generally increases mid-corner steering",
            "Improves front suspension independence",
            "Can improve compliance on rough tracks",
            "Allows the front tires to remain more evenly loaded"
        ],

        benefits: [
            "Increased front grip",
            "Improved mid-corner steering",
            "Better rough-track performance",
            "Improved low-grip performance",
            "More forgiving handling characteristics"
        ],

        drawbacks: [
            "Can increase chassis roll",
            "May reduce steering responsiveness",
            "Can make the vehicle feel slower to react",
            "May reduce support on high-grip tracks"
        ]
    },

    tradeOffs: [
        "A stiffer front anti-roll bar generally reduces front grip but increases steering responsiveness and support.",
        "A softer front anti-roll bar generally increases front grip and mid-corner steering but reduces responsiveness.",
        "Anti-roll bars are commonly adjusted together front and rear when adapting to major grip changes.",
        "Higher grip conditions often require stiffer anti-roll bars to control chassis roll.",
        "Extremely high-grip surfaces may sometimes benefit from softer anti-roll bars to keep all four tires in contact with the track."
    ],

    quickSummary:
        "A Stiffer Front Anti-Roll Bar generally increases steering responsiveness and support while reducing front grip. A Softer Front Anti-Roll Bar generally increases front grip, mid-corner steering, and compliance while reducing responsiveness."
    },

    {
    id: "rearSpring",

    name: "Rear Spring",

    category: "Suspension",

    increaseTitle: "Use Stiffer Rear Springs",
    decreaseTitle: "Use Softer Rear Springs",

    whatItIs:
        "The Rear Spring supports the rear of the vehicle and controls how much the rear suspension compresses, rolls, and transfers weight. Spring rate determines how easily the rear of the chassis can move during acceleration, cornering, braking, bumps, and jumps.",

    whyItMatters:
        "Rear spring rate influences rear traction, vehicle rotation, stability, weight transfer, bump handling, jump behavior, and overall chassis balance. Springs are used to keep the chassis operating within its intended working range for the available traction level.",

    increase: {

        effects: [
            "Increases spring stiffness",
            "Reduces chassis roll",
            "Reduces weight transfer",
            "Reduces rear mechanical grip",
            "Increases rear support",
            "Generally increases vehicle rotation",
            "Generally improves jump takeoff characteristics",
            "Can make the vehicle react more quickly"
        ],

        benefits: [
            "Improved chassis support",
            "More responsive handling",
            "Increased vehicle rotation",
            "Can improve performance on high-grip tracks",
            "Can improve consistency during aggressive driving"
        ],

        drawbacks: [
            "Reduces rear grip",
            "Can reduce bump compliance",
            "May reduce traction on rough tracks",
            "Can reduce steering in some low-speed loose hairpins",
            "May make the vehicle more difficult to drive"
        ]
    },

    decrease: {

        effects: [
            "Decreases spring stiffness",
            "Increases chassis roll",
            "Increases weight transfer",
            "Increases rear mechanical grip",
            "Improves bump compliance",
            "Increases rear traction",
            "Can make the vehicle feel calmer",
            "Allows the chassis to move more easily"
        ],

        benefits: [
            "Increased rear grip",
            "Improved bump handling",
            "Better rough-track performance",
            "More forgiving handling characteristics",
            "Improved traction in low-grip conditions"
        ],

        drawbacks: [
            "Reduces vehicle rotation",
            "Can allow excessive chassis movement",
            "May reduce responsiveness",
            "Can reduce support on high-grip tracks"
        ]
    },

    tradeOffs: [
        "Stiffer rear springs generally increase support and rotation but reduce rear grip.",
        "Softer rear springs generally increase rear grip and compliance but reduce responsiveness.",
        "High-grip conditions typically require stiffer springs to control chassis movement.",
        "Low-grip conditions typically benefit from softer springs that allow the chassis to transfer weight more easily.",
        "Spring changes should generally be matched with appropriate shock oil changes.",
        "Rear spring changes affect both traction and vehicle rotation."
    ],

    quickSummary:
        "Stiffer Rear Springs generally provide more support, responsiveness, and vehicle rotation but less rear grip. Softer Rear Springs generally provide more rear traction, improved bump handling, and a more forgiving feel but less support and responsiveness."
    },

    {
    id: "rearShockOil",

    name: "Rear Shock Oil",

    category: "Suspension",

    increaseTitle: "Use Thicker Rear Shock Oil",
    decreaseTitle: "Use Thinner Rear Shock Oil",

    whatItIs:
        "Rear Shock Oil controls the damping of the rear suspension by regulating how quickly oil can flow through the rear shock piston. Shock oil primarily affects the speed of suspension movement rather than the amount of movement. Thicker oils increase damping while thinner oils decrease damping.",

    whyItMatters:
        "Rear shock oil influences rear traction, stability, weight transfer speed, bump handling, jump behavior, acceleration characteristics, chassis control, and overall rear-end feel. Shock oil determines how quickly the rear suspension reacts to changing track conditions and driver inputs.",

    increase: {

        effects: [
            "Increases damping",
            "Slows suspension movement",
            "Slows rear weight transfer",
            "Increases pack",
            "Increases rear-end support",
            "Generally increases stability",
            "Can improve jump takeoff and landing characteristics",
            "Can make the rear of the vehicle feel more controlled"
        ],

        benefits: [
            "Improved rear support",
            "Increased stability",
            "Better chassis control",
            "Can improve performance on smooth high-grip tracks",
            "Can improve jump consistency"
        ],

        drawbacks: [
            "Can reduce rear traction on rough tracks",
            "Can reduce suspension compliance",
            "May cause the vehicle to skip across bumps",
            "Can make the suspension less forgiving"
        ]
    },

    decrease: {

        effects: [
            "Decreases damping",
            "Allows suspension to move more freely",
            "Speeds rear weight transfer",
            "Reduces pack",
            "Improves bump compliance",
            "Can increase rear traction",
            "Allows the rear suspension to follow the track more easily",
            "Can make the vehicle feel calmer over rough surfaces"
        ],

        benefits: [
            "Improved bump handling",
            "Better rough-track performance",
            "Increased rear traction",
            "Improved compliance",
            "More forgiving handling characteristics"
        ],

        drawbacks: [
            "Reduces rear-end support",
            "Can allow excessive chassis movement",
            "May reduce stability on high-grip tracks",
            "Can reduce jump consistency"
        ]
    },

    tradeOffs: [
        "Thicker rear shock oil generally increases support and stability but reduces compliance and traction on rough surfaces.",
        "Thinner rear shock oil generally increases compliance and traction but reduces support and stability.",
        "Shock oil primarily controls suspension speed, while springs primarily control suspension movement.",
        "Rear shock oil should generally be matched to spring stiffness and piston configuration.",
        "Smooth high-grip tracks often tolerate thicker oil, while rough tracks often benefit from thinner oil."
    ],

    quickSummary:
        "Thicker Rear Shock Oil generally provides more support, more pack, improved stability, and better jump control, but less compliance and rough-track traction. Thinner Rear Shock Oil generally provides better compliance, improved rear grip, and superior rough-track performance, but less support and stability."
    },

    {
    id: "rearShockPiston",

    name: "Rear Shock Piston",

    category: "Suspension",

    increaseTitle: "Use a Higher-Pack Rear Piston",
    decreaseTitle: "Use a Lower-Pack Rear Piston",

    whatItIs:
        "The Rear Shock Piston controls how shock oil flows through the rear shock during suspension movement. Piston tuning is primarily achieved by changing the number of holes, hole size, or piston design. While shock oil mainly determines damping level, the piston largely influences pack, compliance, and high-speed suspension behavior.",

    whyItMatters:
        "Rear shock pistons influence rear traction, stability, bump handling, jump landings, bottoming resistance, acceleration characteristics, chassis support, and suspension compliance. Piston changes allow tuning of high-speed shock behavior while maintaining a desired damping level through oil adjustments.",

    increase: {

        effects: [
            "Uses smaller holes or fewer holes",
            "Increases damping resistance at high shaft speeds",
            "Increases pack",
            "Increases bottoming resistance",
            "Increases rear support",
            "Generally increases stability",
            "Can improve jump landings",
            "Can improve acceleration support on smooth tracks"
        ],

        benefits: [
            "Improved rear support",
            "Increased stability",
            "Reduced bottoming",
            "Better jump landing control",
            "Can improve performance on smooth high-grip tracks"
        ],

        drawbacks: [
            "Can reduce rear compliance",
            "Can reduce traction on rough tracks",
            "May cause the rear tires to skip across bumps",
            "Can make the vehicle less forgiving"
        ]
    },

    decrease: {

        effects: [
            "Uses larger holes or more holes",
            "Reduces damping resistance at high shaft speeds",
            "Reduces pack",
            "Improves suspension compliance",
            "Allows the rear suspension to react more freely",
            "Improves bump absorption",
            "Can increase rear grip on rough surfaces",
            "Can make the vehicle feel smoother and calmer"
        ],

        benefits: [
            "Improved bump handling",
            "Better rough-track performance",
            "Increased rear traction",
            "Improved compliance",
            "More forgiving handling characteristics"
        ],

        drawbacks: [
            "Reduced rear support",
            "Increased bottoming tendency",
            "Less jump landing support",
            "May reduce stability on smooth high-grip tracks"
        ]
    },

    tradeOffs: [
        "Smaller or fewer piston holes generally increase pack, support, and stability but reduce compliance.",
        "Larger or more piston holes generally improve compliance and rough-track grip but reduce support and pack.",
        "Piston changes primarily affect high-speed suspension behavior, while oil changes primarily affect overall damping.",
        "Rear piston tuning has a large influence on how well the vehicle handles bumps, jump landings, and acceleration zones.",
        "Smooth tracks and large jumps often benefit from more pack, while rough tracks often benefit from less pack."
    ],

    quickSummary:
        "Smaller or fewer piston holes generally provide more pack, more rear support, improved stability, and better jump landing control. Larger or more piston holes generally provide better compliance, increased rough-track grip, improved bump handling, and a smoother, more forgiving feel."
    },

    {
    id: "rearUpperShockMount",

    name: "Rear Upper Shock Mount Position",

    category: "Suspension",

    increaseTitle: "Move Shock In on Tower",
    decreaseTitle: "Move Shock Out on Tower",

    whatItIs:
        "The Rear Upper Shock Mount Position refers to the mounting location of the top of the rear shock on the shock tower. Moving the shock inward lays the shock down and increases its angle. Moving the shock outward stands the shock up and reduces its angle.",

    whyItMatters:
        "Rear upper shock position affects rear grip, stability, chassis roll, rotation, bump handling, jump behavior, suspension progression, and overall vehicle balance. It is one of the most effective adjustments for tuning rear traction and vehicle forgiveness.",

    increase: {

        effects: [
            "Moves the shock outward on the tower",
            "Stands the shock up",
            "Produces a more linear suspension action",
            "Increases rear support",
            "Generally reduces rear grip",
            "Generally increases vehicle rotation",
            "Can improve acceleration support",
            "Can make the vehicle feel more responsive"
        ],

        benefits: [
            "Improved vehicle rotation",
            "More responsive handling",
            "Improved rear support",
            "Can improve corner exit performance",
            "Often beneficial on smooth high-grip tracks"
        ],

        drawbacks: [
            "Can reduce rear traction",
            "May reduce forgiveness",
            "Can reduce mid-corner grip",
            "May make the vehicle harder to drive in difficult conditions"
        ]
    },

    decrease: {

        effects: [
            "Moves the shock inward on the tower",
            "Lays the shock down",
            "Produces a more progressive suspension action",
            "Increases rear grip",
            "Increases mid-corner grip",
            "Can improve bump handling",
            "Can make the vehicle feel smoother",
            "Can make the vehicle more forgiving"
        ],

        benefits: [
            "Increased rear traction",
            "Improved mid-corner grip",
            "Better rough-track performance",
            "More forgiving handling",
            "Improved low-grip performance"
        ],

        drawbacks: [
            "Reduces vehicle rotation",
            "Can feel less responsive",
            "May reduce corner speed on some tracks",
            "Can reduce acceleration responsiveness"
        ]
    },

    tradeOffs: [
        "Standing the rear shock up generally increases support and rotation but reduces rear grip.",
        "Laying the rear shock down generally increases rear grip and forgiveness but reduces responsiveness.",
        "Standing the shock up produces a more linear suspension action, while laying the shock down produces a more progressive suspension action.",
        "Smooth high-grip tracks often favor more upright shock positions, while low-grip, rough, or difficult tracks often favor more laid-down positions.",
        "Rear upper shock position is one of the most effective adjustments for tuning rear traction and vehicle balance."
    ],

    quickSummary:
        "Standing the Rear Shock Up generally increases support, responsiveness, and vehicle rotation while reducing rear grip. Laying the Rear Shock Down generally increases rear grip, forgiveness, and mid-corner traction while reducing responsiveness and rotation."
    },

    {
    id: "rearLowerShockMount",

    name: "Rear Lower Shock Mount Position",

    category: "Suspension",

    increaseTitle: "Move Shock In on Arm",
    decreaseTitle: "Move Shock Out on Arm",

    whatItIs:
        "The Rear Lower Shock Mount Position refers to the mounting location of the bottom of the rear shock on the suspension arm. Moving the shock inward places it closer to the hinge pin and increases leverage on the shock. Moving the shock outward places it closer to the wheel and reduces leverage on the shock.",

    whyItMatters:
        "Rear lower shock position affects wheel rate, damping effectiveness, rear traction, stability, bump handling, jump performance, chassis roll, and vehicle responsiveness. It changes how much influence the spring and shock have at the wheel without changing the actual spring or oil.",

    increase: {

        effects: [
            "Moves the shock outward on the arm",
            "Increases wheel rate",
            "Increases effective spring stiffness",
            "Increases effective damping",
            "Increases rear support",
            "Reduces chassis roll",
            "Generally increases stability",
            "Generally increases lateral support in corners"
        ],

        benefits: [
            "Improved rear support",
            "Increased stability",
            "More consistent handling on high-grip tracks",
            "Improved chassis control",
            "Can improve cornering consistency"
        ],

        drawbacks: [
            "Can reduce rear traction",
            "Can reduce bump compliance",
            "May reduce rough-track performance",
            "Can make the vehicle less forgiving",
            "May reduce jump and landing performance"
        ]
    },

    decrease: {

        effects: [
            "Moves the shock inward on the arm",
            "Reduces wheel rate",
            "Reduces effective spring stiffness",
            "Reduces effective damping",
            "Increases suspension compliance",
            "Increases rear traction",
            "Allows more chassis roll",
            "Can improve bump and jump handling"
        ],

        benefits: [
            "Increased rear grip",
            "Improved bump handling",
            "Better rough-track performance",
            "Improved jump and landing performance",
            "More forgiving handling characteristics"
        ],

        drawbacks: [
            "Reduces rear support",
            "Can feel less responsive",
            "May allow excessive chassis movement",
            "Can reduce stability on high-grip tracks"
        ]
    },

    tradeOffs: [
        "Moving the shock outward increases wheel rate, support, and stability but can reduce compliance and rear grip.",
        "Moving the shock inward decreases wheel rate and increases compliance, traction, and bump absorption.",
        "Outward positions generally suit smoother, higher-grip conditions.",
        "Inward positions generally suit rougher, bumpier, or lower-grip conditions.",
        "Lower shock mount position changes both spring effectiveness and damping effectiveness through motion ratio changes.",
        "Shock position changes should be considered when evaluating spring and oil changes."
    ],

    quickSummary:
        "Moving the Rear Shock Outward on the Arm generally increases support, stability, and chassis control. Moving the Rear Shock Inward on the Arm generally increases rear grip, compliance, bump handling, and jump performance but reduces support and responsiveness."
    },

    {
    id: "rearDroop",

    name: "Rear Droop",

    category: "Suspension",

    increaseTitle: "Use More Rear Droop",
    decreaseTitle: "Use Less Rear Droop",

    whatItIs:
        "Rear droop is the amount of suspension extension available from the vehicle's normal ride height. Increasing droop allows the rear suspension to extend further, while decreasing droop limits suspension extension.",

    whyItMatters:
        "Rear droop affects rear traction, stability, braking behavior, chassis roll, bump handling, jump landings, and overall vehicle balance. It influences how effectively the rear tires maintain contact with the track during weight transfer and over uneven surfaces.",

    increase: {

        effects: [
            "Increases available suspension extension",
            "Generally increases rear traction",
            "Allows the rear tires to maintain contact with the track longer",
            "Increases chassis roll potential",
            "Improves bump handling",
            "Improves jump landings",
            "Makes the rear suspension more compliant",
            "Generally increases weight transfer"
        ],

        benefits: [
            "Increased rear grip",
            "Improved bump handling",
            "Better jump landing performance",
            "Improved performance on rough tracks",
            "More forgiving handling characteristics"
        ],

        drawbacks: [
            "Increased chassis roll",
            "Reduced stability during aggressive weight transfer",
            "Can make the vehicle feel less precise",
            "Can increase rear grip to the point of reducing rotation",
            "Too much droop can make the vehicle feel lazy"
        ]
    },

    decrease: {

        effects: [
            "Reduces available suspension extension",
            "Generally reduces rear traction",
            "Reduces chassis roll potential",
            "Increases stability during weight transfer",
            "Improves precision",
            "Makes the vehicle feel more direct",
            "Reduces rollover tendency",
            "Can reduce bump and landing performance"
        ],

        benefits: [
            "Improved stability",
            "Improved precision",
            "Reduced chassis movement",
            "Improved performance on smooth high-grip tracks",
            "More direct vehicle response"
        ],

        drawbacks: [
            "Reduced rear grip",
            "Reduced bump handling",
            "Reduced jump landing performance",
            "Reduced performance on rough tracks",
            "Can make the vehicle less forgiving"
        ]
    },

    tradeOffs: [
        "More rear droop generally increases rear grip and compliance but reduces precision and stability during aggressive weight transfer.",
        "Less rear droop generally increases precision and stability but reduces rear grip and compliance.",
        "More rear droop typically benefits rough, loose, and low-grip conditions.",
        "Less rear droop typically benefits smooth, high-grip conditions.",
        "Rear droop primarily adjusts the balance between rear traction and vehicle responsiveness."
    ],

    quickSummary:
        "More Rear Droop generally increases rear grip, compliance, and rough-track performance but reduces precision and responsiveness. Less Rear Droop generally increases stability, responsiveness, and precision but reduces rear grip and bump-handling capability."
},

    {
    id: "rearAntiRollBar",

    name: "Rear Anti-Roll Bar",

    category: "Suspension",

    increaseTitle: "Use Stiffer Rear Anti-Roll Bar",
    decreaseTitle: "Use Softer Rear Anti-Roll Bar",

    whatItIs:
        "The Rear Anti-Roll Bar (sway bar) connects the left and right rear suspension and resists chassis roll during cornering. Increasing bar stiffness reduces rear suspension roll, while decreasing bar stiffness allows more rear suspension roll.",

    whyItMatters:
        "Rear anti-roll bar stiffness affects rear grip, stability, vehicle rotation, corner entry balance, on-power handling, and overall vehicle balance. It is one of the most effective adjustments for tuning rear traction and cornering behavior.",

    increase: {

        effects: [
            "Increases rear roll stiffness",
            "Reduces rear chassis roll",
            "Generally reduces rear grip",
            "Generally increases vehicle rotation",
            "Generally increases steering response",
            "Can improve responsiveness on high-grip tracks",
            "Can make the rear feel freer through corners",
            "Transfers more cornering load across the rear axle"
        ],

        benefits: [
            "Increased steering",
            "Improved vehicle rotation",
            "More responsive handling",
            "Can improve corner speed on high-grip tracks",
            "Can reduce understeer"
        ],

        drawbacks: [
            "Can reduce rear traction",
            "Can make the rear feel loose",
            "May reduce stability under acceleration",
            "Can make the vehicle harder to drive consistently",
            "May increase the likelihood of inside rear wheel lift"
        ]
    },

    decrease: {

        effects: [
            "Decreases rear roll stiffness",
            "Allows more rear chassis roll",
            "Generally increases rear grip",
            "Generally increases stability",
            "Can improve on-power traction",
            "Can make the rear feel more planted",
            "Can improve performance on loose tracks",
            "Can improve rotation in some low-speed hairpins"
        ],

        benefits: [
            "Increased rear traction",
            "Improved stability",
            "Better low-grip performance",
            "Improved on-power confidence",
            "More forgiving handling characteristics"
        ],

        drawbacks: [
            "Can reduce steering response",
            "May reduce vehicle rotation",
            "Can feel less responsive",
            "May reduce corner speed on high-grip tracks"
        ]
    },

    tradeOffs: [
        "A stiffer rear anti-roll bar generally increases steering and rotation but reduces rear grip.",
        "A softer rear anti-roll bar generally increases rear grip and stability but reduces steering response.",
        "Softer rear bars can improve rotation in low-speed hairpins by allowing the rear suspension to roll and help rotate the vehicle.",
        "Stiffer rear bars are often beneficial on smooth, high-grip tracks where additional rotation is needed.",
        "Softer rear bars are often beneficial on loose, rough, or inconsistent surfaces where maximum rear traction is needed.",
        "Excessively stiff rear anti-roll bars can cause inside rear wheel lift and reduce overall cornering performance."
    ],

    quickSummary:
        "A Stiffer Rear Anti-Roll Bar generally increases steering response, vehicle rotation, and responsiveness while reducing rear grip. A Softer Rear Anti-Roll Bar generally increases rear traction, stability, and forgiveness while reducing steering response and overall rotation."
    },

    {
    id: "ackermann",

    name: "Ackermann",

    category: "Steering",

    whatItIs:
        "Ackermann describes the difference in steering angle between the inside and outside front tires during cornering. The inside tire follows a smaller turning radius and therefore turns more than the outside tire. Ackermann geometry controls how this difference develops as steering lock increases.",

    whyItMatters:
        "Ackermann affects steering response, corner entry behavior, mid-corner balance, corner exit steering, rotation in tight corners, corner speed, and overall steering feel. It is one of the most influential steering geometry adjustments available on many RC vehicles.",

    increase: {

        effects: [
            "Increases the steering angle difference between the inside and outside front tires",
            "Generally reduces steering aggressiveness",
            "Generally reduces initial steering response",
            "Generally increases steering later in the corner",
            "Can improve steering consistency",
            "Can improve performance in sweeping corners",
            "Can make the vehicle easier to drive"
        ],

        benefits: [
            "Smoother steering feel",
            "Improved steering consistency",
            "More forgiving handling characteristics",
            "Better performance in long sweeping corners",
            "Can improve driver confidence"
        ],

        drawbacks: [
            "Can reduce corner entry steering",
            "Can reduce rotation in tight corners",
            "May produce understeer in hairpins",
            "Can feel less responsive"
        ]
    },

    decrease: {

        effects: [
            "Reduces the steering angle difference between the inside and outside front tires",
            "Generally increases steering aggressiveness",
            "Generally increases initial steering response",
            "Generally improves rotation in tight corners",
            "Can improve hairpin performance",
            "Can make the vehicle feel more responsive",
            "Generally shifts steering influence toward corner entry"
        ],

        benefits: [
            "Improved corner entry steering",
            "Better rotation in tight corners",
            "More responsive steering feel",
            "Improved performance in hairpins",
            "Can increase steering on low-grip tracks"
        ],

        drawbacks: [
            "Can become nervous or aggressive",
            "May reduce steering consistency",
            "Can be harder to drive smoothly",
            "May reduce performance in sweeping corners"
        ]
    },

    tradeOffs: [
        "More Ackermann generally produces smoother steering and greater steering influence later in the corner.",
        "Less Ackermann generally produces more aggressive steering and greater steering influence on corner entry.",
        "Higher Ackermann is often easier to drive and more forgiving.",
        "Lower Ackermann often improves rotation in tight corners but can make the vehicle more difficult to drive consistently.",
        "The exact effect of Ackermann can vary depending on the steering system design used by the vehicle.",
        "Ackermann is often adjusted to fine-tune steering feel after larger setup changes have already been made."
    ],

    quickSummary:
        "More Ackermann generally produces smoother, less aggressive steering with greater steering influence later in the corner. Less Ackermann generally produces more aggressive turn-in, increased rotation in tight corners, and a more responsive steering feel."
    },

    {
    id: "bumpSteer",

    name: "Bump Steer",

    category: "Steering",

    whatItIs:
        "Bump Steer refers to changes in front wheel toe angle as the suspension moves through its travel. On off-road RC vehicles, bump steer is primarily adjusted through steering link geometry and is influenced by the relationship between the steering links, upper suspension links, and lower suspension arms.",

    whyItMatters:
        "Bump Steer affects steering response, corner entry behavior, mid-corner balance, corner exit steering, and overall steering consistency. Because suspension movement occurs during braking, cornering, acceleration, bumps, and landings, bump steer can influence vehicle behavior throughout the entire corner.",

    increase: {

        effects: [
            "Increases bump-out on compression",
            "Increases toe-out as the suspension compresses",
            "Generally smooths corner entry steering",
            "Generally reduces steering aggressiveness",
            "Can make steering more forgiving",
            "Can increase steering influence later in the corner",
            "Can increase steering as the suspension unloads"
        ],

        benefits: [
            "More forgiving steering characteristics",
            "Improved steering consistency",
            "Smoother corner entry behavior",
            "Can improve stability on rough tracks",
            "Often easier to drive"
        ],

        drawbacks: [
            "Can reduce steering response",
            "Can reduce turn-in aggressiveness",
            "May feel less direct",
            "Can create varying steering characteristics throughout the corner"
        ]
    },

    decrease: {

        effects: [
            "Reduces bump-out on compression",
            "Reduces toe change during suspension movement",
            "Generally increases steering response",
            "Generally increases turn-in aggressiveness",
            "Creates a more direct steering feel",
            "Produces more neutral steering through the corner",
            "Can smooth steering behavior on corner exit"
        ],

        benefits: [
            "Improved steering response",
            "More direct steering feel",
            "More aggressive corner entry",
            "More consistent steering through the corner",
            "Can improve precision"
        ],

        drawbacks: [
            "Can become nervous or edgy",
            "May reduce stability on rough tracks",
            "Can make the vehicle harder to drive consistently",
            "May reduce forgiveness during weight transfer"
        ]
    },

    tradeOffs: [
        "More bump-out on compression generally smooths steering response and makes the vehicle easier to drive.",
        "Less bump-out on compression generally increases steering response and precision.",
        "Bump steer affects steering throughout suspension movement, making its effects noticeable during braking, cornering, acceleration, bumps, and landings.",
        "Changes to steering links, upper links, lower arms, ride height, and suspension geometry can all influence bump steer.",
        "Bump steer is often used as a fine-tuning adjustment after larger steering and suspension settings have been optimized."
    ],

    quickSummary:
        "More Bump Steer (bump-out on compression) generally creates smoother, more forgiving steering with less aggressive turn-in. Less Bump Steer generally creates quicker steering response, more aggressive corner entry, and a more direct steering feel."
    },

    {
    id: "frontDifferential",

    name: "Front Differential",

    category: "Differentials",

    increaseTitle: "Use Thicker Differential Oil",
    decreaseTitle: "Use Thinner Differential Oil",

    whatItIs:
        "The Front Differential controls how easily the left and right front wheels can rotate at different speeds. Silicone oil viscosity determines how much differential action occurs, with thicker oils limiting wheel speed differences and thinner oils allowing more differential action.",

    whyItMatters:
        "Front differential oil primarily affects corner entry steering, off-power steering, on-power steering, stability, and forward drive. While it can noticeably alter steering balance and vehicle feel, it is generally considered a fine-tuning adjustment compared to the center and rear differentials.",

    increase: {

        effects: [
            "Increases front differential resistance",
            "Generally reduces off-power steering",
            "Generally reduces corner-entry rotation",
            "Generally increases stability entering corners",
            "Can slightly increase on-power steering",
            "Increases forward drive",
            "Can improve acceleration out of corners",
            "Makes the vehicle feel more 4WD under acceleration"
        ],

        benefits: [
            "Improved forward drive",
            "Improved acceleration",
            "Greater corner-entry stability",
            "More forgiving handling",
            "Often beneficial on higher-grip tracks"
        ],

        drawbacks: [
            "Reduces off-power steering",
            "Can increase corner-entry push",
            "Can reduce vehicle rotation",
            "May feel less responsive in tight corners"
        ]
    },

    decrease: {

        effects: [
            "Reduces front differential resistance",
            "Generally increases off-power steering",
            "Generally increases corner-entry rotation",
            "Can improve low-speed steering",
            "Can increase vehicle agility",
            "Slightly reduces forward drive",
            "Makes the vehicle feel freer entering corners"
        ],

        benefits: [
            "Increased off-power steering",
            "Improved corner-entry rotation",
            "Improved agility",
            "Better performance on loose tracks",
            "Can help reduce understeer"
        ],

        drawbacks: [
            "Reduced forward drive",
            "Reduced acceleration efficiency",
            "Can make the vehicle more aggressive",
            "May reduce stability on high-grip tracks"
        ]
    },

    tradeOffs: [
        "A thicker front differential generally increases forward drive and stability but reduces off-power steering.",
        "A thinner front differential generally increases steering and rotation but reduces forward drive.",
        "Front differential changes typically have a greater effect on steering feel than overall traction.",
        "Higher-grip tracks often favor thicker front differential oils.",
        "Lower-grip tracks often favor thinner front differential oils.",
        "Front differential tuning is commonly used as a fine-tuning adjustment after center and rear differential settings have been established."
    ],

    quickSummary:
        "A Thicker Front Differential generally increases forward drive, acceleration, and stability while reducing off-power steering and corner-entry rotation. A Thinner Front Differential generally increases steering and rotation while reducing forward drive and overall stability."
    },

    {
    id: "centerDifferential",

    name: "Center Differential",

    category: "Differentials",

    increaseTitle: "Use Thicker Differential Oil",
    decreaseTitle: "Use Thinner Differential Oil",

    whatItIs:
        "The Center Differential controls how power is distributed between the front and rear drivetrains. Silicone oil viscosity determines how easily power can transfer between the front and rear wheels, with thicker oils reducing differential action and thinner oils allowing more differential action.",

    whyItMatters:
        "Center differential oil affects acceleration, forward drive, throttle control, vehicle stability, corner exit behavior, off-power rotation, bump handling, and overall drivability. It is one of the most influential tuning adjustments on a 4WD vehicle and can dramatically change how the vehicle drives.",

    increase: {

        effects: [
            "Increases center differential resistance",
            "Transfers more power to the rear tires during acceleration",
            "Increases forward drive",
            "Increases acceleration",
            "Makes the vehicle feel more 4WD under power",
            "Generally reduces off-power rotation",
            "Generally increases stability entering corners",
            "Can increase throttle sensitivity",
            "Can reduce differential unloading under acceleration"
        ],

        benefits: [
            "Improved acceleration",
            "Improved forward drive",
            "Stronger corner exits",
            "Improved efficiency on high-grip tracks",
            "More stable off-power handling"
        ],

        drawbacks: [
            "Can make the rear tires easier to overwhelm",
            "Can make the vehicle harder to drive on loose tracks",
            "Can increase rear instability under acceleration",
            "May reduce bump compliance during acceleration",
            "Can reduce forgiveness when applying throttle"
        ]
    },

    decrease: {

        effects: [
            "Reduces center differential resistance",
            "Allows more power to transfer to the front drivetrain",
            "Reduces forward drive",
            "Produces smoother acceleration",
            "Improves throttle forgiveness",
            "Generally increases off-power rotation",
            "Can improve drivability on loose tracks",
            "Can improve acceleration on rough tracks",
            "Reduces rear tire loading during acceleration"
        ],

        benefits: [
            "Improved throttle control",
            "More forgiving handling",
            "Better performance on loose tracks",
            "Better performance on rough tracks",
            "Can improve vehicle rotation"
        ],

        drawbacks: [
            "Reduced acceleration",
            "Reduced forward drive",
            "Can feel sluggish exiting corners",
            "May produce slower lap times despite feeling easy to drive",
            "Can reduce efficiency on high-grip tracks"
        ]
    },

    tradeOffs: [
        "A thicker center differential generally increases acceleration and forward drive but can reduce drivability.",
        "A thinner center differential generally increases drivability and forgiveness but reduces acceleration and forward drive.",
        "Higher-grip tracks often allow thicker center differential oils.",
        "Loose and rough tracks often benefit from thinner center differential oils.",
        "The center differential is one of the most influential setup adjustments on a 4WD vehicle.",
        "Many drivers run the thickest center differential oil they can successfully control for maximum performance."
    ],

    quickSummary:
        "A Thicker Center Differential generally increases acceleration, forward drive, and stability while making throttle application more critical. A Thinner Center Differential generally improves drivability, throttle control, and rough-track performance but reduces acceleration and forward drive."
    },

    {
    id: "rearDifferential",

    name: "Rear Differential",

    category: "Differentials",

    increaseTitle: "Use Thicker Differential Oil",
    decreaseTitle: "Use Thinner Differential Oil",

    whatItIs:
        "The Rear Differential controls how easily the left and right rear wheels can rotate at different speeds. Silicone oil viscosity determines how much differential action occurs, with thicker oils limiting wheel speed differences and thinner oils allowing more differential action.",

    whyItMatters:
        "Rear differential oil affects rear traction, corner-entry stability, off-power steering, throttle steering, acceleration, and overall vehicle balance. It is one of the most influential differential settings because it directly affects how the rear tires generate and maintain traction.",

    increase: {

        effects: [
            "Increases rear differential resistance",
            "Generally reduces off-power steering",
            "Generally reduces corner-entry rotation",
            "Generally increases rear stability",
            "Increases rear drive under acceleration",
            "Increases throttle steering influence",
            "Can improve acceleration out of corners",
            "Makes the rear tires drive more evenly"
        ],

        benefits: [
            "Improved rear stability",
            "Improved forward drive",
            "Improved acceleration",
            "More effective throttle steering",
            "Often easier to drive on high-grip tracks"
        ],

        drawbacks: [
            "Can increase corner-entry push",
            "Can reduce vehicle rotation",
            "Can make throttle application more critical",
            "May be difficult to drive on loose or bumpy tracks",
            "Can reduce low-speed agility"
        ]
    },

    decrease: {

        effects: [
            "Reduces rear differential resistance",
            "Generally increases off-power steering",
            "Generally increases corner-entry rotation",
            "Can increase vehicle agility",
            "Reduces rear drive under acceleration",
            "Reduces throttle steering influence",
            "Allows more differential action between rear tires",
            "Can make the rear end feel freer"
        ],

        benefits: [
            "Improved rotation",
            "Increased off-power steering",
            "Improved agility in tight corners",
            "Often easier to drive on loose tracks",
            "Can help reduce understeer"
        ],

        drawbacks: [
            "Reduced rear stability",
            "Can increase spin-out tendency",
            "Can reduce acceleration consistency",
            "May cause the rear end to feel nervous",
            "Can reduce throttle steering effectiveness"
        ]
    },

    tradeOffs: [
        "A thicker rear differential generally increases rear stability and forward drive but reduces rotation.",
        "A thinner rear differential generally increases steering and rotation but reduces rear stability.",
        "Thicker rear differential oils generally favor aggressive throttle-driving styles.",
        "Thinner rear differential oils generally favor smoother driving styles and lower-grip conditions.",
        "Rear differential tuning has a significant influence on vehicle balance and driver confidence.",
        "The optimal rear differential setting often depends heavily on driver preference and driving style."
    ],

    quickSummary:
        "A Thicker Rear Differential generally increases rear stability, forward drive, acceleration, and throttle steering while reducing off-power steering and rotation. A Thinner Rear Differential generally increases steering, rotation, and agility but reduces rear stability and acceleration consistency."
    },

    {
    id: "wheelbase",

    name: "Wheelbase",

    category: "Geometry",

    increaseTitle: "Lengthen Wheelbase",
    decreaseTitle: "Shorten Wheelbase",

    whatItIs:
        "Wheelbase is the distance between the front and rear axles. A longer wheelbase increases stability and smooths vehicle reactions, while a shorter wheelbase increases rotation and agility. Many vehicles allow limited wheelbase adjustment through hub position changes, arm spacers, or adjustable suspension components.",

    whyItMatters:
        "Wheelbase affects stability, rotation, steering response, cornering behavior, bump handling, and overall vehicle balance. It influences how quickly the vehicle changes direction and how stable it remains during braking, acceleration, and cornering.",

    increase: {

        effects: [
            "Increases vehicle stability",
            "Generally reduces rotation",
            "Produces smoother handling characteristics",
            "Reduces weight transfer rate",
            "Can improve bump handling",
            "Can improve performance on high-grip tracks",
            "Can make the vehicle feel less reactive"
        ],

        benefits: [
            "Improved stability",
            "More predictable handling",
            "Better performance in rough conditions",
            "Improved confidence at high speed",
            "More forgiving vehicle behavior"
        ],

        drawbacks: [
            "Reduces agility",
            "Reduces rotation in tight corners",
            "Can make the vehicle feel less responsive",
            "May reduce performance on tight technical layouts"
        ]
    },

    decrease: {

        effects: [
            "Increases vehicle rotation",
            "Increases steering response",
            "Makes the vehicle more agile",
            "Increases weight transfer rate",
            "Allows faster direction changes",
            "Makes the vehicle feel more reactive"
        ],

        benefits: [
            "Improved rotation",
            "Better performance in tight corners",
            "Increased agility",
            "More responsive handling"
        ],

        drawbacks: [
            "Reduced stability",
            "Can become more difficult to drive",
            "May reduce confidence at high speed",
            "Can be less forgiving in rough conditions"
        ]
    },

    tradeOffs: [
        "A longer wheelbase generally increases stability but reduces rotation.",
        "A shorter wheelbase generally increases rotation but reduces stability.",
        "Longer wheelbases are often preferred on high-grip, fast, or rough tracks.",
        "Shorter wheelbases are often preferred on tight, technical layouts.",
        "Many wheelbase adjustments also affect other setup parameters depending on vehicle design."
    ],

    quickSummary:
        "A Longer Wheelbase generally provides greater stability, smoother handling, and improved high-speed confidence while reducing agility and rotation. A Shorter Wheelbase generally increases steering response, agility, and rotation but reduces overall stability and forgiveness."
    },

    {
    id: "trackWidth",

    name: "Track Width",

    category: "Geometry",

    increaseTitle: "Widen Track Width",
    decreaseTitle: "Narrow Track Width",

    whatItIs:
        "Track width is the distance between the left and right wheels on the same axle. It can be adjusted through wheel hex width, hub spacing, suspension geometry, or pivot width depending on vehicle design.",

    whyItMatters:
        "Track width affects stability, corner speed, responsiveness, bump handling, load transfer, and overall vehicle balance. Changes to track width influence how quickly the vehicle reacts to steering inputs and how it distributes cornering forces across the tires.",

    increase: {

        effects: [
            "Generally increases stability",
            "Generally increases corner speed potential",
            "Generally increases responsiveness",
            "Increases initial load transfer",
            "Can increase side bite",
            "Can make the vehicle feel more aggressive"
        ],

        benefits: [
            "Improved stability at speed",
            "Higher corner speed potential",
            "More responsive handling",
            "Improved support on high-grip tracks"
        ],

        drawbacks: [
            "Can become aggressive or edgy",
            "May catch bumps and ruts more easily",
            "Can reduce forgiveness",
            "May be harder to drive consistently on difficult surfaces"
        ]
    },

    decrease: {

        effects: [
            "Generally reduces responsiveness",
            "Generally increases forgiveness",
            "Can improve bump handling",
            "Can improve performance on difficult surfaces",
            "Reduces initial load transfer",
            "Produces smoother handling characteristics"
        ],

        benefits: [
            "More forgiving handling",
            "Improved bump absorption",
            "Often improves consistency on rough or loose tracks",
            "Can increase overall grip on difficult surfaces"
        ],

        drawbacks: [
            "Reduced corner speed potential",
            "Less responsive steering feel",
            "Can feel slower to change direction",
            "May reduce performance on high-grip tracks"
        ]
    },

    tradeOffs: [
        "A wider track width generally increases stability and corner speed but can make the vehicle more aggressive.",
        "A narrower track width generally increases forgiveness and bump handling but reduces responsiveness and corner speed.",
        "Track width changes can influence load transfer characteristics and overall vehicle balance.",
        "The exact effect of track width adjustments can vary depending on vehicle design and how the adjustment is achieved."
    ],

    quickSummary:
        "A Wider Track Width generally provides greater stability, responsiveness, and corner speed potential but can make the vehicle more aggressive and sensitive to bumps. A Narrower Track Width generally provides smoother handling, improved bump absorption, and greater forgiveness but reduces responsiveness and corner speed potential."
    },

    {
    id: "shockOil",

    name: "Shock Oil",

     category: "Hidden",

    showInDatabase: false,

    increaseTitle: "Use Heavier Shock Oil",
    decreaseTitle: "Use Lighter Shock Oil",

    whatItIs:
        "Shock Oil controls suspension damping by regulating how quickly oil flows through the shock piston. Shock oil primarily affects the speed of suspension movement rather than the amount of movement. Heavier oils increase damping while lighter oils decrease damping.",

    whyItMatters:
        "Shock oil influences weight transfer speed, suspension response, bump handling, jump behavior, chassis control, stability, and overall vehicle feel. It determines how quickly the suspension reacts to track conditions and driver inputs.",

    increase: {

        effects: [
            "Increases damping",
            "Slows suspension movement",
            "Slows weight transfer",
            "Increases pack",
            "Increases suspension support",
            "Improves chassis control",
            "Can improve jump takeoff and landing characteristics",
            "Can make the vehicle feel more responsive"
        ],

        benefits: [
            "Improved chassis support",
            "Better stability",
            "More controlled suspension movement",
            "Can improve performance on smooth high-grip tracks",
            "Can improve jump consistency"
        ],

        drawbacks: [
            "Can reduce bump compliance",
            "Can reduce grip on rough tracks",
            "May cause the vehicle to skip across bumps",
            "Can make the suspension less forgiving"
        ]
    },

    decrease: {

        effects: [
            "Decreases damping",
            "Allows suspension to move more freely",
            "Speeds weight transfer",
            "Reduces pack",
            "Improves bump compliance",
            "Allows the suspension to follow the track more easily",
            "Can increase grip on rough surfaces",
            "Can make the vehicle feel calmer"
        ],

        benefits: [
            "Improved bump handling",
            "Better rough-track performance",
            "Increased compliance",
            "Improved grip in difficult conditions",
            "More forgiving handling characteristics"
        ],

        drawbacks: [
            "Reduces suspension support",
            "Can allow excessive chassis movement",
            "May reduce stability on high-grip tracks",
            "Can reduce jump consistency"
        ]
    },

    tradeOffs: [
        "Heavier shock oil generally increases support and control but reduces compliance.",
        "Lighter shock oil generally increases compliance and grip but reduces support and control.",
        "Shock oil primarily controls suspension speed, while springs primarily control suspension movement.",
        "Shock oil should generally be matched to spring stiffness and piston configuration.",
        "Smooth high-grip tracks often tolerate heavier oil, while rough tracks often benefit from lighter oil."
    ],

    quickSummary:
        "Heavier Shock Oil generally provides more support, more pack, and better chassis control, but less compliance and bump handling. Lighter Shock Oil generally provides better compliance, improved rough-track performance, and increased forgiveness, but less support and control."
},

{
    id: "springRate",

    name: "Spring Rate",

    category: "Hidden",

    showInDatabase: false,

    increaseTitle: "Use Stiffer Springs",
    decreaseTitle: "Use Softer Springs",

    whatItIs:
        "Spring Rate determines how much the suspension compresses, rolls, and transfers weight. Springs support the vehicle and control how easily the chassis can move during braking, cornering, acceleration, bumps, and jumps.",

    whyItMatters:
        "Spring rate influences grip, chassis roll, weight transfer, responsiveness, bump handling, jump behavior, and overall vehicle balance. Springs are used to keep the chassis operating within its intended working range for the available traction level.",

    increase: {

        effects: [
            "Increases spring stiffness",
            "Reduces chassis roll",
            "Reduces weight transfer",
            "Increases chassis support",
            "Increases responsiveness",
            "Can improve jump takeoff characteristics",
            "Can make the vehicle react more quickly",
            "Generally reduces mechanical grip"
        ],

        benefits: [
            "Improved chassis support",
            "More responsive handling",
            "Reduced chassis movement",
            "Can improve performance on high-grip tracks",
            "Can improve consistency during aggressive driving"
        ],

        drawbacks: [
            "Can reduce mechanical grip",
            "Can reduce bump compliance",
            "May reduce traction on rough tracks",
            "Can make the vehicle less forgiving"
        ]
    },

    decrease: {

        effects: [
            "Decreases spring stiffness",
            "Increases chassis roll",
            "Increases weight transfer",
            "Improves bump compliance",
            "Increases mechanical grip",
            "Allows the chassis to move more easily",
            "Can make the vehicle feel calmer",
            "Can improve traction in difficult conditions"
        ],

        benefits: [
            "Increased grip",
            "Improved bump handling",
            "Better rough-track performance",
            "More forgiving handling characteristics",
            "Improved traction in low-grip conditions"
        ],

        drawbacks: [
            "Reduces responsiveness",
            "Can allow excessive chassis movement",
            "May reduce support on high-grip tracks",
            "Can make the vehicle feel less precise"
        ]
    },

    tradeOffs: [
        "Stiffer springs generally increase support and responsiveness but reduce mechanical grip.",
        "Softer springs generally increase grip and compliance but reduce responsiveness.",
        "High-grip conditions typically require stiffer springs to control chassis movement.",
        "Low-grip conditions typically benefit from softer springs that allow the chassis to transfer weight more easily.",
        "Spring changes should generally be matched with appropriate shock oil changes."
    ],

    quickSummary:
        "Stiffer Springs generally provide more support, responsiveness, and chassis control but less grip and compliance. Softer Springs generally provide more grip, improved bump handling, and increased forgiveness but less support and responsiveness."
},

{
    id: "rideHeight",

    name: "Ride Height",

    category: "Hidden",

    showInDatabase: false,

    increaseTitle: "Raise Ride Height",
    decreaseTitle: "Lower Ride Height",

    whatItIs:
        "Ride Height is the distance between the chassis and the ground when the vehicle is at its natural settled position. Ride height affects ground clearance, center of gravity, weight transfer, bump handling, and overall vehicle stability.",

    whyItMatters:
        "Ride height influences bump handling, rollover resistance, corner speed, stability, jump behavior, and how well the vehicle handles rough track conditions. Small changes can significantly affect how aggressive or forgiving the vehicle feels.",

    increase: {

        effects: [
            "Raises the chassis farther from the ground",
            "Increases ground clearance",
            "Raises the center of gravity",
            "Can improve bump handling",
            "Can improve rough-track performance",
            "Allows the suspension more room to work",
            "Can increase weight transfer",
            "Can make the vehicle feel more forgiving"
        ],

        benefits: [
            "Better performance on rough tracks",
            "Improved handling over bumps",
            "Reduced bottoming out",
            "More forgiving handling characteristics",
            "Increased ground clearance"
        ],

        drawbacks: [
            "Can increase rollover tendency",
            "May reduce corner speed potential",
            "May feel less responsive on smooth tracks",
            "Can increase chassis movement"
        ]
    },

    decrease: {

        effects: [
            "Lowers the chassis closer to the ground",
            "Lowers the center of gravity",
            "Reduces ground clearance",
            "Can improve corner speed potential",
            "Can improve stability on smooth tracks",
            "Can make the vehicle feel more responsive",
            "Reduces chassis movement",
            "Generally improves rollover resistance"
        ],

        benefits: [
            "Improved corner speed",
            "Improved stability",
            "Reduced rollover tendency",
            "More responsive handling",
            "Improved performance on smooth tracks"
        ],

        drawbacks: [
            "May handle rough tracks worse",
            "Can bottom out on rough surfaces",
            "Reduced ground clearance",
            "May reduce bump compliance"
        ]
    },

    tradeOffs: [
        "Lower ride height generally improves stability and corner speed but reduces rough-track capability.",
        "Higher ride height generally improves rough-track handling but can increase rollover tendency.",
        "Lower ride height reduces chassis movement and lowers the center of gravity.",
        "Higher ride height increases suspension travel utilization and ground clearance.",
        "Ride height should be adjusted in small increments because even minor changes can significantly affect handling."
    ],

    quickSummary:
        "Lower Ride Height generally improves stability, responsiveness, and corner speed on smooth tracks. Higher Ride Height generally improves bump handling, rough-track performance, and forgiveness, but may increase rollover tendency and reduce responsiveness."
},

{
    id: "droop",

    name: "Droop",

    category: "Hidden",

    showInDatabase: false,

    increaseTitle: "Use More Droop",
    decreaseTitle: "Use Less Droop",

    whatItIs:
        "Droop is the amount of suspension extension available from the vehicle's normal ride height. Increasing droop allows the suspension to extend further, while decreasing droop limits suspension extension.",

    whyItMatters:
        "Droop affects traction, weight transfer, chassis roll, bump handling, jump landings, stability, and overall vehicle responsiveness. It influences how well the tires maintain contact with the track over uneven surfaces.",

    increase: {

        effects: [
            "Increases available suspension extension",
            "Generally increases traction",
            "Allows the tires to maintain contact with the track longer",
            "Increases chassis roll potential",
            "Improves bump handling",
            "Improves jump landings",
            "Allows the suspension to follow the track more easily",
            "Can make the vehicle feel softer and more forgiving"
        ],

        benefits: [
            "Improved traction",
            "Better bump handling",
            "Improved jump landing performance",
            "Better performance on rough tracks",
            "More forgiving handling"
        ],

        drawbacks: [
            "Can increase chassis roll",
            "Can reduce responsiveness",
            "May make the vehicle feel less precise",
            "Can make weight transfer feel slower",
            "Too much droop can make the vehicle difficult to control"
        ]
    },

    decrease: {

        effects: [
            "Reduces available suspension extension",
            "Generally reduces traction",
            "Reduces chassis roll potential",
            "Increases responsiveness",
            "Improves precision",
            "Makes the vehicle feel more direct",
            "Can reduce rollover tendency",
            "May reduce bump and landing performance"
        ],

        benefits: [
            "More responsive handling",
            "Improved precision",
            "Reduced chassis movement",
            "Often beneficial on smooth high-grip tracks",
            "Improved stability"
        ],

        drawbacks: [
            "Reduced traction",
            "Can worsen bump handling",
            "Can worsen jump landings",
            "May reduce performance on rough tracks",
            "Can make the vehicle less forgiving"
        ]
    },

    tradeOffs: [
        "More droop generally increases traction and compliance but reduces responsiveness.",
        "Less droop generally increases responsiveness and precision but reduces traction and compliance.",
        "More droop typically benefits rough, loose, and jump-filled tracks.",
        "Less droop typically benefits smoother, higher-grip tracks.",
        "Droop should be checked regularly because it can change over time through suspension wear and setup adjustments."
    ],

    quickSummary:
        "More Droop generally provides more traction, improved bump handling, better jump landings, and a more forgiving feel. Less Droop generally provides quicker response, greater precision, and reduced chassis movement, but can reduce traction and rough-track performance."
},

{
    id: "shockPosition",

    name: "Shock Position",

    category: "Hidden",

    showInDatabase: false,

    increaseTitle: "Stand Shocks Up",
    decreaseTitle: "Lay Shocks Down",

    whatItIs:
        "Shock Position refers to the mounting location of the upper shock mount on the shock tower. Moving the upper shock mount outward stands the shock up and reduces its angle. Moving the upper shock mount inward lays the shock down and increases its angle.",

    whyItMatters:
        "Shock position affects suspension progression, chassis roll, grip generation, bump handling, jump behavior, responsiveness, and overall vehicle balance. It is one of the most effective ways to tune suspension feel without changing springs or oil.",

    increase: {

        effects: [
            "Stands the shocks up",
            "Produces a more linear suspension action",
            "Increases suspension support",
            "Reduces chassis roll",
            "Generally increases responsiveness",
            "Makes the vehicle react more quickly",
            "Can improve jump consistency",
            "Can reduce overall grip"
        ],

        benefits: [
            "More responsive handling",
            "Improved chassis support",
            "Reduced chassis roll",
            "Improved jump consistency",
            "Often beneficial on smooth high-grip tracks"
        ],

        drawbacks: [
            "Can reduce overall grip",
            "May reduce forgiveness",
            "Can reduce compliance over bumps",
            "May make the vehicle feel more aggressive"
        ]
    },

    decrease: {

        effects: [
            "Lays the shocks down",
            "Produces a more progressive suspension action",
            "Increases chassis roll",
            "Generally increases grip",
            "Improves compliance over bumps",
            "Allows the suspension to follow the track more easily",
            "Makes the vehicle feel smoother",
            "Increases forgiveness"
        ],

        benefits: [
            "Increased traction",
            "Improved bump handling",
            "Better rough-track performance",
            "More forgiving handling",
            "Improved low-grip performance"
        ],

        drawbacks: [
            "Reduced responsiveness",
            "Can feel less precise",
            "May reduce jump responsiveness",
            "Can allow excessive chassis roll on high-grip tracks"
        ]
    },

    tradeOffs: [
        "Standing the shocks up generally increases support and responsiveness but reduces grip and compliance.",
        "Laying the shocks down generally increases grip and compliance but reduces responsiveness.",
        "Standing the shocks up produces a more linear suspension action, while laying the shocks down produces a more progressive suspension action.",
        "Smooth high-grip tracks often favor more upright shock positions, while rough or low-grip tracks often favor more laid-down positions."
    ],

    quickSummary:
        "Standing the Shocks Up generally increases support, responsiveness, and precision while reducing grip and compliance. Laying the Shocks Down generally increases traction, bump handling, and forgiveness while reducing responsiveness."
},

{
    id: "shockPiston",

    name: "Shock Piston",

    category: "Hidden",

    showInDatabase: false,

    increaseTitle: "Use Higher-Pack Pistons",
    decreaseTitle: "Use Lower-Pack Pistons",

    whatItIs:
        "Shock Pistons control how shock oil flows through the shocks during suspension movement. Piston tuning is primarily achieved by changing the number of holes, hole size, or piston design. While shock oil mainly determines damping level, pistons largely determine pack characteristics, suspension compliance, and high-speed suspension behavior.",

    whyItMatters:
        "Shock pistons influence bump handling, jump landings, bottoming resistance, chassis support, suspension compliance, and overall vehicle balance. Piston changes allow tuning of high-speed shock behavior while maintaining a desired damping level through oil adjustments.",

    increase: {

        effects: [
            "Uses smaller holes or fewer holes",
            "Increases damping resistance at high shaft speeds",
            "Increases pack",
            "Increases bottoming resistance",
            "Increases suspension support",
            "Can improve jump landings",
            "Can make the vehicle feel more responsive",
            "Can improve performance on smooth tracks"
        ],

        benefits: [
            "Improved jump landing support",
            "Reduced bottoming",
            "Improved chassis support",
            "More responsive handling",
            "Can improve performance on smooth tracks"
        ],

        drawbacks: [
            "Can reduce suspension compliance",
            "Can reduce grip on rough tracks",
            "May cause the vehicle to skip across bumps",
            "Can make the vehicle feel less forgiving"
        ]
    },

    decrease: {

        effects: [
            "Uses larger holes or more holes",
            "Reduces damping resistance at high shaft speeds",
            "Reduces pack",
            "Improves suspension compliance",
            "Allows the suspension to react more freely",
            "Improves bump absorption",
            "Can increase grip on rough surfaces",
            "Can make the vehicle feel smoother"
        ],

        benefits: [
            "Improved bump handling",
            "Better rough-track performance",
            "Increased suspension compliance",
            "Can improve grip in difficult conditions",
            "More forgiving handling characteristics"
        ],

        drawbacks: [
            "Reduced jump landing support",
            "Increased bottoming tendency",
            "Reduced suspension support",
            "May reduce performance on smooth tracks"
        ]
    },

    tradeOffs: [
        "Smaller or fewer piston holes generally increase pack and support but reduce compliance.",
        "Larger or more piston holes generally improve compliance and bump handling but reduce support and pack.",
        "Piston changes primarily affect high-speed suspension behavior, while shock oil changes primarily affect overall damping.",
        "Piston and oil changes should typically be considered together when tuning shocks.",
        "Smooth tracks and large jumps often benefit from more pack, while rough tracks often benefit from less pack."
    ],

    quickSummary:
        "Higher-Pack Pistons generally provide more support, more pack, improved jump landings, and increased responsiveness. Lower-Pack Pistons generally provide better compliance, improved bump handling, increased rough-track grip, and a smoother, more forgiving feel."
},

];
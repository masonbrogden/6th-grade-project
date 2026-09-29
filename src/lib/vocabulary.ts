/**
 * Investigations in Earth Science vocabulary.
 *
 * Terms come from the MCPS Grade 6 curriculum packet ("grade 6 info.pdf",
 * pages 3-15). `definition` is rewritten for a 5th-6th grade reading level by
 * scripts/simplify-vocabulary.mjs; `source` is the packet's original wording,
 * kept so the rewrite stays checkable.
 *
 * Course content, not app logic — regenerate wholesale rather than hand-editing.
 */

export type VocabEntry = {
  term: string;
  /** Student-facing wording, written for this site's reading level. */
  definition: string;
  /** The curriculum packet's original definition. */
  source: string;
};

export const VOCABULARY: VocabEntry[] = [
  {
    term: "Abiotic Factor",
    definition:
      "A nonliving thing in an ecosystem, like water, sunlight, or soil.",
    source: "A nonliving physical or chemical part of an ecosystem.",
  },
  {
    term: "Abrasion",
    definition: "Wearing something down by rubbing it against something else.",
    source: "The process of wearing something down by friction.",
  },
  {
    term: "Absolute age",
    definition: "How many years old something actually is.",
    source: "The actual age in years of an event or object.",
  },
  {
    term: "Acid Rain",
    definition:
      "Rain that is more acidic than normal because of pollution in the air.",
    source: "Rain that has become more acidic than normal due to pollution.",
  },
  {
    term: "Aftershock",
    definition:
      "A smaller earthquake that happens after a big earthquake in the same place.",
    source:
      "A smaller earthquake that follows a more powerful earthquake in the same area.",
  },
  {
    term: "Air Mass",
    definition:
      "A huge amount of air with the same temperature and moisture throughout.",
    source:
      "A large volume of air that has nearly the same temperature and humidity at different locations at the same altitude.",
  },
  {
    term: "Air Pollution",
    definition:
      "Harmful things in the air that can hurt living things and the environment.",
    source:
      "Harmful materials added to the air that can cause damage to living things and the environment.",
  },
  {
    term: "Air Pressure",
    definition: "The force that air pushes down on things around it.",
    source: "The force of air molecules pushing on an area.",
  },
  {
    term: "Altitude",
    definition: "How high something is above sea level.",
    source: "The distance above sea level.",
  },
  {
    term: "Asthenosphere",
    definition:
      "The soft, weak layer of Earth's mantle just below the lithosphere.",
    source:
      "The layer in Earth’s upper mantle and directly under the lithosphere in which rock is soft and weak because it is close to melting.",
  },
  {
    term: "Atmosphere",
    definition:
      "The layer of gases that surrounds Earth. It is one of Earth's four main systems.",
    source:
      "The outer layer of gasses of a large body in space, such as a planet or star; the mixture of gasses that surrounds the solid Earth; one of the four parts of the Earth system.",
  },
  {
    term: "Axis of Rotation",
    definition: "An imaginary line that Earth spins around.",
    source:
      "An imaginary line about which a turning body, such as Earth rotates.",
  },
  {
    term: "Barometer",
    definition: "A tool that measures how hard air is pushing down on Earth.",
    source: "An instrument that measures air pressure in the atmosphere.",
  },
  {
    term: "Barrier island",
    definition:
      "A long, narrow strip of land made of sand that forms parallel to the shore.",
    source:
      "A long, narrow island that develops parallel to a coast as a sandbar builds up above the water’s surface.",
  },
  {
    term: "Biodiversity",
    definition:
      "The number of different kinds of living things in an area or on Earth.",
    source:
      "The number and variety of living things found on Earth or within an ecosystem.",
  },
  {
    term: "Biomass",
    definition:
      "Plant or animal material that stores energy from the sun and can be burned for fuel.",
    source:
      "Organic matter that contains stored energy from sunlight and that can be burned as fuel.",
  },
  {
    term: "Biome",
    definition:
      "A large region with its own climate and typical plants. Examples include tundra, desert, and tropical forest.",
    source:
      "A region of Earth that has a particular climate and certain types of plants. Examples are tundra, taiga, desert, grassland, temperate and tropical forests.",
  },
  {
    term: "Biosphere",
    definition: "All living things on Earth in the air, land, and water.",
    source:
      "All living organisms on Earth in the air, on the land, and in the waters; one of the four parts of the Earth system.",
  },
  {
    term: "Biotic Factor",
    definition: "Any living thing in an ecosystem.",
    source: "A living thing in an ecosystem.",
  },
  {
    term: "Blizzard",
    definition:
      "A heavy snowstorm with winds at least 56 kilometers per hour and very cold temperatures below -7°C.",
    source:
      "A blinding snowstorm with winds of at least 56 kilometers per hour (35 mi/h), usually with temperatures below -7°C (20°F).",
  },
  {
    term: "Carrying Capacity",
    definition:
      "The largest number of one kind of living thing that an area can support.",
    source: "The maximum size that a population can reach in an ecosystem.",
  },
  {
    term: "Chemical Weathering",
    definition:
      "When minerals in rock break down and change into different substances.",
    source:
      "The breakdown or decomposition of rock that takes place when minerals change through chemical processes.",
  },
  {
    term: "Cleavage",
    definition: "The way a mineral naturally breaks along flat surfaces.",
    source:
      "The property of a mineral that describes its tendency to break along flat surfaces.",
  },
  {
    term: "Community",
    definition:
      "All the groups of living things that live together in one place and affect each other.",
    source:
      "All the populations that live and interact with each other in a particular place. The community can live in a place as small as a pond or a park, or it can live in a place as large as a rain forest or the ocean.",
  },
  {
    term: "Competition",
    definition:
      "The struggle between living things that need the same limited resource to survive.",
    source:
      "The struggle between two or more living things that depend on the same limited resource.",
  },
  {
    term: "Condensation",
    definition: "The process where water vapor turns into liquid water.",
    source: "The process by which water vapor.",
  },
  {
    term: "Conduction",
    definition: "Heat moving from one thing to another through direct contact.",
    source: "The transfer of heat/energy through direct contact.",
  },
  {
    term: "Conservation",
    definition: "Protecting and saving natural resources so they last longer.",
    source: "The process of saving or protecting a natural resource.",
  },
  {
    term: "Convection",
    definition:
      "Heat moving through a fluid like air or water as it rises when hot and sinks when cool. This creates a circular motion that spreads heat around.",
    source:
      "The transfer of heat/energy through the movement of a fluid like air, molten rock, or water. In Earth's mantle, convection is thought to transfer energy by the motion of solid rock, which when under great heat and pressure can move like a liquid. In the Atmosphere, convection circulates air throughout the atmosphere as warm air rises from the surface and cool air moves in to take its place causing wind.",
  },
  {
    term: "Convection Current",
    definition:
      "A circular pattern where hot material rises in one spot, cools down, and sinks in another spot, then repeats.",
    source:
      "A circulation pattern in which material is heated and rises in one area, then cools and sinks in another area, flowing in a continuous loop.",
  },
  {
    term: "Convergent Boundary",
    definition:
      "A place where two tectonic plates push toward each other and collide.",
    source:
      "A boundary along which two tectonic plates push together, characterized either by subduction or a continental collision.",
  },
  {
    term: "Coriolis Effect",
    definition:
      "The way Earth's spinning makes moving objects curve instead of traveling in straight lines.",
    source:
      "The influence of Earth’s rotation on objects that move over Earth.",
  },
  {
    term: "Crust",
    definition:
      "The thin, rocky outer layer of Earth. It includes all land and ocean floor. It is 7 kilometers thick under oceans and 40 kilometers thick under continents.",
    source:
      "A thin outer layer of rock above a planet’s mantle, including all dry land and ocean basins. Earth’s continental crust is 40 kilometers thick on average and oceanic crust is 7 kilometers thick on average.",
  },
  {
    term: "Crystal",
    definition:
      "A solid where atoms line up in an organized, repeating 3D pattern.",
    source:
      "A solid substance in which the atoms are arranged in an orderly, repeating, three-dimensional pattern.",
  },
  {
    term: "Dam",
    definition:
      "A structure built to stop and control water flow in a river or lake.",
    source:
      "A structure that holds back and controls the flow of water in a river or other body of water.",
  },
  {
    term: "Data",
    definition:
      "Facts and numbers you collect when you watch or test something.",
    source:
      "Information gathered by observation or experimentation that can be used in calculating or reasoning. Data is a plural word; the singular is datum.",
  },
  {
    term: "Density",
    definition: "How much mass is packed into a certain amount of space.",
    source: "A property of matter representing the mass per unit volume.",
  },
  {
    term: "Deposition",
    definition:
      "Sediment that has been carried by water, wind, or ice gets dropped in a new place.",
    source: "The process in which transported sediment is laid down.",
  },
  {
    term: "Desalination",
    definition:
      "Removing salt from ocean water to make fresh water that people can use.",
    source:
      "The process of removing salt from ocean water. Desalination is used to obtain fresh water.",
  },
  {
    term: "Desertification",
    definition:
      "When desert spreads into areas where plants used to grow but have been destroyed.",
    source:
      "The expansion of desert conditions in areas where the natural plant cover has been destroyed.",
  },
  {
    term: "Dew point",
    definition:
      "The temperature at which air becomes so full of water vapor that moisture forms.",
    source:
      "The temperature at which air with a given amount of water vapor will reach saturation.",
  },
  {
    term: "Divergent Boundary",
    definition:
      "A place where two tectonic plates are moving away from each other, like at a mid-ocean ridge.",
    source:
      "A boundary along which two tectonic plates move apart, characterized by either a mid-ocean ridge or a continental rift valley.",
  },
  {
    term: "Drought",
    definition: "A long time with much less rain than normal.",
    source: "A long period of abnormally low amounts of rainfall.",
  },
  {
    term: "Dune",
    definition: "A pile of sand shaped and moved by wind.",
    source: "A mound of sand built up by wind.",
  },
  {
    term: "Earthquake",
    definition:
      "A sudden, strong shaking of the land caused by movement along a fault or plate boundary.",
    source:
      "A sudden violent shaking or movement of the land due to a slip along a fault or plate boundary.",
  },
  {
    term: "Eclipse",
    definition:
      "When one object in space casts a shadow on another. The Moon can pass through Earth's shadow, or the Moon's shadow can cross Earth.",
    source:
      "An event during which one object in space casts a shadow onto another. On Earth, a lunar eclipse occurs when the Moon moves through Earth’s shadow, and a solar eclipse occurs when the Moon’s shadow crosses Earth.",
  },
  {
    term: "Ecology",
    definition:
      "The science of studying how living things interact with each other and where they live.",
    source:
      "The scientific study of how living things interact with each other and their environment.",
  },
  {
    term: "Ecosystem",
    definition:
      "All the living and nonliving things in one place that work together. It can be small like a meadow or large like a forest.",
    source:
      "All the living and nonliving things that interact in a particular environment. An ecosystem can be as small as a meadow or a swamp or as large as a forest or a desert.",
  },
  {
    term: "Electromagnetic Radiation",
    definition:
      "Energy that travels across space as waves. Types include radio waves, microwaves, infrared radiation, visible light, ultraviolet radiation, x-rays, and gamma rays.",
    source:
      "Energy that travels across distances as certain types of waves. Types of electromagnetic radiation are radio waves, microwaves, infrared radiation, visible light, ultraviolet radiation, x-rays, and gamma rays.",
  },
  {
    term: "Elevation",
    definition:
      "How high something sits above sea level or another reference point.",
    source:
      "A measure of how high something is above a reference point, such as sea level.",
  },
  {
    term: "El Nino",
    definition:
      "A change in Pacific Ocean wind patterns and currents that causes temporary climate shifts around the world.",
    source:
      "A disturbance of wind patterns and ocean currents in the Pacific Ocean that causes temporary climate changes in many parts of the world.",
  },
  {
    term: "Energy",
    definition: "The ability to do work or cause something to change.",
    source: "The ability to do work or to cause a change.",
  },
  {
    term: "Environment",
    definition:
      "Everything around a living thing, including both living and nonliving things.",
    source:
      "Everything that surrounds a living thing. An environment is made up of both living and nonliving factors.",
  },
  {
    term: "Epicenter",
    definition:
      "The point on Earth's surface directly above where an earthquake starts.",
    source:
      "The point on Earth’s surface directly above the focus of an earthquake.",
  },
  {
    term: "Equator",
    definition:
      "An imaginary line around the middle of Earth. It splits the planet into a north half and a south half.",
    source:
      "An imaginary east-west line around the center of Earth that divides the planet into the Northern Hemisphere and the Southern Hemisphere; a line set at 0° latitude.",
  },
  {
    term: "Erosion",
    definition:
      "The process where water, wind, or ice picks up sediment and moves it to another place.",
    source:
      "The process in which sediment is picked up and moved from one place to another.",
  },
  {
    term: "Estuary",
    definition:
      "A shoreline area where fresh river water mixes with salty ocean water.",
    source:
      "A shoreline area where fresh water from a river mixes with salt water from the ocean.",
  },
  {
    term: "Evaporation",
    definition:
      "When a liquid changes into a gas as its particles move and spread into the air. It happens at the surface of liquids across many temperatures.",
    source:
      "A process by which a substance changes from its liquid state to its gas state by random particle movement. Evaporation usually occurs at the surface of a liquid over a wide range of temperatures.",
  },
  {
    term: "Extinction",
    definition: "When a species disappears from Earth forever.",
    source:
      "The permanent disappearance of a species. Extrusive, Igneous Rock: Igneous rock that forms as lava cools on the Earth’s surface.",
  },
  {
    term: "Fault",
    definition:
      "A crack in Earth's rock layer where blocks of rock slip past each other.",
    source:
      "A fracture in Earth’s lithosphere along which blocks of rock move past each other.",
  },
  {
    term: "Fault-block mountain",
    definition:
      "A mountain that forms when blocks of rock slide up or down along cracks in Earth's crust as it gets stretched.",
    source:
      "A mountain that forms as blocks of rock move up or down along normal faults in areas where the lithosphere is being pulled apart.",
  },
  {
    term: "Felsic",
    definition: "Igneous rocks with lots of silica and light-colored minerals.",
    source: "Igneous rocks made up of high silica, light colored minerals.",
  },
  {
    term: "Focus",
    definition:
      "The spot underground where an earthquake's rocks first start to move.",
    source:
      "In an earthquake, the point underground where the rocks first begin to move.",
  },
  {
    term: "Folded Mountain",
    definition:
      "A mountain that forms when Earth's crust gets squeezed and rocks bend into large waves.",
    source:
      "A mountain that forms as continental crust is compressed and rocks bend into large folds.",
  },
  {
    term: "Foliation",
    definition:
      "Minerals arranged in flat or wavy parallel stripes in rocks, common in metamorphic rocks.",
    source:
      "The arrangement of minerals within rocks into flat or wavy parallel bands; a characteristic of most metamorphic rocks.",
  },
  {
    term: "Fossil",
    definition: "The remains or traces of a living thing from long ago.",
    source: "A trace or the remains of a once-living thing from long ago.",
  },
  {
    term: "Fossilization",
    definition:
      "The natural processes that preserve old plant and animal remains over time.",
    source:
      "The processes that lead to the preservation of plant and animal remains over time.",
  },
  {
    term: "Fossil Fuels",
    definition:
      "Fuels made from ancient organisms that we burn for energy, like coal and oil.",
    source:
      "Fuels formed from the remains of prehistoric organisms that are burned for energy.",
  },
  {
    term: "Fracture",
    definition:
      "The way a mineral breaks into jagged pieces instead of smooth ones.",
    source: "The tendency of a mineral to break into irregular pieces.",
  },
  {
    term: "Freezing",
    definition: "When a liquid changes into a solid as it gets colder.",
    source:
      "The process by which a substance changes from its liquid state into its solid state.",
  },
  {
    term: "Freezing Point",
    definition: "The temperature where a liquid turns solid when it gets cold.",
    source:
      "The temperature at which a substance changes from its liquid state to its solid state through freezing.",
  },
  {
    term: "Freezing Rain",
    definition:
      "Rain that turns to ice when it lands on cold surfaces and coats them with a layer of ice.",
    source:
      "Rain that freezes when it hits the ground or another surface and coats the surface with ice.",
  },
  {
    term: "Fresh Water",
    definition:
      "Water without salt that tastes, looks, and smells plain. Most lakes and rivers contain this water.",
    source:
      "Water that is not salty and has little or no taste, color, or smell. Most lakes and rivers are made up of fresh water.",
  },
  {
    term: "Front or Frontal Boundary",
    definition: "The line where two different air masses meet.",
    source: "The boundary between air masses.",
  },
  {
    term: "Gas",
    definition:
      "A state of matter with no fixed shape or size, unlike liquids and solids.",
    source:
      "A state of matter different from liquid and solid, with no definite volume and no definite shape.",
  },
  {
    term: "Generator",
    definition:
      "A machine that makes electricity by spinning a magnet inside coils of wire.",
    source:
      "A device that converts kinetic energy, or the energy of motion, into electrical energy. Generators produce electric current by rotating a magnet within a coil of wire or rotating a coil of wire within a magnetic field.",
  },
  {
    term: "Geologic Time Scale",
    definition:
      "A chart showing Earth's history divided into time periods based on major events and changes.",
    source:
      "The summary of Earth’s history, divided into intervals of time defined by major events or changes on Earth.",
  },
  {
    term: "Geosphere",
    definition:
      "All of Earth's land, oceans, and everything underground including the crust, mantle, and core.",
    source:
      "All the features on Earth’s surface-continents, islands, and seafloor-and everything below the surface-the inner and outer core and the mantle; one of the four parts of the Earth system.",
  },
  {
    term: "Geothermal Energy",
    definition:
      "Heat energy from deep inside Earth that moves tectonic plates and can make electricity.",
    source:
      "Heat energy that originates from within Earth and drives the movement of Earth’s tectonic plates. Geothermal energy can be used to generate electricity.",
  },
  {
    term: "Glacier",
    definition:
      "A huge sheet of ice that stays frozen year-round and slowly moves across land.",
    source: "A large mass of ice that exists year-round and moves over land.",
  },
  {
    term: "Global Winds",
    definition:
      "Strong winds that blow in steady patterns across the world for weeks at a time.",
    source:
      "Winds that travel long distances in steady patterns over several weeks.",
  },
  {
    term: "Gravity",
    definition:
      "The force that pulls objects toward each other because of how much stuff they contain.",
    source: "The force that objects exert on each other because of their mass.",
  },
  {
    term: "Greenhouse Effect",
    definition:
      "When certain air gases trap heat near Earth by absorbing and releasing infrared radiation.",
    source:
      "The process by which certain gasses in a planet’s atmosphere absorb and emit infrared radiation, resulting in an increase in surface temperature.",
  },
  {
    term: "Greenhouse Gasses",
    definition:
      "Gases like carbon dioxide and methane that trap heat in the atmosphere and warm Earth.",
    source:
      "Gasses, such as carbon dioxide and methane, that absorb and give off infrared radiation as part of the greenhouse effect.",
  },
  {
    term: "Groundwater",
    definition: "Water that collects and stays underground in soil and rock.",
    source: "Water that collects and is stored underground.",
  },
  {
    term: "Habitat",
    definition:
      "The natural place where a living thing finds everything it needs to survive, like a desert, coral reef, or freshwater lake.",
    source:
      "The natural environment in which a living thing gets all that it needs to live; examples include a desert, a coral reef, and a freshwater lake.",
  },
  {
    term: "Hail",
    definition:
      "Balls or lumps of ice that fall from thunderstorm clouds when air moves around inside the cloud.",
    source:
      "Layered lumps or balls of ice that fall from cumulonimbus clouds due circulation within the cloud system.",
  },
  {
    term: "Half-life",
    definition:
      "The time it takes for half of the atoms in a radioactive sample to change into a different form.",
    source:
      "The length of time it takes for half of the atoms in a sample of a radioactive element to change from an unstable form into another form.",
  },
  {
    term: "Hardness",
    definition: "How well a mineral or material resists being scratched.",
    source: "The resistance of a mineral or other material to being scratched.",
  },
  {
    term: "High-pressure System",
    definition:
      "A calm, clear weather pattern where sinking air spreads outward toward areas with lower pressure.",
    source:
      "A generally calm and clear weather system that occurs when air sinks down in a high-pressure center and spreads out toward areas of lower pressure as it nears the ground.",
  },
  {
    term: "Hot Spot",
    definition:
      "A place where hot material from deep inside a planet rises and causes volcanic activity at the surface.",
    source:
      "An area where a column of hot material rises from deep within a planet’s mantle and heats the lithosphere above it, often causing volcanic activity at the surface.",
  },
  {
    term: "Humidity",
    definition: "The amount of water vapor in the air.",
    source: "The amount of water vapor in air.",
  },
  {
    term: "Humus",
    definition: "Decayed plant and animal material found in soil.",
    source: "The decayed organic matter in soil.",
  },
  {
    term: "Hurricane",
    definition:
      "A tropical storm with very strong winds of at least 120 kilometers per hour and low pressure.",
    source:
      "A tropical low-pressure system with sustained winds of 120 kilometers per hour (74 mi/h).",
  },
  {
    term: "Hydroelectric Energy",
    definition:
      "Electricity made by moving water, like a river turning machines inside a dam.",
    source:
      "Electricity that is generated by the conversion of the energy of moving water.",
  },
  {
    term: "Hydrogen Fuel Cell",
    definition:
      "A device that mixes hydrogen and oxygen to make electricity. It gives off heat and water too.",
    source:
      "A device that uses hydrogen and oxygen to produce electricity. The byproducts are heat and water.",
  },
  {
    term: "Hydrosphere",
    definition:
      "All water on Earth, including oceans, lakes, glaciers, rivers, underground water, and water vapor in the air. It is one of Earth's four main systems.",
    source:
      "All water on Earth-in the atmosphere and in the oceans, lakes, glaciers, rivers, streams, and underground reservoirs; one of the four parts of the Earth system.",
  },
  {
    term: "Hydrothermal Vent",
    definition:
      "An opening on the ocean floor where hot water shoots up and mixes with cold ocean water above it.",
    source:
      "An opening in the sea floor from which heated water rises and mixes with the ocean water above.",
  },
  {
    term: "Hypothesis",
    definition:
      "A possible explanation for something you observe. Scientists use it to make predictions they can test.",
    source:
      "A tentative explanation for an observation or phenomenon. A hypothesis is used to make testable predictions.",
  },
  {
    term: "Ice Age",
    definition:
      "A long period when Earth's surface gets much colder and huge sheets of ice spread far beyond the poles.",
    source:
      "A period of time during which surface temperatures drop significantly and huge ice sheets spread out beyond the polar regions.",
  },
  {
    term: "Iceberg",
    definition:
      "A large chunk of ice floating in the ocean that broke off from a glacier.",
    source: "A mass of floating ice that broke away from a glacier.",
  },
  {
    term: "Igneous Rock",
    definition:
      "Rock that forms when melted rock from inside Earth cools down and becomes solid.",
    source: "Rock that forms as molten rock cools and becomes solid.",
  },
  {
    term: "Impermeable",
    definition: "Something that does not let water pass through it.",
    source: "Resistant to the passage of water.",
  },
  {
    term: "Index Fossil",
    definition:
      "A fossil of an organism that was common, lived in many places, and existed for only a short time in history. Scientists use them to figure out how old rock layers are.",
    source:
      "A fossil of an organism that was common, lived in many areas, and existed only during a certain span of time. Index fossils are used to help determine the age of rock layers.",
  },
  {
    term: "Infrared Radiation",
    definition: "Heat energy from the sun that you cannot see with your eyes.",
    source: "Radiation of lower frequencies than visible light.",
  },
  {
    term: "Inner Core",
    definition:
      "A solid ball of metal at Earth's center, made mostly of nickel and iron.",
    source:
      "A solid sphere of metal, mainly nickel and iron, at Earth’s center.",
  },
  {
    term: "Intertidal Zone",
    definition:
      "The narrow strip of ocean shore between where the tide goes up and where it goes down.",
    source:
      "The narrow ocean margin between the high-tide mark and the low-tide mark.",
  },
  {
    term: "Intrusive Igneous Rock",
    definition:
      "Rock that forms when melted rock cools slowly beneath Earth's surface instead of on top of it.",
    source: "Igneous rock that forms as magma cools below Earth’s surface.",
  },
  {
    term: "Invertebrate",
    definition: "An animal without a backbone.",
    source: "An animal that has no backbone.",
  },
  {
    term: "Island Arc",
    definition:
      "A chain of islands created by volcanoes where ocean plates push down beneath each other.",
    source:
      "A chain of islands formed from volcanic activity due to subduction along an ocean-ocean convergent boundary.",
  },
  {
    term: "Isobar",
    definition:
      "A line on a weather map showing places with the same air pressure.",
    source:
      "A line on a weather map connecting places that have the same air pressure.",
  },
  {
    term: "Isotherm",
    definition:
      "A line on a weather map showing places with the same temperature.",
    source:
      "A line on a weather map connecting places that have the same temperature.",
  },
  {
    term: "Jet Stream",
    definition:
      "A fast wind high in the atmosphere that moves from west to east across long distances.",
    source:
      "A wind that flows in the upper troposphere from west to east over vast distances at great speeds.",
  },
  {
    term: "Lahar",
    definition:
      "A fast-moving mudflow from a volcano made of ash, rock, and water mixed together.",
    source:
      "A fast moving mudflow or debris flow composed of a mixture of pyroclastic material, rocky debris and water.",
  },
  {
    term: "Latitude",
    definition:
      "How far north or south a place is from the equator, measured in degrees.",
    source: "The distance in degrees north or south from the equator.",
  },
  {
    term: "Lava",
    definition:
      "Hot, melted rock that comes out of a volcano onto Earth's surface.",
    source: "Molten rock that reaches a planet’s surface through a volcano.",
  },
  {
    term: "Lava Flow",
    definition:
      "Streams of melted rock pouring out from a volcano during an eruption.",
    source: "Streams of molten rock that pour or ooze from an erupting vent.",
  },
  {
    term: "Limiting Factor",
    definition:
      "Something that stops a population from growing bigger in an ecosystem.",
    source:
      "A factor or condition that prevents the continuing growth of a population in an ecosystem.",
  },
  {
    term: "Liquefaction",
    definition:
      "When ground shaking makes wet soil move and act like a liquid.",
    source:
      "A process in which the shaking of ground causes loose, wet soil to act like a liquid.",
  },
  {
    term: "Lithosphere",
    definition:
      "Earth's outer layer made of the crust and hard upper mantle, broken into moving plates.",
    source:
      "The layer of Earth made up of the crust and the rigid rock of the upper mantle, averaging about 40 kilometers thick and broken into tectonic plates.",
  },
  {
    term: "Loess",
    definition:
      "Tiny pieces of sediment that wind blows and deposits in layers.",
    source: "Deposits of fine-grained, wind-blown sediment.",
  },
  {
    term: "Longitude",
    definition:
      "The distance in degrees east or west from the prime meridian, measured from 0° to 180°.",
    source:
      "The distance in degrees east or west of the prime meridian. Longitude lines are numbered from 0° to 180°.",
  },
  {
    term: "Low-pressure System",
    definition:
      "A large weather system where air swirls into a low-pressure center, then rises upward, often bringing storms.",
    source:
      "A large and often stormy weather system that occurs when air moves around and into a low-pressure center, then moves up to higher altitudes.",
  },
  {
    term: "Luster",
    definition:
      "How a mineral's surface looks when light hits it, such as shiny like metal or dull.",
    source:
      "The property of a mineral that describes the way in which light reflects from its surface. Major types of luster are metallic and nonmetallic.",
  },
  {
    term: "Macroinvertebrate",
    definition:
      "Water animals like insect larvae, snails, worms, and crayfish that show how healthy a watershed is.",
    source:
      "Insects in their nymph and larval stages, snails, worms, crayfish, and clams that spend at least part of their lives in water and are important in determining the health of a local watershed.",
  },
  {
    term: "Mafic",
    definition: "Dark igneous rocks that contain lots of iron-rich minerals.",
    source: "Igneous rocks made primarily of iron rich, dark colored minerals.",
  },
  {
    term: "Magma",
    definition: "Melted rock found beneath Earth's surface.",
    source: "Molten rock beneath Earth’s surface.",
  },
  {
    term: "Magnetic Reversal",
    definition:
      "When Earth's magnetic field flips so the north pole becomes the south pole and vice versa.",
    source:
      "A switch in the direction of Earth’s magnetic field so that the magnetic north pole becomes the magnetic south pole and the magnetic south pole becomes the magnetic north pole.",
  },
  {
    term: "Magnetic Stripe",
    definition:
      "Patterns of magnetism in ocean floor rocks that record changes in Earth's magnetic field over time.",
    source:
      "Patterns of magnetism created by ocean floor rocks recording changes in Earth's magnetic field over time.",
  },
  {
    term: "Mantle",
    definition:
      "The thick rock layer between Earth's crust and outer core that flows in hot currents.",
    source:
      "The layer of rock between Earth’s outer core and crust, in which most rock is hot enough to flow in convection currents; Earth’s thickest layer.",
  },
  {
    term: "Marine Climate",
    definition:
      "A climate near an ocean with mild temperatures and steady rainfall.",
    source:
      "A climate influenced by a nearby ocean, with generally mild temperatures and steady precipitation.",
  },
  {
    term: "Mass",
    definition: "How much matter makes up an object.",
    source: "A measure of how much matter an object is made of.",
  },
  {
    term: "Mass Extinction",
    definition:
      "A time in Earth's history when many species died out at nearly the same time.",
    source:
      "One of several periods in Earth’s history when large numbers of species became extinct at nearly the same time.",
  },
  {
    term: "Mass Wasting",
    definition: "Loose rock or soil sliding downhill.",
    source: "The downhill movement of loose rock or soil.",
  },
  {
    term: "Matter",
    definition:
      "Anything that has mass and takes up space. It can be a solid, liquid, or gas.",
    source:
      "Anything that has mass and volume. Matter exists ordinarily as a solid, a liquid, or a gas.",
  },
  {
    term: "Mechanical Weathering",
    definition:
      "Rock breaking into smaller pieces without changing what it is made of.",
    source:
      "The breakdown of rock into smaller pieces of the same material without any change in its composition.",
  },
  {
    term: "Mercalli Scale",
    definition: "A scale that measures how strong an earthquake feels.",
    source: "The measurement scale measures the intensity of an earthquake.",
  },
  {
    term: "Metamorphic Rock",
    definition:
      "Rock formed when heat or pressure changes an existing rock's structure, texture, or minerals.",
    source:
      "Rock formed as heat or pressure causes existing rock to change in structure, texture, or mineral composition.",
  },
  {
    term: "Metamorphism",
    definition:
      "The process where heat or pressure changes a rock's structure or minerals.",
    source:
      "The process by which a rock’s structure or mineral composition is changed by pressure or heat.",
  },
  {
    term: "Meteorologist",
    definition: "A scientist who studies weather and the atmosphere.",
    source: "A scientist who studies weather.",
  },
  {
    term: "Mid-ocean Ridge",
    definition:
      "An underwater mountain range where new ocean floor forms from volcanic activity.",
    source:
      "A long line of sea-floor mountains where new ocean crust is formed by volcanic activity along a divergent boundary.",
  },
  {
    term: "Mineral",
    definition:
      "A natural solid with a definite chemical makeup and crystal structure.",
    source:
      "A substance that forms in nature, is a solid, has a definite chemical makeup, and has a crystal structure.",
  },
  {
    term: "Monsoon",
    definition: "A wind that changes direction depending on the season.",
    source: "A wind that changes direction with the seasons.",
  },
  {
    term: "Natural Resource",
    definition:
      "Anything from nature that people use, like water, trees, oil, or sunlight.",
    source:
      "Any natural material or energy from Earth’s environment that humans use to meet their needs.",
  },
  {
    term: "Neap Tide",
    definition:
      "A tide with a small range that happens when the Moon is in its first- and third-quarter phases.",
    source:
      "A tide of small range occurring during the first- and third-quarter phases of the Moon.",
  },
  {
    term: "Nebula",
    definition: "A cloud of gas and dust in space where stars form.",
    source: "A cloud of gas and dust in space. Stars form in nebulae.",
  },
  {
    term: "Neutron Star",
    definition:
      "A very dense core left behind after a massive star explodes in a supernova.",
    source:
      "A dense core that may be left behind after a higher-mass star explodes in a supernova.",
  },
  {
    term: "Nonpoint-source Pollution",
    definition:
      "Pollution that comes from many scattered places, making it hard to find the exact source.",
    source: "Pollution with a source that is hard to find or scattered.",
  },
  {
    term: "Nonrenewable Resource",
    definition:
      "A resource that runs out because it is used faster than nature can replace it.",
    source:
      "A resource that exists in a fixed amount or is used up more quickly than it can be replaced in nature.",
  },
  {
    term: "Nuclear Fission",
    definition:
      "Splitting the nuclei of radioactive atoms to release huge amounts of energy as radiation and heat.",
    source:
      "The process of splitting the nuclei of radioactive atoms, which releases huge amounts of energy mainly in the form of radiation and heat energy.",
  },
  {
    term: "Ocean Current",
    definition: "A large stream of moving ocean water.",
    source: "A mass of moving ocean water.",
  },
  {
    term: "Oceanic-Continental Subduction",
    definition:
      "A plate boundary where oceanic crust sinks under continental crust. This usually creates volcanoes on the continent above.",
    source:
      "A boundary along which a plate carrying oceanic crust sinks beneath a plate with continental crust. This type of subduction typically forms volcanoes on the continents above the zone.",
  },
  {
    term: "Oceanic-Oceanic Subduction",
    definition:
      "A plate boundary where one oceanic plate sinks under another oceanic plate. This usually creates island arcs.",
    source:
      "A boundary along which a plate carrying oceanic crust sinks beneath another plate with oceanic crust. This type of subduction typically forms island arcs.",
  },
  {
    term: "Organism",
    definition:
      "An individual living thing made of one or many cells that can grow and reproduce.",
    source:
      "An individual living thing, made up of one or many cells, that is capable of growing and reproducing.",
  },
  {
    term: "Outer Core",
    definition:
      "A layer of hot liquid metal around Earth's inner core, made mostly of nickel and iron.",
    source:
      "A layer of molten metal, mainly nickel and iron, that surrounds Earth’s inner core.",
  },
  {
    term: "Ozone",
    definition: "A gas made of three oxygen atoms bonded together.",
    source: "A gas molecule that consists of three oxygen atoms.",
  },
  {
    term: "Paleontology",
    definition: "The science that studies fossils from old plants and animals.",
    source:
      "the branch of science concerned with the fossil remains of plants and animals.",
  },
  {
    term: "Pangaea",
    definition:
      "A huge landmass that held all of Earth's continents together. It started breaking apart about 200 million years ago.",
    source:
      "A hypothetical supercontinent that included all o f the landmasses on Earth. It began breaking apart about 200 million years ago.",
  },
  {
    term: "Particulates",
    definition: "Tiny bits of dust, dirt, or pollen floating in the air.",
    source:
      "Tiny particles or droplets, such as dust, dirt, and pollen, that are mixed in with air.",
  },
  {
    term: "Permeable",
    definition: "Allowing water to pass through it.",
    source: "Allowing the passage of water.",
  },
  {
    term: "Pillow Basalt",
    definition: "A volcanic rock that forms when lava erupts underwater.",
    source:
      "A volcanic igneous rock that forms when lava of basaltic composition is erupted underwater.",
  },
  {
    term: "Point-source Pollution",
    definition:
      "Harmful stuff that gets into water from one exact spot. You can point to where it comes from.",
    source: "Pollution that enters water from a known source.",
  },
  {
    term: "Pollution",
    definition: "Harmful substances released into the air, water, or land.",
    source: "The release of harmful substances into the air, water, or land.",
  },
  {
    term: "Population",
    definition:
      "A group of the same kind of living things in one area. For example, all the lizards of one type living in a desert.",
    source:
      "A group of organisms of the same species that live in the same area. For example, a desert will have populations of different species of lizards and cactus plants.",
  },
  {
    term: "Population Density",
    definition:
      "How many living things live in a certain space. A city's population density might be how many people live in one square kilometer.",
    source:
      "A measure of the number of organisms that live in a given area. The population density of a city may be given as the number of people living in a square kilometer.",
  },
  {
    term: "Precipitation",
    definition: "Water falling to Earth as rain, snow, sleet, or hail.",
    source:
      "Any type of liquid or solid water that falls to Earth’s surface, such as rain, snow, or hail.",
  },
  {
    term: "Prime Meridian",
    definition:
      "An imaginary north-south line through Greenwich, England that divides Earth into eastern and western halves.",
    source:
      "An imaginary north-south line that divides the planet into the Eastern Hemisphere and the Western Hemisphere. The prime meridian passes through Greenwich, England.",
  },
  {
    term: "Pyroclastic Flow",
    definition:
      "A fast-moving cloud of super-hot gas and rock pieces that rushes down a volcano during an eruption.",
    source:
      "A dense cloud of superheated gasses and rock fragments that moves quickly downhill from an erupting volcano.",
  },
  {
    term: "Radiation",
    definition:
      "Heat and energy that travel through space as waves you cannot see.",
    source:
      "The transfer of heat/energy through space by electromagnetic waves.",
  },
  {
    term: "Rain Shadow",
    definition:
      "A dry area on the far side of a mountain where less rain falls.",
    source:
      "An area on the downwind side of a mountain that gets less precipitation than the side that faces the wind.",
  },
  {
    term: "Recrystallization",
    definition:
      "When bonds between atoms in minerals break apart and connect again in new ways during metamorphism.",
    source:
      "The process by which bonds between atoms in minerals break and re-form in new ways during metamorphism.",
  },
  {
    term: "Recycling",
    definition:
      "Using materials again instead of throwing them away, like paper, glass, and metal.",
    source:
      "The reusing of materials that people would otherwise throw away, such as paper, glass, plastics, and certain metals.",
  },
  {
    term: "Relative Age",
    definition: "How old something is compared to other things or events.",
    source:
      "The age of an event or object in relation to other events or objects.",
  },
  {
    term: "Relative Humidity",
    definition:
      "How much water vapor is in the air right now compared to how much it could hold at that temperature.",
    source:
      "The comparison of the amount of water vapor in air with the maximum amount of water vapor that can be present in air at that temperature.",
  },
  {
    term: "Renewable Resource",
    definition:
      "A natural material that nature replaces as fast as people use it up.",
    source:
      "A natural resource that can be replaced in nature at about the same rate as it is used.",
  },
  {
    term: "Revolution",
    definition:
      "One object moving in a circle around another, like Earth orbiting the Sun.",
    source:
      "The motion of one body around another, such as Earth in its orbit around the Sun; the time it takes an object to go around once.",
  },
  {
    term: "Richter Scale",
    definition: "A tool that measures how strong an earthquake is.",
    source:
      "The scale that measures the strength or magnitude of an earthquake.",
  },
  {
    term: "Rift valley",
    definition:
      "A deep valley created when tectonic plates pull apart from each other.",
    source:
      "A deep valley formed as tectonic plates move apart, such as along a mid-ocean ridge.",
  },
  {
    term: "Riparian Buffer",
    definition:
      "Plants growing near a stream that shade it and protect it from nearby land activities.",
    source:
      "A vegetated area near a stream which helps shade and partially protect the stream from the impact of adjacent land uses.",
  },
  {
    term: "Rock",
    definition:
      "A solid that forms naturally and is usually made of one or more minerals.",
    source:
      "A naturally formed solid that is usually made up of one or more types of minerals.",
  },
  {
    term: "Rock Cycle",
    definition:
      "Natural processes that continuously break down rocks into pieces, press them together into new rocks, and break them down again.",
    source:
      "The set of natural, repeating processes that form, change, break down, and re-form rocks.",
  },
  {
    term: "Salinity",
    definition: "How much salt is dissolved in water.",
    source: "The measure of the amount of dissolved salt contained in water.",
  },
  {
    term: "Salt Water",
    definition:
      "Water containing dissolved salts and minerals. Oceans are made of this type of water.",
    source:
      "Water that contains dissolved salts and other minerals. Oceans consist of salt water.",
  },
  {
    term: "Seafloor Spreading",
    definition:
      "When melted rock pushes up and adds new crust to the ocean floor.",
    source:
      "The process by which molten material adds new oceanic crust to the ocean floor.",
  },
  {
    term: "Sediment",
    definition: "Broken pieces of rock created by weathering and erosion.",
    source:
      "A naturally occurring material that is broken down by processes of weathering and erosion.",
  },
  {
    term: "Sedimentary Rock",
    definition:
      "Rock formed when pieces of older rocks and loose materials get pressed or cemented together, or when dissolved minerals build up in layers.",
    source:
      "Rock formed as pieces of older rocks and other loose materials get pressed or cemented together or as dissolved minerals re-form and build up in layers.",
  },
  {
    term: "Seismic Wave",
    definition: "Energy waves that travel through the ground.",
    source: "The energy waves.",
  },
  {
    term: "Seismograph",
    definition: "A machine that records and measures ground movements.",
    source: "An instrument that constantly records ground movements.",
  },
  {
    term: "Sleet",
    definition:
      "Ice pellets that form when rain falls through cold air and freezes before hitting the ground.",
    source:
      "Small pellets of ice that form when rain passes through a layer of cold air and freezes before hitting the ground.",
  },
  {
    term: "Smog",
    definition:
      "A brownish haze of air pollution created when sunlight makes unburnt fuels and gases mix chemically.",
    source:
      "The combination of smoke and fog; a type of air pollution that occurs when sunlight causes unburnt fuels, fumes, and other gasses to react chemically, often seen as a brownish haze.",
  },
  {
    term: "Soil Horizon",
    definition:
      "A single soil layer with its own physical and chemical properties, different from layers above or below it.",
    source:
      "A soil layer with physical and chemical properties that differ from those of soil layers above or below it.",
  },
  {
    term: "Soil Profile",
    definition:
      "All the soil layers stacked together in one location, showing every different layer.",
    source:
      "The soil horizons in a specific location; a cross section of soil layers that displays all soil horizons.",
  },
  {
    term: "Solar Cell",
    definition: "A device that turns sunlight into electricity.",
    source:
      "A device that converts the energy of sunlight into electrical energy.",
  },
  {
    term: "Sonar",
    definition:
      "A system that uses underwater sound waves to find distance and locate objects.",
    source:
      "A system that uses underwater sound waves to measure distance and locate objects.",
  },
  {
    term: "Species",
    definition:
      "A group of living things that can breed together and have babies that can also breed.",
    source:
      "A group of living things that are so closely related that they can breed with one another and produce offspring that can breed as well.",
  },
  {
    term: "Spectrum",
    definition:
      "A range of colors that appears when light passes through a prism, or radiation separated by wavelengths.",
    source:
      "Radiation from a source separated into a range of wavelengths. 2. The range of colors that appears in a beam of visible light when it passes through a prism.",
  },
  {
    term: "Storm Surge",
    definition:
      "A rapid rise in water level along a coast when a hurricane pushes ocean water onto land, causing flooding.",
    source:
      "A rapid rise in water level in a coastal area that occurs when a hurricane pushes a huge mass of ocean water, often leading to flooding and widespread destruction.",
  },
  {
    term: "Streak",
    definition:
      "The color of powder left when a mineral is scraped across a surface, used to classify minerals.",
    source:
      "The color of a mineral powder left behind when a mineral is scraped across a surface; a method for classifying minerals.",
  },
  {
    term: "Stress",
    definition:
      "A force that pushes, pulls, or presses one object against another.",
    source:
      "The force applied by an object pressing on, pulling on, or pushing against another object.",
  },
  {
    term: "Subduction",
    definition:
      "The process where an oceanic plate sinks beneath another plate deep into Earth's mantle.",
    source:
      "The process by which an oceanic tectonic plate sinks under another plate into Earth’s mantle.",
  },
  {
    term: "Subduction Zone",
    definition:
      "A place where two tectonic plates meet and one plate sinks beneath the other.",
    source:
      "A convergent plate boundary where one plate sinks or subducts beneath the other.",
  },
  {
    term: "Sunspot",
    definition:
      "A dark spot on the Sun's surface that appears darker because it is cooler than the surrounding area.",
    source:
      "A darker spot on the photosphere of the Sun. A sunspot appears dark because it is cooler than the surrounding area.",
  },
  {
    term: "Sustainable",
    definition:
      "Managing natural resources so they are not used up or damaged, like protecting groundwater and topsoil.",
    source:
      "A term that describes the management of certain natural resources so that they are not harmed or used up. Examples include maintaining clean groundwater and protecting topsoil from erosion.",
  },
  {
    term: "Technology",
    definition:
      "The use of scientific knowledge to solve problems and create new tools, products, or processes.",
    source:
      "The use of scientific knowledge to solve problems or engineer new products, tools, or processes.",
  },
  {
    term: "Tectonic Plate",
    definition:
      "One of Earth's huge moving pieces that makes up the lithosphere. Each piece carries both ocean floor and land crust.",
    source:
      "One of the large, moving pieces into which Earth’s lithosphere is broken and which commonly carries both oceanic and continental crust.",
  },
  {
    term: "Tectonics",
    definition:
      "The processes where hot material under a crust moves and changes the crust above it. Earth's type is called plate tectonics.",
    source:
      "The processes in which the motion of hot material under a crust changes the crust of a space body. Earth has a specific type of tectonics called plate tectonics.",
  },
  {
    term: "Telescope",
    definition:
      "A tool that gathers light so you can see things that are very far away, like stars.",
    source:
      "A device that gathers visible light or another form of electromagnetic radiation.",
  },
  {
    term: "Theory",
    definition:
      "A well-tested scientific explanation supported by lots of evidence. Scientists widely accept theories that match all available facts.",
    source:
      "In science, a set of widely accepted explanations of observations and phenomena. A theory is a well-tested explanation that is consistent with all available evidence.",
  },
  {
    term: "Theory of Plate Tectonics",
    definition:
      "Earth's outer layer breaks into huge plates that move and change size over millions of years.",
    source:
      "A theory stating that Earth’s lithosphere is broken into huge plates that move and change in size over time.",
  },
  {
    term: "Thunder",
    definition:
      "The sound made when lightning heats air so intensely that it explodes outward.",
    source:
      "The sound wave created by intensely heated air around a lightning bolt.",
  },
  {
    term: "Thunderstorm",
    definition:
      "A storm with lightning and thunder that forms from a tall, dark cumulonimbus cloud.",
    source:
      "A storm with lightning and thunder formed from a cumulonimbus cloud.",
  },
  {
    term: "Tornado",
    definition:
      "A spinning column of air that reaches from a cloud down to the ground with violent, rotating winds.",
    source:
      "A violently rotating column of air stretching from a cloud to the ground.",
  },
  {
    term: "Transform Boundary",
    definition:
      "A place where two plates slide past each other sideways. New crust does not form or disappear here.",
    source:
      "A boundary along which two tectonic plates scrape past each other, and crust is neither formed nor destroyed.",
  },
  {
    term: "Trench",
    definition:
      "A deep, steep underwater valley that forms where one plate slides under another plate.",
    source:
      "A deep, steep-sided depression formed along the edge of a subduction zone created as a result of the subduction of one plate under another.",
  },
  {
    term: "Tropical Storm",
    definition:
      "A spinning low-pressure system that starts in tropical areas with winds at least 65 kilometers per hour.",
    source:
      "A low-pressure system that starts in the tropics with winds of at least 65 kilometers per hour ( 40 mi/h).",
  },
  {
    term: "Tsunami",
    definition:
      "A huge ocean wave caused by earthquakes, volcanic eruptions, or underwater landslides.",
    source:
      "A water wave caused by an earthquake, volcanic eruption, or landslide turnover.",
  },
  {
    term: "Ultraviolet Radiation",
    definition:
      "Light with higher energy than what we can see. It can burn your skin and cause damage.",
    source:
      "Radiation o f higher frequencies than visible light, which can cause sunburn and other types of damage.",
  },
  {
    term: "Urban Heat Island",
    definition: "A warmer pocket of air that forms over a city.",
    source: "The warmer body of air over a city.",
  },
  {
    term: "Variable",
    definition: "Any factor that can change during an experiment or test.",
    source:
      "Any factor that can change in a controlled experiment, observation, or model.",
  },
  {
    term: "Volcanism",
    definition:
      "The process of hot melted rock moving from inside a space body to its surface.",
    source:
      "The process of molten material moving from a space body’s hot interior onto its surface.",
  },
  {
    term: "Volcano",
    definition:
      "An opening in Earth's crust where melted rock, ash, and hot gases burst out. It builds a mountain over time.",
    source:
      "An opening in the crust through which molten rock, rock fragments, and hot gases erupt; a mountain built up from erupted materials.",
  },
  {
    term: "Volume",
    definition:
      "The amount of space that something takes up in three dimensions.",
    source:
      "An amount of three-dimensional space, often used to describe the space that an object takes up.",
  },
  {
    term: "Watershed",
    definition:
      "All the land that drains water into one river, lake, or ocean.",
    source:
      "All of the area drained from a particular area of land that all flows into one body of water.",
  },
  {
    term: "Water Cycle",
    definition:
      "Water moving continuously between Earth's air, surface, and living things.",
    source:
      "The continuous movement of water on Earth, through its atmosphere, and in the living things on Earth.",
  },
  {
    term: "Weather",
    definition:
      "What the air is like at a certain time and place, like hot, cold, or rainy.",
    source:
      "The condition of Earth’s atmosphere at a particular time and place.",
  },
  {
    term: "Weathering",
    definition: "Natural forces breaking rocks down into smaller pieces.",
    source: "The process by which natural forces break down rocks.",
  },
  {
    term: "Wetland",
    definition: "A soggy area that stays wet or floods with water often.",
    source: "A wet, swampy area that is often flooded with water.",
  },
  {
    term: "Wind",
    definition:
      "Air moving sideways from places where pressure and temperature are different.",
    source:
      "The horizontal movement of air caused by differences in air pressure & temperature.",
  },
];

/** First letters present in the list, for the A-Z jump bar. */
export const VOCAB_LETTERS: string[] = [
  ...new Set(VOCABULARY.map((entry) => entry.term[0].toUpperCase())),
].sort();

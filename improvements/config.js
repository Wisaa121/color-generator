// ----------------------------
// Saturation Adjectives (finer bins)
const saturationAdjectives = [
  [0.0,0.1,["Faint","Muted","Soft","Subtle","Whispered"]],
  [0.1,0.2,["Tender","Hazy","Gentle","Washed","Dull"]],
  [0.2,0.3,["Balanced","Moderate","Even","Mild","Neutral"]],
  [0.3,0.4,["Light","Softened","Harmonious","Pleasant","Reasonable"]],
  [0.4,0.5,["Gentle","Calm","Delicate","Fair","Measured"]],
  [0.5,0.6,["Bright","Radiant","Shining","Clear","Sparkling"]],
  [0.6,0.7,["Gleaming","Colorful","Glowing","Strong","Dazzling"]],
  [0.7,0.8,["Bold","Cheerful","Lively","Sunny","Vibrant"]],
  [0.8,0.9,["Intense","Striking","Dramatic","Powerful","Brilliant"]],
  [0.9,1.0,["Flaming","Electric","Extreme","Forceful","Explosive"]]
];

// Lightness Adjectives (finer bins)
const lightnessAdjectives = [
  [0.0,0.1,["Deep","Shadowed","Dark","Midnight","Dim"]],
  [0.1,0.2,["Gloomy","Dusky","Rich","Dusky","Obscure"]],
  [0.2,0.3,["Shaded","Soft","Muted","Twilight","Gentle"]],
  [0.3,0.4,["Subdued","Faded","Calm","Hushed","Clouded"]],
  [0.4,0.5,["Smoky","Misty","Hazy","Ashen","Dull"]],
  [0.5,0.6,["Light","Soft","Glowing","Luminous","Radiant"]],
  [0.6,0.7,["Brightened","Cheerful","Sunny","Clear","Fair"]],
  [0.7,0.8,["Airy","Delicate","Shimmering","Glossy","Silky"]],
  [0.8,0.9,["Mellow","Polished","Gentle","Glittering","Radiant"]],
  [0.9,1.0,["Blinding","Shining","Dazzling","Flaming","Vivid"]]
];

// Fancy Colors (just the fancy part; will combine with base color)
const fancyColorMapEn = [
  [0,5,"Crimson"], [5,10,"Scarlet"], [10,15,"Ruby"], [15,20,"Cherry"], [20,25,"Candy"], [25,30,"Strawberry"],
  [30,35,"Amber"], [35,40,"Goldenrod"], [40,45,"Marigold"], [45,50,"Sunflower"], [50,55,"Honey"], [55,60,"Lemon"],
  [60,65,"Butter"], [65,70,"Banana"], [70,75,"Pale"], [75,80,"Lemonade"],
  [80,85,"Mint"], [85,90,"Seafoam"], [90,95,"Celadon"], [95,100,"Sage"], [100,110,"Emerald"],
  [110,120,"Jade"], [120,130,"Olive"], [130,140,"Moss"], [140,150,"Forest"],
  [150,160,"Teal"], [160,170,"Aqua"], [170,180,"Turquoise"], [180,190,"Cyan"], 
  [190,200,"Sky"], [200,210,"Turquoise"], [210,220,"Cobalt"], [220,230,"Azure"], [230,240,"Royal"], 
  [240,250,"Sapphire"], [250,260,"Indigo"], [260,270,"Violet"], [270,280,"Lavender"], [280,290,"Lilac"], 
  [290,300,"Magenta"], [300,310,"Fuchsia"], [310,320,"Hot"], [320,330,"Bubblegum"], [330,340,"Salmon"], 
  [340,345,"Coral"], [345,360,"Crimson"]
];

// Base Colors
const baseColorMapEn = [
  [0,30,"Red"], [30,60,"Orange"], [60,90,"Yellow"], [90,150,"Green"],
  [150,210,"Cyan"], [210,270,"Blue"], [270,330,"Purple"], [330,360,"Red"]
];

// Tiers
const tiers = ["S","A","B","C","Shit"];
const tierThresholds = {S:[8,Infinity],A:[5,8],B:[3,5],C:[2,3],Shit:[-Infinity,2]};

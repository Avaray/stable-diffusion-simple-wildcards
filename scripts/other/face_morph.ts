// I created this script being inspired by this Reddit post
// https://www.reddit.com/r/StableDiffusion/comments/1eeflm2/improving_face_variation_in_generations/
// It outputs crazy long prompt for sd-dynamic-prompts extension

const nationalitiesFile = await Bun.file('../../wildcards/nationalities.txt').text();
const nationalitiesCleaned = nationalitiesFile.replace(/[\r\n]+/g, '\n');
const nationalities = nationalitiesCleaned.split('\n').filter((nat) => nat.length > 0);

// Let's extract all names ending with letter 'a' from artists2.txt
const artistNames = await Bun.file('../../wildcards/artists2.txt').text();
const artistNamesExtracted = artistNames.match(/^\b\w{2,}a\b/gm);
const names = Array.from(new Set(artistNamesExtracted));

// prettier-ignore
const femaleNames = ['Alice', 'Ava', 'Ella', 'Emma', 'Grace', 'Hannah', 'Isabella', 'Lily', 'Olivia', 'Sophia', 'Zoe', 'Abigail', 'Amelia', 'Aria', 'Aurora', 'Bella', 'Camila', 'Charlotte', 'Chloe', 'Claire', 'Elena', 'Elizabeth', 'Emily', 'Eva', 'Evelyn', 'Harper', 'Hazel', 'Layla', 'Leah', 'Lucy', 'Mia', 'Mila', 'Nora', 'Penelope', 'Riley', 'Scarlett', 'Stella', 'Victoria', 'Violet', 'Willow', 'Adelaide', 'Catherine', 'Dorothy', 'Eleanor', 'Frances', 'Genevieve', 'Josephine', 'Margaret', 'Matilda', 'Rosemary', 'Aaliyah', 'Brielle', 'Cora', 'Emery', 'Jasmine', 'Kinsley', 'Luna', 'Maya', 'Nyla', 'Sienna', 'Azura', 'Calliope', 'Dahlia', 'Elowen', 'Indigo', 'Juniper', 'Seraphina', 'Talia', 'Zinnia', 'Anya', 'Bianca', 'Chiara', 'Freya', 'Ines', 'Leila', 'Niamh', 'Saoirse', 'Yara', 'Autumn', 'Clover', 'Daisy', 'Ivy', 'Juniper', 'Marigold', 'Poppy', 'Sage', 'Sky', 'Wren', 'Agnes', 'Beatrice', 'Clara', 'Edith', 'Florence', 'Mabel', 'Nora', 'Opal', 'Sylvia', 'Winifred', 'Ari', 'Bea', 'Eve', 'Gia', 'Joy', 'Liv', 'Mae', 'Nia', 'Pia', 'Zia'];
// prettier-ignore
const unwantedNames = ['Grandma', 'Tetsuya', 'Tsubasa', 'Andrea', 'Aquila', 'Bena', 'Elia', 'Josia', 'Luca', 'Misha', 'Nikita', 'Sasha', 'Toma', 'Zia', 'Kosta', 'Rafa', 'Sima', 'Zara', 'Nikita', 'Mica', 'Khalifa'];
const allNames = [...names, ...femaleNames].filter((name) => !unwantedNames.includes(name)).sort();

const data: { [key: string]: string[] } = {
  nationalities: nationalities,
  names: allNames,
  face: [
    'round',
    'oval',
    'square',
    'heart-shaped',
    'diamond-shaped',
    'long',
    'triangular',
    'oblong',
    'rectangular',
  ],
  forehead: [
    'high',
    'low',
    'prominent',
    'receding',
    'wide',
    'narrow',
    'smooth',
    'wrinkled',
    'forehead with bangs',
  ],
  eyebrows: [
    'arched',
    'straight',
    'thick',
    'thin',
    'bushy',
    'curved',
    'sparse',
    'angled',
    'straight and long',
  ],
  nose: [
    'long',
    'short',
    'wide',
    'narrow',
    'upturned',
    'downturned',
    'button',
    'aquiline',
    'flat',
    'crooked',
  ],
  lips: [
    'full',
    'thin',
    'heart-shaped',
    'bow-shaped',
    'wide',
    'narrow',
    'plump',
    'asymmetrical',
    'defined',
  ],
  chin: [
    'strong',
    'weak',
    'square',
    'pointed',
    'round',
    'recessed',
    'double',
    'prominent',
    'dimpled',
  ],
  cheekbones: [
    'high',
    'low',
    'prominent',
    'subtle',
    'angular',
    'rounded',
    'flat',
    'wide-set',
    'narrow',
  ],
  ears: [
    'small',
    'large',
    'protruding',
    'close-set',
    'pointed',
    'round',
    'asymmetrical',
    'dropped',
    'fleshy',
  ],
  // 'freckles': ['light', 'moderate', 'heavy'],
  // 'laugh_lines': ['subtle', 'prominent'],
  // 'skin_texture': ['smooth', 'slightly wrinkled', 'wrinkled']
};

const variables = Object.keys(data)
  .map((key) => {
    const values = data[key].join('|');
    return `\${${key}={${values}}}`;
  })
  .join(' ');

const prompts = Object.keys(data)
  .map((key) => {
    if (key === 'nationalities') return '';
    if (key === 'female_names') return `\${${key}}`;
    return `\${${key}} ${key.replace('_', ' ')}`;
  })
  .filter((prompt) => prompt !== '')
  .join(', ');

const combined = `${variables} ${prompts}, [\${nationalities}|\${nationalities}]`;

console.log(combined);

// Bun.write('face_morph.txt', combined);

// I created this script being inspired by this Reddit post
// https://www.reddit.com/r/StableDiffusion/comments/1eeflm2/improving_face_variation_in_generations/
// It outputs crazy long prompt for sd-dynamic-prompts extension

import { readdir } from "node:fs/promises";

// const files = await readdir('../wildcards');

// console.log(files);

const nationalities = await Bun.file('../wildcards/nationalities.txt').text()
const nationalitiesCleaned = nationalities.replace(/[\r\n]+/g, '\n')
const nationalitiesArray = nationalitiesCleaned.split('\n').filter(nat => nat.length > 0);
const nationalitiesProcessed = `[\${nationalities}|\${nationalities}]`;

// console.log(nationalitiesArray);

const data: { [key: string]: string[] } = {
  "nationalities": nationalitiesArray,
  "female_names": ["Alice", "Ava", "Ella", "Emma", "Grace", "Hannah", "Isabella", "Lily", "Olivia", "Sophia", "Zoe",
    "Abigail", "Amelia", "Aria", "Aurora", "Bella", "Camila", "Charlotte", "Chloe", "Claire", "Elena",
    "Elizabeth", "Emily", "Eva", "Evelyn", "Harper", "Hazel", "Layla", "Leah", "Lucy", "Mia", "Mila",
    "Nora", "Penelope", "Riley", "Scarlett", "Stella", "Victoria", "Violet", "Willow"],
  "face": ["round", "oval", "square", "heart-shaped", "diamond-shaped"],
  "forehead": ["high", "low", "prominent", "receding"],
  "eyebrows": ["arched", "straight", "thick", "thin", "bushy"],
  "nose": ["long", "short", "wide", "narrow", "upturned", "downturned"],
  "lips": ["full", "thin", "heart-shaped", "bow-shaped"],
  "chin": ["strong", "weak", "square", "pointed", "round"],
  "cheekbones": ["high", "low", "prominent", "subtle"],
  "ears": ["small", "large", "protruding", "close-set"],
  "freckles": ["light", "moderate", "heavy"],
  "laugh_lines": ["subtle", "prominent"],
  "skin_texture": ["smooth", "slightly wrinkled", "wrinkled"]
}

const converted = Object.keys(data).map(key => {
  const values = data[key].join('|');
  return `\${${key}={${values}}}`;
}).join(' ');

const post = Object.keys(data).map(key => {
  if (key === 'nationalities') return '';
  return `\${${key}} ${key.replace('_', ' ')}`;
}).join(', ');

const combined = `${converted} ${post}, ${nationalitiesProcessed}`;

console.log(combined);

// This script fetches the artists data from the original CSV file, 
// converts data and writes it to two separate files: artists2.txt and artists2_tagged.txt

// You need to run this script with BUN - https://bun.sh/
// Just run `bun artists2.ts` in the terminal

type ArtistType = { name: string; tags: string }[];

const outputFilename = "./artists2.txt";
const outputFilenameWithTags = "./artists2_tagged.txt";
const outputDir = "../";

const originalFileUrl = "https://raw.githubusercontent.com/proximasan/sdxl_artist_styles_studies/main/static/SDXL%20Image%20Synthesis%20Style%20Studies%20Database%20(Copy%20of%20The%20List)%20-%20Artists.csv";

const fetchedData = async () => {
  console.log(`Fetching data `);
  const response = await fetch(originalFileUrl);
  const data = await response.text();
  return data;
};

const processedData = (data: string) => {
  console.log(`Processing data `);
  data = data.replace(/[\s\S]*?^(?=.*N\/A)(?=.*Notes).*\r?\n/m, "");
  const lines = data.split("\n");
  const artistsAll = [] as ArtistType;
  let artistsWithTags = [] as ArtistType;

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const fields = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    const name = fields[2].replace(/"/g, "");
    const tags = fields[7].replace(/["-]/g, "");
    artistsAll.push({ name, tags });
    artistsWithTags = artistsAll.filter((artist) => artist.tags !== "");
  }

  return { all: artistsAll, tagged: artistsWithTags };
}

const writeToFile = async (filename: string, data: ArtistType) => {
  const stringData = data.sort((a, b) => a.name.localeCompare(b.name)).map((artist) => `${artist.name}, ${artist.tags}`).join("\n");
  // sort alphabetically
  await Bun.write(filename, stringData);
  console.log(`Successfully wrote data to ${filename}`);
}

(async () => {
  const data = await fetchedData();
  console.log(`Successfully fetched data`);
  const artists = processedData(data);
  console.log(`Successfully processed data`);
  console.log(`Total artists: ${artists.all.length}`);
  console.log(`Artists with tags: ${artists.tagged.length}`);
  await writeToFile(outputDir + outputFilename, artists.all);
  await writeToFile(outputDir + outputFilenameWithTags, artists.tagged);
  console.log(`Done!`);
})();

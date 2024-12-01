function partA(left: number[], right: number[]) {
  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  const distance: number[] = [];
  for (let i = 0; i < left.length; i++) {
    distance.push(Math.abs(left[i] - right[i]));
  }

  const totalDistance = distance.reduce((acc, curr) => acc + curr, 0);
  console.log({ totalDistance });
}

function partB(left: number[], right: number[]) {
  const similarityScoreEntries: number[] = [];

  left.forEach((leftNum) => {
    const occurrences = right.filter((rightNum) => rightNum === leftNum).length;
    similarityScoreEntries.push(occurrences * leftNum);
  });

  const similarityScore = similarityScoreEntries.reduce(
    (acc, curr) => acc + curr,
    0
  );

  console.log({
    similarityScore
  });
}

async function main() {
  const text = await Deno.readTextFile("./inputs/day_1/a/actual.txt");

  const lines = text.split("\n");

  const left: number[] = [];
  const right: number[] = [];

  for (const line of lines) {
    const [numLeft, numRight] = line.split(/\s+/).map(Number);
    left.push(numLeft);
    right.push(numRight);
  }

  await partA(left.slice(), right.slice());
  await partB(left.slice(), right.slice());
}

main();

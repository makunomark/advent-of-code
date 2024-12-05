async function main() {
  const reports = await Deno.readTextFile("./inputs/day_2/sample.txt");
  const levels = reports.split("\n");

  // partA(levels);
  partB(levels);
}

function partB(levels: string[]) {
  let safeResultCount = 0;
  levels.forEach((level) => {
    const levelArray = level.split(" ").map(Number);
    if (isGraduallyIncreasing(levelArray) || isGraduallyReducing(levelArray)) {
      safeResultCount++;
      console.log("safe @ 1");
    } else {
      // apply dampener
      // check if previous level is safe
      const differenceLevels: number[] = [];
      for (let i = 1; i < levelArray.length; i++) {
        const difference = Math.abs(levelArray[i] - levelArray[i - 1]);
        differenceLevels.push(difference);
        // if (!isSafeDifference(difference)) {
        //   levelArray.splice(i - 1, 1);
        //   console.log(
        //     `processed level: ${levelArray}, removed: ${
        //       levelArray[i]
        //     }, index: ${i - 1}`
        //   );
        //   break;
        // }
      }
      console.log({ differenceLevels });

      // console.log({ levelArray });
      // if (
      //   isGraduallyIncreasing(levelArray) ||
      //   isGraduallyReducing(levelArray)
      // ) {
      //   safeResultCount++;
      //   console.log("safe");
      // }
    }
  });
  console.log({ safeResultCount });
}

function partA(levels: string[]) {
  let safeResultCount = 0;
  levels.forEach((level) => {
    const levelArray = level.split(" ").map(Number);
    if (isGraduallyIncreasing(levelArray) || isGraduallyReducing(levelArray)) {
      safeResultCount++;
    }
  });
  console.log({ safeResultCount });
}

function isGraduallyIncreasing(levelArray: number[]) {
  for (let i = 0; i < levelArray.length - 1; i++) {
    if (levelArray[i] > levelArray[i + 1]) {
      return false;
    }
    const difference = Math.abs(levelArray[i + 1] - levelArray[i]);
    if (!isSafeDifference(difference)) {
      return false;
    }
  }
  return true;
}

function isGraduallyReducing(levelArray: number[]) {
  for (let i = 0; i < levelArray.length - 1; i++) {
    if (levelArray[i] < levelArray[i + 1]) {
      return false;
    }
    const difference = Math.abs(levelArray[i + 1] - levelArray[i]);
    if (!isSafeDifference(difference)) {
      return false;
    }
  }
  return true;
}

function isSafeDifference(difference: number) {
  if (difference < 1 || difference > 3) {
    return false;
  }
  return true;
}

main();

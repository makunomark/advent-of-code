# IT'S THAT TIME OF THE YEAR AGAIN! 🎄🎅🎁

Decided to use Deno for this year's Advent of Code. I've been using TypeScript for a while now and I'm curious to see how Deno compares to Node.js. To run the solutions, you can use the following command:

```bash
deno run --allow-read solutions/day_1.ts
```

Update the `day_1.ts` file with the day you want to run. Input files are located in the `inputs` directory. To run aganist sample/test input, check where the input is located in the `day_1.ts` file (or any other day) and update the path to the sample input file. It'll look something like this:

```diff
- const text = await Deno.readTextFile("./inputs/day_1/a/actual.txt");
+ const text = await Deno.readTextFile("./inputs/day_1/a/sample.txt");
```

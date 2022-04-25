function trimTitle(input: string, limit: number): string {
  if (input.length >= limit) {
    return input.slice(0, limit) + "...";
  } else {
    return input;
  }
}

export default trimTitle;

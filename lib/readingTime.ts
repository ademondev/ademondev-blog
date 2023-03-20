type ReadingTime = string;

enum ReadingTimeUnit {
    MINUTE = 'minute',
    MINUTES = 'minutes',
    HOUR = 'hour',
    HOURS = 'hours',
}

export const readingTime = (text: string): ReadingTime => {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} ${readTime > 59 ? (readTime / 60) > 1 ? ReadingTimeUnit.HOURS : ReadingTimeUnit.HOUR : readTime > 1 ? ReadingTimeUnit.MINUTES : ReadingTimeUnit.MINUTE } read`;
}
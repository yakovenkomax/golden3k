import { Frequency, Level, PartOfSpeech } from './enums.type.ts';

export type ConfigData = {
  wordsFilePath: string,
  levelsFilePath: string,
  translationsFilePath: string,
  historyFilePath: string,
  targetLanguageCode: string,
  wordsMessage: {
    uniqueDispatchesCount: number,
    pickLevelsAndCount: {
      [key in Level]: number;
    },
  }
}

export type WordData = Array<string>;

export type LevelData = {
  [key in Level]: Array<string>;
}

export type HistoryData = Array<{
  date: string;
  type: string;
  words: Array<string>;
}>;

export type TranslationsData = {
  [key: string]: {
    main: string;
  } & {
    [key in PartOfSpeech]: Array<{
      translation: string,
      frequency: Frequency,
    }>;
  }
}

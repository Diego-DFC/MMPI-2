import { LANGUAGE } from "./utils";
import es from "./es/translation.json";
import en from "./en/translation.json";
import esQuestions from "./es/questions.json";
import enQuestions from "./en/questions.json";
import esGroups from "./es/groups.json";
import enGroups from "./en/groups.json";

export const resources = {
  [LANGUAGE.ES]: {
    translation: es,
    questions: esQuestions,
    groups: esGroups,
  },
  [LANGUAGE.EN]: {
    translation: en,
    questions: enQuestions,
    groups: enGroups,
  },
};

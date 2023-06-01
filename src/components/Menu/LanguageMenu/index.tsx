import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { Button } from "../../Button";
// import { ReactComponent as PlFlag } from "./pl-flag.svg";
import { ReactComponent as EnFlag } from "./en-flag.svg";
import { ReactComponent as EsFlag } from "./es-flag.svg";

const flags = {
  es: EsFlag,
  en: EnFlag,
};

export const LanguageMenu = () => {
  const { t, i18n } = useTranslation();
  const FlagComponent = i18n.language.toLowerCase().includes("en") ? flags.en : flags.es;

  const onClick = () => {
    /* Todo - handle more languages */
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };
  return (
    <Root left={<FlagComponent />} onClick={onClick}>
      <LangText>{t("Language")}</LangText>
    </Root>
  );
};
export const Root = styled(Button)`
  background-color: ${(p) => p.theme.colors.primary50};
`;
export const LangText = styled.span`
  color: ${(p) => p.theme.colors.neutral600};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
`;

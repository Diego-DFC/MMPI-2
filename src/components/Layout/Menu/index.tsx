import styled from "@emotion/styled";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../Button";
import { Link } from "../../Link";
import { ReactComponent as GithubSvg } from "./github.svg";
import { LanguageMenu } from "./LanguageMenu";
import { MobileIcon } from "./MobileIcon";
import { MobileMenu } from "./MobileMenu";

export const Menu = () => {
  const { t } = useTranslation();
  return (
    <Root>
      <Left>
        <MobileIcon />
        <LanguageMenu />
        <Link transparent to="/contact">
          <Contact>{t("contact")}</Contact>
        </Link>
      </Left>
      <Right>
        <Link transparent to="//github.com/kosciolek/MMIP-2" target="_blank">
          <GithubButton>
            <StyledGithubSvg />
          </GithubButton>
        </Link>
      </Right>
      <MobileMenu />
    </Root>
  );
};

export const Root = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.colors.primary100};
  display: grid;
  position: relative;
  grid-template:
    "space-left topbar-left topbar-right space-right" 80px / 1fr 1000px minmax(
      200px,
      300px
    )
    1fr;
`;
export const Left = styled.div`
  grid-area: topbar-left;
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 24px;
  flex-grow: 1;
`;
export const Right = styled.div`
  grid-area: topbar-right;
  display: flex;
  align-items: center;
  padding-left: 24px;
  height: 100%;
  flex-grow: 1;
  border-left: 1px solid ${(p) => p.theme.colors.primary100};
`;
export const GithubButton = styled(Button)`
  padding: 0;
`;
export const StyledGithubSvg = styled(GithubSvg)`
  fill: ${(p) => p.theme.colors.primary};
`;
export const Contact = styled(Button)`
  font-size: 14px;
  font-weight: 500;
  padding: 0;
`;

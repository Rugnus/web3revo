"use client";

import { routes } from "@/app/routes";
import { RouteButton } from "./RouteButton";
import { UserNotLoginedGrid, Wrapper } from "./SUserNotLogined";

export const UserNotLogined = () => {
  return (
    <Wrapper>
      <h2>
        Revo <span>App</span>
      </h2>
      <UserNotLoginedGrid>
        <RouteButton
          style={{ gridArea: "Register" }}
          path={routes.register}
          title={`Зарегистрироваться`}
          description={`Регистрация нового аккаунта`}
        />
        <RouteButton
          path={routes.login}
          style={{ gridArea: "Login" }}
          title={`Вход`}
          description={`Войти в существующий аккаунт`}
        />
        <RouteButton
          path={`/docs`}
          style={{ gridArea: "Wiki" }}
          title={`Вики`}
          description={`Руководство использования приложения`}
        />
        <RouteButton
          path={`/contact`}
          style={{ gridArea: "Contact" }}
          title={`Контакты`}
          description={`Связяться с нами`}
        />
        <RouteButton
          path={`/charts`}
          style={{ gridArea: "Charts" }}
          title={`Графики криптовалют`}
          description={`Посмотреть графики ТОП 50 криптовалют`}
        />
      </UserNotLoginedGrid>
    </Wrapper>
  );
};

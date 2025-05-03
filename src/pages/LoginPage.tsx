import "../styles/InputData.scss";
import "../styles/ButtonLR.scss";
import "../styles/loginPages.scss";
import InputUserData from "../components/InputUserData";
import LogoName from "../components/LogoName";
import ButtonLogReg from "../components/ButtonLogReg";
import { useState } from "react";
import ButtonSwitchLR from "../components/ButtonSwitchLR";

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main>
      <form>
        <LogoName value={96} />
        <InputUserData
          label="Логин"
          placeholder=""
          onChange={(e) => setLogin(e.target.value)}
          className="InputData"
          value={login}
          valueIsVisible={true} // кнопка для скрытия
          classInput=""
        />
        <InputUserData
          label="Пароль"
          placeholder=""
          onChange={(e) => setPassword(e.target.value)}
          className="InputData"
          value={password}
          valueIsVisible={true} // кнопка для скрытия
          classInput=""
        />
        <ButtonLogReg placeholder="войти" className="ButtonLR" />
        <ButtonSwitchLR text="REGISTER" />
      </form>
    </main>
  );
}

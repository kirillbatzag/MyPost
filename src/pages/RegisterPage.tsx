import "../styles/InputData.scss";
import "../styles/ButtonLR.scss";
import "../styles/loginPages.scss";
import InputUserData from "../components/InputUserData";
import LogoName from "../components/LogoName";
import ButtonLogReg from "../components/ButtonLogReg";
import { useState } from "react";
import ButtonSwitchLR from "../components/ButtonSwitchLR";

export default function RegisterPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <main>
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

      <InputUserData
        label="Повторите пароль"
        placeholder=""
        onChange={(e) => setRepassword(e.target.value)}
        className="InputData"
        value={repassword}
        valueIsVisible={true} // кнопка для скрытия
        classInput=""
      />

      <InputUserData
        label="Email"
        placeholder=""
        onChange={(e) => setEmail(e.target.value)}
        className="InputData"
        value={email}
        valueIsVisible={true} // кнопка для скрытия
        classInput=""
      />
      <ButtonLogReg placeholder="регистрация" className="ButtonLR" />
      <ButtonSwitchLR text="LOG IN" />
    </main>
  );
}

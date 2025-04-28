import "../styles/SwitchPageLR.scss";
type ButtonSwitchLRProps = {
  text: string;
};

export default function ButtonSwitchLR({ text }: ButtonSwitchLRProps) {
  return <h3 className="ButtonSwitchLR">{text}</h3>;
}

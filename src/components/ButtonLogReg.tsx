type ButtonLogRegProps = {
  label: string;
  value: string;
  placeholder?: string;
  className?: string;
  valueIsVisible: boolean;
  classInput?: string;
};

export default function ButtonLogReg({
  placeholder = "",
  className = "",
}: ButtonLogRegProps) {
  return <button className={className}>{placeholder}</button>;
}

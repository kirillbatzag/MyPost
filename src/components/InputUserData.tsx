type InputUserDataProps = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  valueIsVisible: boolean;
  classInput?: string;
};

export default function InputUserData({
  label,
  value,
  onChange,
  placeholder = "",
  className = "",
  valueIsVisible,
  classInput = "",
}: InputUserDataProps) {
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type={valueIsVisible ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        className={classInput}
        onChange={onChange}
      />
    </div>
  );
}

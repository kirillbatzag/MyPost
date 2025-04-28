type LogoNameProps = {
  value: number | string;
};

export default function LogoName({ value }: LogoNameProps) {
  return (
    <h1 style={{ fontSize: typeof value === "number" ? `${value}px` : value }}>
      <span style={{ color: "#4447F6" }}>Мой</span>{" "}
      <span style={{ color: "#5DC53D" }}>пост</span>
    </h1>
  );
}

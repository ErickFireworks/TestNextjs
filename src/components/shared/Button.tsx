type Props = {
  text: string;
  type: "submit" | "button";
};

export const Button = ({ text, type }: Props) => {
  return (
    <button
      type={type}
      className="border border-gray-100 rounded-full py-4 px-20"
    >
      {text}
    </button>
  );
};

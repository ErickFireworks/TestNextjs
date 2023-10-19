type Props = {
  text: string;
  type: "submit" | "button";
  handle: () => void;
};

export const Button = ({ text, type, handle }: Props) => {
  return (
    <button
      type={type}
      className="border border-gray-100 rounded py-4 px-20"
      onClick={() => handle()}
    >
      {text}
    </button>
  );
};

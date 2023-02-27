import { useCheckResult } from "../App";
import formatHTMLUnicode from "./helpers/formatHTMLUniCode";

export default function AnswerCard({
  answer,
  onClick,
  selectedAnswer,
  correctAnswer,
}) {
  const { isChecked } = useCheckResult();

  return (
    <div
      onClick={onClick}
      className={`text-xl cursor-pointer ${
        selectedAnswer === answer
          ? `text-white ${
              isChecked
                ? correctAnswer !== formatHTMLUnicode(answer)
                  ? "bg-red-400"
                  : "bg-green-400"
                : "bg-primary-300"
            }`
          : `text-primary-500 ${
              isChecked &&
              correctAnswer === formatHTMLUnicode(answer) &&
              "bg-green-400"
            }`
      } font-karla py-2 px-5 border border-solid border-primary-500 rounded-2xl`}
    >
      {formatHTMLUnicode(answer)}
    </div>
  );
}

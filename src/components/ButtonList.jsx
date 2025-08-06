import { buttonListItem } from "../Utils/constants";

const ButtonList = () => {
  return (
    <div>
      <div className="flex gap-3">
        {buttonListItem.map((btn, i) => (
          <p
            key={i}
            className=" cursor-pointer px-4 py-1 text-sm rounded-xl"
          >
            {btn}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
import { buttonListItem } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="p-3  fixed top-16 bg-white w-full" >
      <div className="flex gap-3">
        {buttonListItem.map((btn, i) => (
          <p
            key={i}
            className=" cursor-pointer border border-gray-400 px-2 py-1 rounded-xl  bg-gray-100 w-x text-center"
          >
            {btn}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;

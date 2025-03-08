import { nanoid } from "nanoid";
// const id = nanoid(); //=> "V1StGXR8_Z5jdHi6B-myT"
// import q from "../assets/images/thumbs/bee.png";

import { linksArray } from "../constants/linksArray.js";

const List = () => {
  //   const { title, url, thumb } = links;
  return (
    <>
      <div className="mb-8">
        <ul>
          {linksArray.map(({ title, url, thumb }) => (
            <li key={nanoid()}>
              <a
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="mb-4 flex flex-row items-center bg-blue-300 p-4"
              >
                <img
                  src={thumb}
                  alt="Avatar"
                  className="h-auto w-24 border-4 border-red-500 p-1"
                />
                <p className="ml-4 block font-montserrat text-2xl">{title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default List;

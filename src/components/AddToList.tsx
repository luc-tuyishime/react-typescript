import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) return;
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        note: input.note,
        url: input.img,
      },
    ]);

    setInput({
      name: "",
      age: "",
      note: "",
      img: "",
    });
  };

  return (
    <div className="AddToList">
      Add To List Component
      <input
        type="text"
        placeholder="Name"
        value={input.name}
        className="AddToList-input"
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        value={input.age}
        className="AddToList-input"
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image Url"
        value={input.img}
        className="AddToList-input"
        onChange={handleChange}
        name="img"
      />
      <textarea
        placeholder="Notes"
        value={input.note}
        className="AddToList-input"
        onChange={handleChange}
        name="note"
      />
      <button onClick={handleClick} className="AddToList-btn">
        Add To List
      </button>
    </div>
  );
};

export default AddToList;

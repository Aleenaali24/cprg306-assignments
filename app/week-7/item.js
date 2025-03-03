const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-2 bg-[#0F172A] rounded-none text-left  w-96 h-20">
      <p className="text-xl font-bold pt-1 ">{name}</p>
      <p className="">Buy {quantity} in {category}</p>
    </li>
  );
};

export default Item;
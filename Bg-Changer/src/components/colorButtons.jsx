import ColorButton from "./Button";

function ColorButtons({ setColor }) {
  return (
    <div className="fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <ColorButton color="red" setColor={setColor} />
        <ColorButton color="blue" setColor={setColor} />
        <ColorButton color="green" setColor={setColor} />
      </div>
    </div>
  );
}

export default ColorButtons;

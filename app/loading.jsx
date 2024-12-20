import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <Image src="spin.svg" alt="loading.." width={96} height={96} />
    </div>
  );
};

export default Loading;

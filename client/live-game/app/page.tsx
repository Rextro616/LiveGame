import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <canvas 
      id="ctx" 
      width="1000" 
      height="500"
      className="border-black border"/>
    </div>
  );
};

export default page;

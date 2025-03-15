import {Calendar1, ClockArrowUp} from 'lucide-react';
import PlayerSelect from "@/components/tenzies/PlayerSelect";


export default function Home() {

  return (
      <div className={"p-4 h-screen flex flex-col text-background"}>
          <div className={"flex"}><ClockArrowUp/> <span className={"ml-3"}>{new Date().toLocaleDateString()}</span></div>
          <div className={"flex mt-2"}><Calendar1 /> <span className={"ml-3"}>{new Date().toLocaleTimeString()}</span></div>
          <div className={"w-[150] h-[100] bg-no-repeat bg-contain mt-3"} style={{"backgroundImage": "url('/spike.png')"}}></div>
          <PlayerSelect/>
      </div>
  );
}

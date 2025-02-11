import {Calendar1, ClockArrowUp} from 'lucide-react';
import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Home() {

  return (
      <>
      <div className={"mx-4 mt-2"}>
          <div className={"flex"}><ClockArrowUp/> <span className={"ml-3"}>{new Date().toLocaleDateString()}</span></div>
          <div className={"flex mt-2"}><Calendar1 /> <span className={"ml-3"}>{new Date().toLocaleTimeString()}</span></div>
          <div className={"w-[150] h-[100] bg-no-repeat bg-contain invert mt-3"} style={{"backgroundImage": "url('/spike.png')"}}></div>
      </div>
          <div>
              <div>
                  <Button size={"image"} className={""}></Button>
              </div>

          </div>
      </>
          );
}

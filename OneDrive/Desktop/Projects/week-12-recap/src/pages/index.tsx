import Image from "next/image";
import { Inter } from "next/font/google";

import {VideoCard} from "../components/VideoCard.tsx"
import { VideoGrid } from "@/components/VideoGrid.tsx";
import { Appbar } from "@/components/Appbar.tsx";


export default function Home() {
  return (
    <div>
      <div>
        <Appbar/>
        <VideoGrid/>
      </div>
    </div>
  )
}
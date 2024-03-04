import Image from "next/image";
import { lato } from "../libs/text";
import Link from "next/link";

export default function AboutDetail() {
  return (
    <div className="h-screen w-full relative">
      <div className="h-[500px] w-full relative brightness-100">
        <Image
          src={"/full-wim-modified-2.png"}
          alt={"full-wim-modified-2"}
          fill={true}
          className="object-cover mix-blend-overlay"
        />
        <div className="p-36 md:p-30 lg:p-44 text-center text-black fixed">
          <div className="bg-white/70">
            <h1 className="text-4xl md:text-6xl font-extrabold md:mb-8">
              Who We Are
            </h1>
            <p className="font-extrabold text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis dolor libero unde debitis commodi, ratione quidem enim
              molestiae alias quasi voluptatem quam cumque corporis est
              assumenda dolores repellat perferendis facere soluta. Quod velit
              magni voluptate nisi perferendis! Quia cumque voluptatem pariatur
              vel sit!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="flex h-[800px] items-center bg-gradient-to-b from-slate-600 to-slate-200 text-sm md:text-base">
          <div className="w-full flex flex-col md:flex-row text-center justify-evenly mx-10 md:mx-0 pb-20 md:pb-0">
            <div className="w-full md:w-1/2 py-10 md:py-40">
              <h1 className="text-md md:text-base xl:text-xl">
                This is about details page contents
              </h1>
              <p className="text-left text-sm md:text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                voluptates perspiciatis eveniet fugiat sapiente! Quos, debitis
                nam alias maxime possimus odit, sequi deserunt accusantium
                nesciunt quia consequuntur praesentium fuga labore. Nisi labore
                iure quisquam quo, dolor modi! Nesciunt accusantium nihil ex
                libero ea beatae eaque labore, magni veritatis? Nisi dolorum,
                accusantium soluta, aspernatur id magni iusto quidem quia itaque
                consequuntur maxime deleniti asperiores consectetur dignissimos.
                Maiores consequatur in accusantium exercitationem libero ipsam
                officiis animi aspernatur odio reiciendis perspiciatis nisi
                consectetur doloremque, nobis eos, cum nulla iusto fugiat itaque
                cumque!
              </p>
            </div>
            <div className="w-[300px] md:w-[500px] h-[450px] md:h-[700px] mx-20 md:mx-0">
              <div className="grid grid-cols-2 grid-rows-2 justify-evenly">
                <div className="row-span-1 col-span-1 w-full">
                  <Image
                    src={"/foto-pengerjaan-wim-1.png"}
                    alt={"foto-pengerjaan-wim-1"}
                    height={400}
                    width={500}
                    className="mt-10 md:mt-10 xl:mt-0 mx-10 ml-0"
                  />
                </div>
                <div className="row-span-1 col-span-1">
                  <Image
                    src={"/foto-vms-1.png"}
                    alt={"foto-vms-1"}
                    height={400}
                    width={500}
                    className="mt-10 md:mt-10 xl:mt-0"
                  />
                </div>
                <div className="row-span-1 col-span-2">
                  <Image
                    src={"/foto-pengerjaan-wim-2.png"}
                    alt={"foto-pengerjaan-wim-2"}
                    height={200}
                    width={500}
                    className="mt-10 md:mt-10 xl:mt-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex h-[800px] items-center bg-slate-200 flex-col">
          <div className="carousel flex items-center text-center w-full h-full">
            <div id="slide1" className="carousel-item relative w-full">
              <div className="flex flex-col items-center text-center w-full gap-10">
                <div>
                  <h1>Meet The Team</h1>
                </div>
                <div className="flex flex-row justify-evenly w-full">
                  <div className="border-4 border-black w-32 h-32"></div>
                  <div className="border-4 border-black w-32 h-32"></div>
                  <div className="border-4 border-black w-32 h-32"></div>
                  <div className="border-4 border-black w-32 h-32"></div>
                  <div className="border-4 border-black w-32 h-32"></div>
                  <div className="border-4 border-black w-32 h-32"></div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <Link href="#slide4" className="btn btn-circle">
                  ❮
                </Link>
                <Link href="#slide2" className="btn btn-circle">
                  ❯
                </Link>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <div className="flex flex-row items-center text-center w-full justify-evenly">
                <div className="border-4 border-red-500 w-32 h-32"></div>
                <div className="border-4 border-red-500 w-32 h-32"></div>
                <div className="border-4 border-red-500 w-32 h-32"></div>
                <div className="border-4 border-red-500 w-32 h-32"></div>
                <div className="border-4 border-red-500 w-32 h-32"></div>
                <div className="border-4 border-red-500 w-32 h-32"></div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <Link href="#slide1" className="btn btn-circle">
                  ❮
                </Link>
                <Link href="#slide3" className="btn btn-circle">
                  ❯
                </Link>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <div className="flex flex-row items-center text-center w-full justify-evenly">
                <div className="border-4 border-green-500 w-32 h-32"></div>
                <div className="border-4 border-green-500 w-32 h-32"></div>
                <div className="border-4 border-green-500 w-32 h-32"></div>
                <div className="border-4 border-green-500 w-32 h-32"></div>
                <div className="border-4 border-green-500 w-32 h-32"></div>
                <div className="border-4 border-green-500 w-32 h-32"></div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <Link href="#slide2" className="btn btn-circle">
                  ❮
                </Link>
                <Link href="#slide4" className="btn btn-circle">
                  ❯
                </Link>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <div className="flex flex-row items-center text-center w-full justify-evenly">
                <div className="border-4 border-blue-500 w-32 h-32"></div>
                <div className="border-4 border-blue-500 w-32 h-32"></div>
                <div className="border-4 border-blue-500 w-32 h-32"></div>
                <div className="border-4 border-blue-500 w-32 h-32"></div>
                <div className="border-4 border-blue-500 w-32 h-32"></div>
                <div className="border-4 border-blue-500 w-32 h-32"></div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <Link href="#slide3" className="btn btn-circle">
                  ❮
                </Link>
                <Link href="#slide1" className="btn btn-circle">
                  ❯
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

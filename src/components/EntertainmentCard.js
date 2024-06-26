"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const EntertainmentCard = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [dj, setDj] = useState([]);
  const [mc, setMc] = useState([]);
  const [comedian, setComedian] = useState([]);
  const [dancers, setDancers] = useState([]);
  const [musicbands, setMusicbands] = useState([]);
  const [sound, setSound] = useState([]);

  const fetchDj = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/add-dj/api`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setDj(data);
      });
  };

  const fetchMc = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/add-mc/api`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setMc(data);
      });
  };

  const fetchComedian = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/add-comedian/api`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setComedian(data);
      });
  };

  const fetchDancers = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/add-dancers/api`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setDancers(data);
      });
  };

  const fetchMusicbands = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/add-musicbands/api`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setMusicbands(data);
      });
  };

  const fetchSound = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/add-sound/api`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setSound(data);
      });
  };

  useEffect(() => {
    fetchDj();
    fetchMc();
    fetchComedian();
    fetchDancers();
    fetchMusicbands();
    fetchSound();
  }, []);

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <Swiper slidesPerView={3.3} spaceBetween={20} className="mb-4 border-t-0.5 border-blue-500">
        <SwiperSlide className="text-center" >
          <button
            className={`w-32 bg-slate-100 rounded-sm p-1 ${
              activeTab === "all" ? "border-b-2 border-red-800 font-semibold" : ""
            }`}
            onClick={() => toggleTab("all")}
          >
            All
          </button>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <button
            className={`w-32 bg-slate-100 rounded-sm p-1 ${
              activeTab === "mcs" ? "border-b-2 border-red-800" : ""
            }`}
            onClick={() => toggleTab("mcs")}
          >
            MCs
          </button>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <button
            className={`w-32 bg-slate-100 rounded-sm p-1 ${
              activeTab === "djs" ? "border-b-2 border-red-800 font-semibold" : ""
            }`}
            onClick={() => toggleTab("djs")}
          >
            DJs
          </button>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <button
            className={`w-32 bg-slate-100 rounded-sm p-1 ${
              activeTab === "comedian" ? "border-b-2 border-red-800 font-semibold" : ""
            }`}
            onClick={() => toggleTab("comedian")}
          >
            Comedian
          </button>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <button
            className={`w-32 bg-slate-100 rounded-sm p-1 ${
              activeTab === "dancers" ? "border-b-2 border-red-800 font-semibold" : ""
            }`}
            onClick={() => toggleTab("dancers")}
          >
            Dancers
          </button>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <button
            className={`mb-1 text-nowrap w-32 bg-slate-100 rounded-sm p-1 ${
              activeTab === "music bands" ? "border-b-2 border-red-800 font-semibold" : ""
            }`}
            onClick={() => toggleTab("music bands")}
          >
            Music Bands
          </button>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <button
            className={`mb-1 text-nowrap w-32 bg-slate-100 rounded-sm p-1 ${
              activeTab === "sound engineer" ? "border-b-2 border-red-800 font-semibold" : ""
            }`}
            onClick={() => toggleTab("sound engineer")}
          >
            Sound Engineer
          </button>
        </SwiperSlide>
      </Swiper>

      <div>
        {activeTab === "all" && (
          <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
            {dj.map((item) => (
              <div key={item._id} className="flex flex-col">
                <Link href={`/services/entertainment/dj/${item._id}`}>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="service card"
                    className="w-48 h-48 bg-slate-200"
                  />
                  <h3>{item.name}</h3>
                </Link>
              </div>
            ))}
            {mc.map((item) => (
              <div key={item._id} className="flex flex-col">
                <Link href={`/services/entertainment/mc/${item._id}`}>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="service card"
                    className="w-48 h-48 bg-slate-200"
                  />
                  <h3>{item.name}</h3>
                </Link>
              </div>
            ))}
            {comedian.map((item) => (
              <div key={item._id} className="flex flex-col">
                <Link href={`/services/entertainment/comedian/${item._id}`}>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="service card"
                    className="w-48 h-48 bg-slate-200"
                  />
                  <h3>{item.name}</h3>
                </Link>
              </div>
            ))}
            {dancers.map((item) => (
              <div key={item._id} className="flex flex-col">
                <Link href={`/services/entertainment/dancers/${item._id}`}>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="service card"
                    className="w-48 h-48 bg-slate-200"
                  />
                  <h3>{item.name}</h3>
                </Link>
              </div>
            ))}
            {musicbands.map((item) => (
              <div key={item._id} className="flex flex-col">
                <Link href={`/services/entertainment/musicbands/${item._id}`}>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="service card"
                    className="w-48 h-48 bg-slate-200"
                  />
                  <h3>{item.name}</h3>
                </Link>
              </div>
            ))}
            {sound.map((item) => (
              <div key={item._id} className="flex flex-col">
                <Link href={`/services/entertainment/sound/${item._id}`}>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="service card"
                    className="w-48 h-48 bg-slate-200"
                  />
                  <h3>{item.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        )}

        {activeTab === "djs" && (
          <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
            {dj.map((item) => (
              <div key={item._id} className="flex flex-col">
                <Link href={`/services/entertainment/dj/${item._id}`}>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="service card"
                    className="w-48 h-48 bg-slate-200"
                  />
                  <h3>{item.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        )}
        {activeTab === "mcs" && (
          <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
            {mc.map((item) => (
              <div key={item._id} className="flex flex-col">
                <Link href={`/services/entertainment/mc/${item._id}`}>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="service card"
                    className="w-48 h-48 bg-slate-200"
                  />
                  <h3>{item.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        )}
        {activeTab === "comedian" && (
          <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
            {comedian.map((item) => (
              <div key={item._id} className="flex flex-col">
                <Link href={`/services/entertainment/comedian/${item._id}`}>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="service card"
                    className="w-48 h-48 bg-slate-200"
                  />
                  <h3>{item.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        )}
        {activeTab === "dancers" && (
          <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
            {dancers.map((item) => (
              <div key={item._id} className="flex flex-col">
                <Link href={`/services/entertainment/dancers/${item._id}`}>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="service card"
                    className="w-48 h-48 bg-slate-200"
                  />
                  <h3>{item.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        )}
        {activeTab === "music bands" && (
          <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
            {musicbands.map((item) => (
              <div key={item._id} className="flex flex-col">
                <Link href={`/services/entertainment/musicbands/${item._id}`}>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="service card"
                    className="w-48 h-48 bg-slate-200"
                  />
                  <h3>{item.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        )}
        {activeTab === "sound engineer" && (
          <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
            {sound.map((item) => (
              <div key={item._id} className="flex flex-col">
                <Link href={`/services/entertainment/sound/${item._id}`}>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="service card"
                    className="w-48 h-48 bg-slate-200"
                  />
                  <h3>{item.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EntertainmentCard;

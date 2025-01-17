import "../components/Events/Events.css";
import events from "../data/events.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
export default function Events() {
  const [pastevents, setPastevents] = useState(events.past.e2024);
  const [year, setyear] = useState(2024);
  const navigate = useNavigate();

  const handlebuttonclick = (e) => {
    setPastevents(events.past[e]);
    setyear(e.slice(1));
  };

  return (
    <div className="max-w-5xl md:max-w-[90%] h-full mb-20 my-4 mx-auto pt-20 px-4">
      <h1 className="font-semibold text-4xl">Events</h1>
      <div className="w-full">
        <div className="pt-6">
          {/* Upcoming events */}
          {events.upcoming.length !== 0 && (
            <>
              <h2 className="text-2xl">Events of year 2024</h2>
              <div className="flex flex-wrap justify-start gap-8 my-4">
                {events.upcoming.map((event, index) => (
                  <Reveal key={index}>
                    <div
                      className="p-4 max-w-[400px] shadow-2xl bg-gray-100 flex flex-col justify-between hover:shadow-[0px_25px_50px_-12px] transition-all hover:backdrop-blur-sm hover:bg-gray-200 cursor-pointer"
                      onClick={() => navigate(event.link)}
                    >
                      <img
                        src={event.image}
                        style={{ maxWidth: "100%" }}
                        alt={event.name}
                        draggable={false}
                      />
                      <h2 className="font-semibold text-2xl">{event.name}</h2>
                      <p className="italic">{event.Date}</p>
                      <p className="text-lg mt-2">{event.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col flex-wrap gap-5 pt-6">
          <h2 className="text-3xl">Past Events</h2>
          <div>
            {Object.keys(events.past).map((eventyear) => (
              <button
                key={eventyear}
                className={`mx-4 w-24 h-9 font-bold text-lg border-2 border-black text-black shadow-[5px_5px_1px_0px] hover:shadow-none  transition-all ${year.toString() === eventyear.slice(1)
                  ? "bg-[#0f323f] text-white"
                  : "bg-white"
                  } `}
                onClick={() => handlebuttonclick(eventyear)}
              >
                {eventyear.slice(1)}
              </button>
            ))}
          </div>
          {Object.keys(pastevents).length === 0 ? (
            <p>No events in year {year}</p>
          ) : (
            <>
              {/* Past events */}
              <h2 className="text-2xl">Events of year {year}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {pastevents.map((event, index) => (
                  <Reveal key={index}>
                    <div
                      className="p-3 max-w-[400px] h-full shadow-2xl bg-gray-100 hover:shadow-[0px_25px_50px_-12px] transition-all hover:backdrop-blur-sm hover:bg-gray-200 cursor-pointer"
                      onClick={() => navigate(event.link)}
                    >
                      <img
                        src={event.image}
                        style={{ maxWidth: "100%" }}
                        alt={event.name}
                        draggable={false}
                      />
                      <h2 className="font-semibold text-2xl py-1">{event.name}</h2>
                      <p className="italic">{event.Date}</p>
                      <p className="text-lg mt-2">{event.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

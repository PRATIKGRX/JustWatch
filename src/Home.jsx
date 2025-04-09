import React from "react";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import profImage from "./assets/prof.jpg";

const Home = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = monthNames[month];
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(5);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=7b316e6d&s=action&page=1`
        );
        const data = await response.json();

        if (data.Response === "False") {
          console.error("OMDb API Error:", data.Error);
          return;
        }

        setMovies(data.Search || []);
      } catch (error) {
        console.error("Network error:", error);
      }
    };
    fetchMovies();
  }, []);
  useEffect(() => {
    // Ensure we check scroll when movies are updated
    setTimeout(() => {
      Object.keys(scrollRefs).forEach((key) => checkScroll(key));
    }, 500);
  }, [movies]);
  useEffect(() => {
    const handleResize = () => {
      Object.keys(scrollRefs).forEach((key) => checkScroll(key));
    };

    window.addEventListener("resize", handleResize);

    // Run immediately after mounting
    Object.keys(scrollRefs).forEach((key) => checkScroll(key));

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const firstTwoMovies = movies.length >= 2 ? [movies[0], movies[1]] : [];

  const testMovies = movies.length > 4 ? movies[4] : null;

  const scrollRefs = {
    section1: useRef(null),
    section2: useRef(null),
  };

  const [canScroll, setCanScroll] = useState({
    section1: { left: false, right: true },
    section2: { left: false, right: true },
  });

  const scroll = (refKey, direction) => {
    const scrollAmount = 900;
    const ref = scrollRefs[refKey];

    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => checkScroll(refKey), 300); // Delay to allow smooth scrolling
    }
  };

  // Generalized Scroll Check
  const checkScroll = (refKey) => {
    const ref = scrollRefs[refKey];

    if (ref.current) {
      setCanScroll((prev) => ({
        ...prev,
        [refKey]: {
          left: ref.current.scrollLeft > 0,
          right:
            ref.current.scrollLeft <
            ref.current.scrollWidth - ref.current.clientWidth,
        },
      }));
    }
  };

  // Run checkScroll on mount and resize
  useEffect(() => {
    Object.keys(scrollRefs).forEach((key) => checkScroll(key));

    const handleResize = () => {
      Object.keys(scrollRefs).forEach((key) => checkScroll(key));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <header>
        <nav className="z-10000 flex justify-between px-12 py-3 bg-[#141414] text-white items-center fixed top-0 left-0 right-0">
          <div className="flex items-center gap-1 text-[#FABA18]">
            <i className="text-2xl fa-solid fa-film"></i>
            <h1 className="text-2xl">JustWatch</h1>
          </div>
          <div>
            <ul className="flex gap-8 text-[#B4B3B0]">
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Lists</li>
              <li>Sports</li>
              <li>Guide</li>
            </ul>
          </div>
          <div className="flex gap-5">
            <div className="relative">
              <input
                type="text"
                className="focus:outline-none bg-[#3A3939] pl-8 w-[500px] h-[38px] rounded-sm"
                placeholder="Search Movies"
              />
              <i className="absolute left-2 top-3 text-[#B4B3B0] fa-solid fa-magnifying-glass"></i>
            </div>
            <button className="bg-[#3A3A3A] rounded-sm px-4">Sign In</button>
            <button>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav>
      </header>
      <main className="mt-15 px-12 py-6 bg-black text-white">
        <div>
          <div className="flex justify-between mb-12">
            <div className="flex gap-4">
              <h5 className="text-4xl font-bold">Discover daily</h5>
              <div className="flex flex-col rounded-sm overflow-hidden w-10">
                <p className="bg-red-500 text-xs text-center">{monthName}</p>
                <p className="bg-white text-black text-lg font-bold text-center">
                  {day}
                </p>
              </div>
            </div>
            <div className="px-2 py-2 bg-[#3A3A3A] rounded-sm">
              Stream Select
            </div>
          </div>
          <div className="flex justify-between">
            {firstTwoMovies.length > 0 && firstTwoMovies[0] && (
              <div className="grid grid-cols-[20%_80%] h-[180px] w-[600px] bg-[#3A3A3A] rounded-lg overflow-hidden bg-gradient-to-r from-black/80 via-black/40 to-black/99">
                <div className="">
                  <img
                    className="h-[180px] w-[120px] object-cover "
                    src={firstTwoMovies[0].Poster}
                    alt={firstTwoMovies[0].Title}
                  />
                </div>
                <div className="px-4 py-4 flex flex-col justify-between items-start">
                  <p className="">{firstTwoMovies[0].Year}</p>
                  <p className="text-2xl font-bold">
                    {firstTwoMovies[0].Title}
                  </p>
                  <button className="bg-white text-black px-10 py-1 rounded-sm">
                    Watch Now
                  </button>
                </div>
              </div>
            )}

            {firstTwoMovies.length > 1 && firstTwoMovies[1] && (
              <div
                className="bg-top grid grid-cols-[20%_80%] h-[180px] w-[600px] rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `
                 linear-gradient(to right, rgba(0, 0, 0, 0.99), rgba(0,0,0,0.6), rgba(0,0,0,0.8)),
                 url(${firstTwoMovies[1]?.Poster})
               `,
                  backgroundPosition: "top",
                }}
              >
                <div className="px-4 py-8">
                  <img
                    className="h-[120px] w-[80px] object-cover rounded-xl overflow-hidden"
                    src={firstTwoMovies[1].Poster}
                    alt={firstTwoMovies[1].Title}
                  />
                </div>
                <div className="px-4 py-8 flex flex-col justify-between items-start ">
                  <p>{firstTwoMovies[1].Year}</p>
                  <p className="text-2xl font-bold leading-none">
                    {firstTwoMovies[1].Title} <br />
                    <span className="text-xl text-[#969595]">(Season)</span>
                  </p>
                  <div className="flex justify-between items-center w-full">
                    <p>Highly rated on IMDb (8.1)</p>
                    <button className="bg-white text-black px-8 py-1 rounded-sm">
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <hr className="my-10" />
        <section>
          <div className="flex justify-between items-center">
            <h5 className="text-4xl font-semibold">
              15 Music Movies That Aren't Musicals | Pratik Grx
            </h5>
            <button className="bg-[#FCB910] rounded-sm px-4 py-2">
              <i className="fa-solid fa-bookmark"></i> Follow List
            </button>
          </div>
          <div className="flex gap-2 mt-8">
            <img
              className="h-[40px] w-[40px] rounded-full"
              src={profImage}
              alt=""
            />
            <div>
              <p className="text-xl font-bold">Pratik Grx</p>
              <p className="text-sm font-thin">JustWatch editor</p>
            </div>
          </div>

          <div className="relative flex mt-8 group">
            <div
              ref={scrollRefs.section1}
              className="flex overflow-x-auto gap-6 scrollbar-hide"
            >
              {movies.map((movie, index) => (
                <div key={index}>
                  <img
                    className="min-h-[285px] min-w-[190px]"
                    src={movie.Poster}
                    alt={movie.Title}
                  />
                </div>
              ))}
            </div>

            {canScroll.section1.right && (
              <button
                onClick={() => scroll("section1", "right")}
                className="opacity-0 group-hover:opacity-90 transition-opacity absolute right-0 bg-[#282828] text-white px-2 h-full"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            )}
            {canScroll.section1.left && (
              <button
                onClick={() => scroll("section1", "left")}
                className="opacity-0 group-hover:opacity-90 transition-opacity absolute left-0 bg-[#282828] text-white px-2 h-full"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            )}
          </div>
        </section>
        <section className="mt-8 py-10">
          <h5 className="text-3xl font-bold">Why to watch A Civil Action ?</h5>
          <div className="grid grid-cols-[18%_80%] bg-[#777777] px-6 py-6 mt-6 gap-8 rounded-lg h-[350px]">
            <div className=" rounded-lg overflow-hidden">
              {testMovies && testMovies.Poster ? (
                <img src={testMovies.Poster} alt="Movie Poster" />
              ) : (
                <div>Loading...</div>
              )}
            </div>
            <div className="pr-4 flex flex-col justify-between">
              <div className="flex items-center gap-4 mb-4">
                <img
                  className="h-[40px] w-[40px] rounded-full"
                  src={profImage}
                  alt=""
                />
                <p className="text-xl font-bold">Pratik Grx</p>
                <p className="text-sm">JustWatch Editor</p>
              </div>
              <p className="text-lg font-bold">
                Definitely One of the Best Legal Dramas
              </p>
              <p className="mt-4 mb-6">
                A Civil Action is a gripping legal drama starring John Travolta
                as a determined lawyer fighting against corporations accused of
                environmental damage. The film explores the personal and moral
                challenges of pursuing justice in a complex and slow-moving
                legal battle. While the pacing is deliberate, it builds tension
                as the lawyer faces emotional and financial sacrifices. The
                performances, especially by Travolta, are strong, and the story
                offers a sobering reflection on the costs of seeking
                accountability.
              </p>
              <hr />
              <div className="flex justify-between mt-6">
                <div>Watched on Netflix on 00/00/0000</div>
                <div className="flex gap-4">
                  <p>Helpful?</p>
                  <button
                    onClick={() => {
                      setLike((prevState) => prevState + 1);
                    }}
                  >
                    <i className="fa-solid fa-thumbs-up"></i>
                  </button>
                  <p>{like}</p>
                  <p>
                    <i className="fa-solid fa-share"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex mt-12 group">
            <div
              ref={scrollRefs.section2}
              className="flex overflow-x-auto gap-6 scrollbar-hide"
            >
              {movies.map((movie, index) => (
                <div
                  key={index}
                  className="relative min-h-[180px] min-w-[380px] rounded-xl px-4 py-4 flex flex-col justify-between"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(16, 16, 16,0.99), rgba(0,0,0,0.6), rgba(47, 45, 46,1)), url(${movie?.Poster})`,
                    backgroundPosition: "top",
                  }}
                >
                  <p className="text-[#898888]">{movie.Year} | 32min</p>
                  <h5 className="text-xl font-bold">{movie.Title}</h5>
                  <p className="text-[#898888] text-lg">(Season-1)</p>
                  <button className="bg-[#6E6E6E] py-2 font-bold rounded-lg">
                    Watch Now
                  </button>
                </div>
              ))}
            </div>

            {canScroll.section2.right && (
              <button
                onClick={() => scroll("section2", "right")}
                className="opacity-0 group-hover:opacity-90 transition-opacity absolute right-0 bg-[#282828] text-white px-2 h-full"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            )}
            {canScroll.section2.left && (
              <button
                onClick={() => scroll("section2", "left")}
                className="opacity-0 group-hover:opacity-90 transition-opacity absolute left-0 bg-[#282828] text-white px-2 h-full"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            )}
          </div>
        </section>
      </main>
      <footer className="px-12 h-[600px] flex justify-center items-center bg-black text-white">
        <div>
          <div className="text-center w-full">
           <p> <i class="text-5xl mb-8 text-white fa-solid fa-flag-checkered"></i></p>
          </div>
          <h5 className="text-4xl text-center font-bold mb-4">That's it for today.</h5>
          <p className="text-center text-lg mb-4">
            Didn't find something to watch yet?We got you. Try one of these
            options instead:
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-stone-500 px-2 py-2 rounded-lg">Check What's new</button>
            <button className="bg-stone-500 px-2 py-2 rounded-lg">Browse and filter</button>
          </div>
          <p className="text-blue-500 text-lg text-center mt-6">Show old recommendations</p>
        </div>
      </footer>
    </>
  );
};

export default Home;

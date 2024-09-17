import React from "react";
import { motion } from "framer-motion";

export default function inicio() {
  return (
    <div className="bg-gradient-to-b from-[#c1afa0]/10 to-[#6c584c] min-h-screen text-white p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0.5 }}
        transition={{ duration: 0.8 }}
        animate={{ scale: 1.0, opacity: 1.0 }}
        className="bg-[#957e72] border-2 rounded-lg p-4 shadow-xl shadow-[#6c584c] min-h-screen "
      >
        <motion.div
          initial={{ scale: 1.0, opacity: 0.5, y: -50 }}
          transition={{ duration: 0.8 }}
          animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
          className="border-2 rounded-lg m-4 p-4 text-center bg-[#252525] shadow-md shadow-[#6c584c] "
        >
          <h1 className="hover:scale-105 hover:text-[#6c584c] transition-all duration-500 ease-in-out text-4xl	">
            Victoria's Journal
          </h1>
          <h2 className="">So fresh and so clean</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-5 h-full">
          <div className=" p-4 justify-items-center">
            <motion.section
              initial={{ scale: 1.0, opacity: 0.5, x: -50 }}
              transition={{ duration: 0.8 }}
              animate={{ scale: 1.0, opacity: 1.0, x: 0 }}
              className="border-2 rounded-lg p-2 bg-[#252525] shadow-md shadow-[#6c584c] "
            >
              <h1 className="text-2xl">Friends</h1>
              <ul className="list-disc p-4	">
                <li className="hover:scale-105 hover:text-[#6c584c] transition-all duration-500 ease-in-out ">
                  <a href="http://www.cs.washington.edu/education/courses/cse190m/CurrentQtr/staff.shtml">
                    190m Buddies
                  </a>
                </li>
                <li className="hover:scale-105 hover:text-[#6c584c] transition-all duration-500 ease-in-out">
                  <a href="http://www.willsmith.net/">Big Will</a>
                </li>
                <li className="hover:scale-105 hover:text-[#6c584c] transition-all duration-500 ease-in-out">
                  <a
                    href="http://youtube.com/watch?v=mZHoHaAYHq8"
                    title="Conan the Librarian"
                  >
                    Conan the Librarian
                  </a>
                </li>
              </ul>
            </motion.section>
            <div className="border-2   rounded-lg m-2 md:block hidden">
              <img src="https://i.pinimg.com/originals/82/cd/4d/82cd4d98a075c02b573d76462650a78b.gif" alt="aasdad" />
            </div>
          </div>
          <motion.div
            initial={{ scale: 1.0, opacity: 0.5, x: +50 }}
            transition={{ duration: 0.8 }}
            animate={{ scale: 1.0, opacity: 1.0, x: 0 }}
            className="col-span-4"
          >
            <section className="border-2 rounded-lg m-4 p-4 grid grid-cols-1 md:grid-cols-2 bg-[#252525]  shadow-md shadow-[#6c584c]">
              <div>
                <h2 className="text-start border-b">04/09/08: Spatulas</h2>
                <p className="text-justify ">
                  Yesterday I went to the store and got some much-needed{" "}
                  <a href="http://www.youtube.com/watch?v=2XbCWmY0eqY">
                    spatulas
                  </a>
                  ! (What better way to say I love myself than to buy myself a
                  spatula?)
                </p>
              </div>
              <div>
                <p className=" flex justify-center md:justify-end m-2 p-2 ">
                  <img
                    src="http://www.cs.washington.edu/education/courses/190m/09sp/labs/2-journal/images/spatula.gif"
                    alt="Much-needed spatula"
                  />
                </p>
              </div>
            </section>
            <section className="border-2 rounded-lg m-4 p-4  grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#252525] shadow-md shadow-[#6c584c]">
              <div>
                <h2 className="text-start text-start border-b">
                  04/08/08: Cookie Monster Cupcakes
                </h2>

                <p className="text-justify ">
                  My favorite cartoon character is Cookie Monster, and my
                  favorite dessert is cupcakes, so Cookie Monster cupcakes are
                  the best of both worlds.
                </p>

                <p className="text-justify ">
                  Did you know? Cookie Monster once said,{" "}
                  <q>
                    Sometimes me think what is love, and then me think love is
                    what last cookie is for. Me give up the last cookie for you.
                  </q>{" "}
                  I wonder if the same applies for cupcakes? (If so, I don't
                  think I can ever love ANYONE!)
                </p>
              </div>
              <div>
                <p className=" flex justify-center md:justify-end">
                  <img
                    src="http://www.cs.washington.edu/education/courses/190m/09sp/labs/2-journal/images/cookiemonster.jpg"
                    alt="Cookie Monster: in cupcake form!"
                  />
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ scale: 1.0, opacity: 0.5, y: +50 }}
        transition={{ duration: 0.8 }}
        animate={{ scale: 1.0, opacity: 1.0, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 m-4 justify-items-center"
      >
        <section className="m-2 hover:scale-105 hover:shadow-white hover:shadow-md transition-all duration-500 ease-in-out">
          <p>
            <a href="http://validator.w3.org/check/referer">
              <img
                src="http://www.w3.org/Icons/valid-xhtml11"
                alt="Valid XHTML"
              />
            </a>
          </p>
        </section>
        <section className="m-2 hover:scale-105 hover:shadow-white hover:shadow-md transition-all duration-500 ease-in-out">
          <p>
            <a href="http://jigsaw.w3.org/css-validator/check/referer">
              <img
                src="http://jigsaw.w3.org/css-validator/images/vcss"
                alt="Valid CSS"
              />
            </a>
          </p>
        </section>
      </motion.div>
    </div>
  );
}

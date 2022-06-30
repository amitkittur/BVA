import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { useEffect, Suspense } from "react";
import Aos from "aos";
import Swiper from "swiper";
import UpSkill from "../components/upskill";
import Mission from "../components/mission";
import Team from "../components/team";
// const DynamicCourses = dynamic(() => import("../components/Courses"), {
//   suspense: true
// });
import Courses from "../components/courses";
import About from "../components/aboutbva";
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  return (
    <Fragment>
      <Head>
        <title>BlockVerse Academy</title>
      </Head>
      <Layout />
      <Intro />
      <UpSkill />
      <Mission />
      <Team />

      <Courses />
      <About />
    </Fragment>
  );
}

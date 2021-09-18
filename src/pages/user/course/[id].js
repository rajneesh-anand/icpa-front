import React, { useEffect } from "react";
import { getSession } from "next-auth/client";
import Seo from "@/components/Seo";
import NavbarStyleOne from "@/components/_App/NavbarStyleOne";
import ReactJWPlayer from "react-jw-player";
import prisma from "@/libs/prisma";

const UserCoursePage = ({ data }) => {
  const course_data = JSON.parse(data);
  console.log(course_data);
  const [media, setMedia] = React.useState({ videoLink: "", posterLink: "" });
  return (
    <>
      <Seo
        title="My Course"
        description="This is couse"
        canonical={`${process.env.PUBLIC_URL}/course`}
      />
      <NavbarStyleOne />

      {course_data.length > 0 && (
        <div className="pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <ul>
                  {course_data.map((course, index) => (
                    <li key={index}>
                      <h4
                        onClick={() =>
                          setMedia({
                            videoLink: course.video,
                            posterLink: course.poster,
                          })
                        }
                      >
                        {course.title}
                      </h4>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-9 col-md-9">
                <ReactJWPlayer
                  playerId="studionmovieonline"
                  playerScript="https://cdn.jwplayer.com/libraries/QoEEgjta.js"
                  file={media.videoLink}
                  image={media.posterLink}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserCoursePage;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.params;
  console.log(id);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const data = await prisma.coursemedia.findMany({
    where: {
      courseId: Number(id),
    },
  });
  return {
    props: { data: JSON.stringify(data) },
  };
}

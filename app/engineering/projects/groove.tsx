"use client";

import { useState } from "react";
import Image from "next/image";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Groove() {
  return (
    <div>
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl animate-[jump_0.5s_ease-out]">Groove</h2>

          <p className="mt-4 ">
            <strong>Skills:</strong> UX Design, Full Stack Development
          </p>
          <p>
            <strong>Tools:</strong> Figma, Next.js, Typescript, Express, MongoDB
          </p>
        </div>
        <p className="text-right"> December 2025 </p>
      </div>

      <p className="mt-4 mb-4 text-lg font-semibold border-b border-black">
        Overview
      </p>

      <video controls muted className="w-full h-auto rounded-xl">
        <source src="/groove/groove-home-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p className="mt-4 text-lg">
        Groove is a letter-boxd inspired music discovery social network designed
        to help users share their music tastes, discover new music, and connect
        with others. The fully functional platform allows for user registration,
        profile creation, music library management, and social interactions such
        as following other users and sharing music reviews. The project aims to
        create a community of music enthusiasts who can track, discover, and
        discuss their favorite tracks.
      </p>

      <div className="flex flex-col md:flex-row gap-2 mt-4 mb-4">
        <div className="flex-1 rounded-lg overflow-hidden">
          <Image
            src="/groove/groove-home-signed-in.png"
            alt="Groove App Mockup"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>

        <div className="flex-1 rounded-lg overflow-hidden">
          <Image
            src="/groove/groove-home-signed-out.png"
            alt="Groove Process"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      <p className="mt-4 text-lg">
        <strong>The home page </strong>features the four most recent reviews
        written platform-wide, as well as dynamic content personalized to the
        signed-in user - showcasing their most recent reviews.
      </p>

      <div className="flex flex-col md:flex-row gap-2 mt-4 mb-4">
        <div className="flex-1 rounded-lg overflow-hidden">
          <Image
            src="/groove/groove-albums.png"
            alt="Groove App Mockup"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>

        <div className="flex-1 rounded-lg overflow-hidden">
          <Image
            src="/groove/groove-albums-search.png"
            alt="Groove Process"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      <p className="mt-4 text-lg">
        <strong>The albums page </strong> utilizes the Spotify WebAPI to allow
        users to interact with albums. Upon opening the page, users are
        reccomended albums based on a randomly selected genre. Users can also
        search for albums by name, artist, or genre using the search bar at the
        top of the page.
      </p>

      <Image
        src="/groove/groove-selected-album.png"
        alt="Selected Album View"
        width={1200}
        height={600}
        className="w-full h-auto rounded-lg mt-4 mb-4"
      />

      <p className="mt-4 text-lg">
        Users can click on album cover to move to<strong> album view. </strong>{" "}
        Groove utilizes the Spotify WebAPI to pull in album information such as
        track list, album art, year released, and artist information. Users can
        interact with the album by writing, reading, and liking reviews, as well
        as adding the album to a new or existing crate.
      </p>

      <div className="flex flex-col md:flex-row gap-2 mt-4 mb-4">
        <div className="flex-1 rounded-lg overflow-hidden">
          <Image
            src="/groove/groove-crates-home.png"
            alt="Groove App Mockup"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>

        <div className="flex-1 rounded-lg overflow-hidden">
          <Image
            src="/groove/groove-crates-crate.png"
            alt="Groove Process"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      <p className="mt-4 text-lg">
        <strong>Crates </strong> are a user-created collections of albums that
        can be shared with other users, and can only be created by PRO users.
        Users who are PRO members can save albums to a crate via the album view,
        and showcase them on their profile. All users can access the crates
        page, which features the most recently created and top crates
        platform-wide.
      </p>

      <div className="flex flex-col md:flex-row gap-2 mt-4 mb-4">
        <div className="flex-1 rounded-lg overflow-hidden">
          <Image
            src="/groove/groove-profile-edit.png"
            alt="Groove App Mockup"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 rounded-lg overflow-hidden">
          <Image
            src="/groove/groove-public-profile.png"
            alt="Groove Process"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      <p className="mt-4 text-lg">
        <strong>The public profile page </strong> showcases a user's profile
        information, their most recent reviews, and their crate collections.
        Users can edit their profile information such as username, email, bio,
        and profile picture on the edit profile page.
      </p>

      <p className="mt-4 text-lg">
        Additional platform features include a discover users page, where users
        can find and follow other users, a followers and following page
        accessible from the profile page, and admin features such as user
        deletion and role management.
      </p>

      <p className="mt-4 text-lg">
        <a
          href="https://groove-nine.vercel.app/Home"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-lg border border-black rounded px-2 py-1 font-semibold "
        >
          <strong>Explore the live platform</strong>

          <ArrowIcon />
        </a>
      </p>

      <p className="mt-4 text-lg font-semibold border-b border-black">
        Process
      </p>

      <p className="mt-4 text-lg">
        The development of Groove was split into two phases: design and
        development. The design phase began with user research, where I
        conducted interviews with music enthusiasts to understand their needs
        and pain points when it comes to music discovery and sharing. Based on
        the insights gathered from the research, I moved on to wireframing and
        prototyping the key pages of the platform, such as the home page, album
        view, crate view, and profile page on Figma. I also created a style
        guide to ensure consistency across the platform.
      </p>

      <p className="mt-4 text-lg">
        <strong>Figma prototyping:</strong>
      </p>

      <Image
        src="/groove/groove-style-guide.png"
        alt="Groove Style Guide"
        width={800}
        height={400}
        className="w-full h-auto rounded-lg mt-4 mb-4"
      />

      <div className="space-y-4 mt-4 mb-4">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/groove/groove-figma-home.png"
            alt="Groove Figma Home"
            width={1200}
            height={900}
            className="w-full h-auto"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/groove/groove-figma-search.png"
            alt="Groove Figma Search"
            width={1200}
            height={900}
            className="w-full h-auto"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/groove/groove-figma-crates.png"
            alt="Groove Figma Crates"
            width={1200}
            height={900}
            className="w-full h-auto"
          />
        </div>

        <div className="rounded-lg overflow-hidden">
          <Image
            src="/groove/groove-figma-profile.png"
            alt="Groove Figma Profile"
            width={1200}
            height={900}
            className="w-full h-auto"
          />
        </div>
      </div>
      <p className="mt-4 text-lg">
        The development phase involved building the front-end and back-end of
        the platform. The front-end was developed using Next.js and Typescript,
        while the back-end was built with Express and MongoDB. The Spotify
        WebAPI was integrated to allow for album information retrieval and
        search functionality. User authentication and authorization were
        implemented to manage user accounts and access to certain features. All
        code is publically available via Github:{" "}
        <a
          href="https://github.com/faustafenner/groove"
          target="_blank"
          rel="noopener noreferrer"
          className="underline inline-flex items-center"
        >
          Github Code Base
          <ArrowIcon />
        </a>
      </p>
    </div>
  );
}

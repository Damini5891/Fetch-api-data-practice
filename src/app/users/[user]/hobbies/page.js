import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <h1>Your hobbies</h1>
      <ul>
        <Link href="users/user/hobbies/">Coding</Link>
      </ul>
    </>
  );
}

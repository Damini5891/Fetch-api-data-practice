import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <h1>All users</h1>
      <div>
        <Link href="users/1">
          <h3>User 1</h3>
        </Link>
        <Link href="users/2">
          <h3>User 2</h3>
        </Link>
        <Link href="users/3">
          <h3>User 3</h3>
        </Link>
        <Link href="users/4">
          <h3>User 4</h3>
        </Link>
        <Link href="users/5">
          <h3>User 5</h3>
        </Link>
      </div>
    </>
  );
}

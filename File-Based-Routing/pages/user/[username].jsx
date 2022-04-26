import React from "react";
import { useRouter } from "next/router";

const UserProfile = () => {
  const router = useRouter();

  const { username } = router.query;
  return (
    <div>
      <h1>USER NAME :{username} </h1>
    </div>
  );
};

export default UserProfile;

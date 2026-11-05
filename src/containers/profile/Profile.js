import React from "react";
import GithubProfileCard from "../../components/githubProfileCard/GithubProfileCard";
import userAvatar from "../../assets/images/thanhkien.jpg";

export default function Profile() {
  const profileData = {
    name: "Chế Thanh Kiên",
    bio: "Fullstack Developer with 2+ years of experience in Web/Mobile App development and RESTful APIs.",
    avatarUrl: userAvatar,
    location: "Quang Ngai, Vietnam"
  };

  return <GithubProfileCard prof={profileData} />;
}

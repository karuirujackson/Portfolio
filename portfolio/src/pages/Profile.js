import React from 'react';
import Link from '../components/Link';
import { useEffect, useState } from "react";
import './Profile.css';

function Profile({ userName}) {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect (() => {
    async function fetchData () {
      const portfile = await fetch (`https://api.github.com/users/${userName}`);
      const result = await portfile.json();

      // console.log(result);

      if(result) {
        setProfile(result);
        setLoading(false);
      }
    }
    fetchData();
  }, [userName]);

  return (
    <div className='Profile-container'>
      <h2>
        About Me
      </h2>
      {
        loading ? (
          <span>Loading...</span>
        ) : (
          <div>
            <img
              className='Profile-avatar'
              src={profile.avatar_url}
              alt={profile.name}
            />
            <ul>
            <li>
                <span>HTML_url:</span>
                <Link 
                  url={profile.html_url} 
                  title={profile.html_url} 
                />
              </li>
              <li>
                <span>Repos_url:</span>
                <Link
                  url={profile.repos_url}
                  title={profile.repos_url}
                />
              </li>
              <li>
                <span>Name:</span>
                {profile.name}
              </li>
              <li>
                <span>Company:</span>
                {profile.company}
              </li>
              <li>
                <span>Location:</span>
                {profile.location}
              </li>
              <li>
                <span>Email:</span>
                {profile.email}
              </li>
              <li>
                <span>Bio:</span>
                {profile.bio}
              </li>
            </ul>
          </div>
        )
      }
    </div>
  )
};
export default Profile;

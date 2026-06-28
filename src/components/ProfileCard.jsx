import { useState, useEffect } from "react";

function ProfileCard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProfile({
        name: "Ada Lovelace",
        email: "ada@example.com",
        city: "London",
      });

      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Profile Card</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>City:</strong> {profile.city}</p>
        </>
      )}
    </div>
  );
}

export default ProfileCard;
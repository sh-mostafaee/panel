'use client'

import {FormEvent, useState} from "react";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <main className="p-2">
        <h1>hello home page</h1>
        <form
          className="border rounded-md p-4 mx-auto w-[400px]"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              name="username"
              placeholder="Enter your sername here..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </form>
      </main>
    </div>
  );
}

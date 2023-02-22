"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      This ain't load {error.message}
      <button onClick={() => reset}>Reset</button>
    </div>
  );
}

'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
}


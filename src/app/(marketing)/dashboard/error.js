"use client";

export default function DashboardError({ error, reset }) {
    return (
        <div>
            <h2>Something error in Dashboard</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>
                Try again
            </button>
        </div>
    )
}
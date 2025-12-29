

async function fetchData() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return "Du lieu tra ve tu SlowComponent";
}


export default async function SlowComponent() {
    const data = await fetchData();

    return (
        <div>
            <h3>SlowComponent</h3>
            <p>{data}</p>
        </div>
    )

}
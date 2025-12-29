import { Suspense } from "react";
import SlowComponent from "./slow-component";

function LoadingFallback() {
    return (
        <div>
            <h3>Dang tai SlowComponent ....</h3>
            <p>Vui long doi khi du lieu dang duoc tai</p>
        </div>
    )
}

export default function StreamingExamplePage() {
    return (
        <div>
            <h1>StreamingExamplePage</h1>
            <p>Phan nay se hien thi ngay luc tuc</p>

            <Suspense fallback={ <LoadingFallback/> }>
                <SlowComponent/>
            </Suspense>

            <div>
                <h3>Thanh phan khac</h3>
                <p>Thanh phan nay cung hien thi ngay lap tuc</p>
            </div>

        </div>
    )
}
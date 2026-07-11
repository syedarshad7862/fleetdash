export default function LiveStatus() {

    const data = [
        ["Connection", "ONLINE"],
        ["Uptime", "142:12:04"],
        ["Data Rate", "4.2 GB/s"],
        ["Active Nodes", "23"],
        ["Packet Loss", "0.02%"],
        ["Latency", "4 ms"]
    ];

    return (

        <div className="bg-[#171b22] border border-gray-700 rounded-lg p-6 h-full">

            <h2 className="text-3xl font-semibold">
                Live Status
            </h2>

            <p className="text-gray-400 mb-8">
                Network Diagnostics
            </p>

            <div className="space-y-6">

                {data.map(([k, v]) => (

                    <div
                        key={k}
                        className="flex justify-between border-b border-gray-700 pb-3"
                    >

                        <span className="text-gray-400">
                            {k}
                        </span>

                        <span
                            className={
                                k === "Connection"
                                    ? "text-green-400 font-semibold"
                                    : "text-white"
                            }
                        >
                            {v}
                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

}
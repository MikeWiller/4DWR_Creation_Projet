import { useEffect, useState } from "react";

let localCache = []

const useGetImages = (filter="") => {
    const [cryptos, setCrypto] = useState([]);
    const [status, setStatus] = useState("unloaded");
    useEffect(() => {
        if(localCache.length === 0) {
            requestImages()
        } else if (localCache.length > 0) {
            setCrypto(localCache.filter(filterfunc))
            setStatus("loaded")
        }
        // eslint-disable-line react-hooks/exhaustive-deps
        async function requestImages() {
            console.log("request images")
          const apiRep = await fetch(
            "https://mongodb-image-api.vercel.app/api/listCryptoLogo"
          );
          const json = await apiRep.json();
          setCrypto(json.filter(filterfunc))
          localCache = json || [];
          setStatus("loaded");
        }
        function filterfunc (code) {
            return (
                code.currency_code.toLowerCase().includes(filter.toLowerCase()) ||
                code.currency_long.toLowerCase().includes(filter.toLowerCase())
            )
        }
    },[filter])
    return [status, cryptos]
}

export default useGetImages
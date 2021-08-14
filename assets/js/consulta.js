let animales = (() => {
    const url = "http://127.0.0.1:5500/animales.json";

    const getData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    };

    return { getData };
})();

export default animales;
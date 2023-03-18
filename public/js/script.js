const fetchData = async () => {
    try {
        const response = await fetch('');
        console.log(response);
    } catch (e) {
        console.log(e);
    }
}
fetchData();
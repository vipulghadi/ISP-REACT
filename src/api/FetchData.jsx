async function fetchMovieData() {
    try {
        const resp = await fetch("https://api.tvmaze.com/search/shows?q=all")
        return resp
    } catch (e) {
        return e
    }
}
export default fetchMovieData
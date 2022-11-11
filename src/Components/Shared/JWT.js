const jwt = (currentUser) => {
    fetch('https://server-side-assignment.vercel.app/jwt', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    }).then(res => res.json()).then(data => {
        // console.log("asd", data);
        localStorage.setItem('token', data.token)
    })
}
export default jwt;
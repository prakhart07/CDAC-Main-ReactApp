function Booking()
{
    var movieToBeBooked =  window.sessionStorage.getItem("movieToBeBooked")
    return <h1>Welcome to booking. Book {movieToBeBooked} movie</h1>
}

export default Booking;
const displayHoliday = async () =>{
    try {
        return {status: true, message: "Display Holiday in user profile", data:{
            "name": "John Doe",
            "email": "john.doe@example.com",
            "profileImage": "https://example.com/images/john_doe.jpg",
            "role": {
            "roleId": "67b5d42ff2d3779fb1108155",
            "role": "Employee"
            },
            "department": "Software Development",
            "holidays": [
            {
            "date": "2024-01-01",
            "day": "Monday",
            "holidayName": "New Year's Day",
            "description": "Celebration of the beginning of the new year."
            },
            {
            "date": "2024-03-29",
            "day": "Friday",
            "holidayName": "Good Friday",
            "description": "Christian holiday commemorating the crucifixion of Jesus."
            },
            {
            "date": "2024-07-04",
            "day": "Thursday",
            "holidayName": "Independence Day",
            "description": "Celebration of national independence."
            },
            {
            "date": "2024-12-25",
            "day": "Wednesday",
            "holidayName": "Christmas Day",
            "description": "Celebration of the birth of Jesus Christ."
            }
        ]
        },
        
        }
    } catch (error) {
        console.log("Error in displaying holiday in user profile", error);
        return {status: false, message: "Failed to display holiday in user profile", error: error.message}
    }
}
module.exports = displayHoliday
const attendanceDisplay = async () =>{
    try {
        return {status: true, message: "Display attendance for the user", data:{
            "name": "John Doe",
            "email": "john.doe@example.com",
            "profileImage": "https://example.com/images/john_doe.jpg",
            "role": {
            "roleId": "67b5d42ff2d3779fb1108155",
            "role": "Employee"
            },
            "department": "Software Development",
            "attendance": [
            {
            "date": "2024-02-01",
            "checkIn": "09:05 AM",
            "checkOut": "06:15 PM",
            "status": "Present"
            },
            {
            "date": "2024-02-02",
            "checkIn": "09:12 AM",
            "checkOut": "06:10 PM",
            "status": "Present"
            },
            {
            "date": "2024-02-03",
            "checkIn": null,
            "checkOut": null,
            "status": "Absent"
            },
            {
            "date": "2024-02-04",
            "checkIn": "09:00 AM",
            "checkOut": "12:00 PM",
            "status": "Half Day"
            },
            {
            "date": "2024-02-05",
            "checkIn": "09:10 AM",
            "checkOut": "06:20 PM",
            "status": "Present"
            }
        ]
        },
        
        }
    } catch (error) {
        console.log("Error in dislaying attendance", error)
        return {status: false, message: "Failed to display attendance for the user", error: error.message}
    }
}
module.exports = attendanceDisplay
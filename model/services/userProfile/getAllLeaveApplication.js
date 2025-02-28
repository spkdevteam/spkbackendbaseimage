const getAllLeaveApplcation = async () =>{
    try {
        return {status: true, message: "fetched all leave from a user profile", data:[
            {
                "leaveType": "Casual Leave",
                "fromDate": "2024-03-10",
                "toDate": "2024-03-12",
                "totalDays": 3,
                "status": "Approved",
                "reason": "Vacation trip",
                "appliedOn": "2024-02-20T09:30:00Z"
              },
              {
                "leaveType": "Sick Leave",
                "fromDate": "2024-04-01",
                "toDate": "2024-04-03",
                "totalDays": 3,
                "status": "Pending",
                "reason": "Fever and cold",
                "appliedOn": "2024-03-25T14:45:00Z"
              },
              {
                "leaveType": "Casual Leave",
                "fromDate": "2024-05-05",
                "toDate": "2024-05-06",
                "totalDays": 2,
                "status": "Rejected",
                "reason": "Personal work",
                "appliedOn": "2024-04-28T11:15:00Z"
              }
        ],
        "metaData": {
        "page": 1,
        "perPage": 10,
        "totalData": 3,
        "totalPages": 1,
        "searchKey": ""
  },
    }
    } catch (error) {
        
    }
}
module.exports = getAllLeaveApplcation
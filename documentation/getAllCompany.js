/** 
* @swagger 
* /company/get-all/{clientId}: 
*   get: 
*     summary: Get all companies for a specific client
*     description: Fetches a paginated list of companies based on client ID with optional search functionality.
*     tags:
*       - Company 
*     security:
*       - BearerAuth: []
*     parameters:
*       - in: path
*         name: clientId
*         required: true
*         schema:
*           type: string
*         description: The ID of the client whose companies are being fetched
*         example: "6788abe40db7c3b61ed93c70"
*       - in: query
*         name: page
*         required: false
*         schema:
*           type: integer
*           default: 1
*         description: The page number for pagination
*       - in: query
*         name: perPage
*         required: false
*         schema:
*           type: integer
*           default: 5
*         description: Number of companies per page
*       - in: query
*         name: searchKey
*         required: false
*         schema:
*           type: string
*         description: Search key to filter companies by name
*     responses:
*       200:
*         description: Successfully fetched companies
*         content:
*           application/json:
*             example:
*               status: true
*               message: "Fetched all companies"
*               data:
*                 - name: "Tech Innovations Ltd"
*                   incorporationName: "Tech Innovations Private Limited"
*                   cinNumber: "U12345MH2023PTC123456"
*                   gstNumber: "27ABCDE1234F1Z5"
*                   prefix: "TI"
*                   email: "contact@techinnovations.com"
*                   state: "Maharashtra"
*                   country: "India"
*                   ZipCode: "400001"
*                   address: "123, Tech Park, Mumbai, India"
*                 - name: "Tech Innovations Ltd"
*                   incorporationName: "Tech Innovations Private Limited"
*                   cinNumber: "U12345MH2023PTC123456"
*                   gstNumber: "27ABCDE1234F1Z5"
*                   prefix: "TI"
*                   email: "contact@techinnovations.com"
*                   state: "Maharashtra"
*                   country: "India"
*                   ZipCode: "400001"
*                   address: "123, Tech Park, Mumbai, India"
*               metaData:
*                 currentPage: 1
*                 perPage: 5
*                 searchKey: "ti"
*                 totalData: 8
*                 totalPages: 2
*       400:
*         description: Invalid request parameters
*         content:
*           application/json:
*             example:
*               status: false
*               message: "Invalid request parameters"
*       401:
*         description: Unauthorized, missing or invalid token
*         content:
*           application/json:
*             example:
*               status: false
*               message: "Unauthorized access"
*       404:
*         description: No companies found
*         content:
*           application/json:
*             example:
*               status: false
*               message: "No companies found"
*       500:
*         description: Internal server error
*         content:
*           application/json:
*             example:
*               status: false
*               message: "Internal server error"
*/

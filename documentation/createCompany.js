/** 
* @swagger 
* /company/create: 
*   post: 
*     summary: Create a new company
*     description: Creates a new company with relevant business details such as company name, incorporation name, CIN number, GST number, contact information, and client affiliation.
*     tags:
*       - Company 
*     security:
*       - BearerAuth: []
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             required:
*               - name
*               - incorporationName
*               - cinNumber
*               - gstNumber
*               - prefix
*               - email
*               - contactNumber
*               - city
*               - state
*               - country
*               - ZipCode
*               - address
*               - clientId
*             properties:
*               name:
*                 type: string
*                 description: The official name of the company
*                 example: "Technology Innovations Ltd"
*               incorporationName:
*                 type: string
*                 description: The legal incorporation name of the company
*                 example: "Technology Innovations Private Limited"
*               cinNumber:
*                 type: string
*                 description: Corporate Identification Number (CIN)
*                 example: "U12345MH2023PTC123459"
*               gstNumber:
*                 type: string
*                 description: GST registration number
*                 example: "27ABCDE1234F7Z"
*               prefix:
*                 type: string
*                 description: Company name prefix
*                 example: "TIL"
*               logo:
*                 type: string
*                 description: URL of the company logo
*                 example: "https://example.com/logo.png"
*               email:
*                 type: string
*                 format: email
*                 description: Official company email address
*                 example: "contact@techinnovations.com"
*               contactNumber:
*                 type: string
*                 description: Company's contact number
*                 example: "+918765432109"
*               city:
*                 type: string
*                 description: City where the company is based
*                 example: "Mumbai"
*               state:
*                 type: string
*                 description: State/province where the company is based
*                 example: "Maharashtra"
*               country:
*                 type: string
*                 description: Country where the company is based
*                 example: "India"
*               ZipCode:
*                 type: string
*                 description: Company's ZIP/postal code
*                 example: "400001"
*               address:
*                 type: string
*                 description: Full address of the company
*                 example: "123, Tech Park, Mumbai, India"
*               clientId:
*                 type: string
*                 description: Associated client ID
*                 example: "6788abe40db7c3b61ed93c70"
*     responses:
*       201:
*         description: Company successfully created
*         content:
*           application/json:
*             example:
*               status: true
*               message: "Company created successfully"
*               data:
*                 _id: "67b9a640dcdcf9ab84cf0da3"
*       400:
*         description: Validation error or missing required fields
*         content:
*           application/json:
*             example:
*               status: false
*               message: "Required fields are missing"
*       409:
*         description: Conflict, company already exists
*         content:
*           application/json:
*             example:
*               status: false
*               message: "Company with this email already exists"
*       401:
*         description: Unauthorized, missing or invalid token
*         content:
*           application/json:
*             example:
*               status: false
*               message: "Unauthorized access"
*       500:
*         description: Internal server error
*         content:
*           application/json:
*             example:
*               status: false
*               message: "Internal server error"
*/

/**
 * @swagger
 * /duties/getDutyAndResponsibilityPaginated/{clientid}:
 *   get:
 *     summary: Get paginated duties and responsibilities
 *     description: This API retrieves a paginated list of duties and responsibilities by the given ID, with optional search and pagination parameters.
 *     tags:
 *       - Duties
 *     parameters:
 *       - in: path
 *         name: clientId
 *         required: true
 *         description: The unique ID associated with the duties and responsibilities.
 *         schema:
 *           type: string
 *           example: "123456"
 *       - in: query
 *         name: page
 *         required: false
 *         description: The page number for pagination.
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: perPage
 *         required: false
 *         description: The number of results per page.
 *         schema:
 *           type: integer
 *           example: 10
 *       - in: query
 *         name: searchKey
 *         required: false
 *         description: A search key to filter the duties.
 *         schema:
 *           type: string
 *           example: ""
 *     responses:
 *       200:
 *         description: Duties and responsibilities fetched successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Successfully fetched the duties"
 *               data:
 *                 - _id: "67bc3c3fd0fc20776adab0b6"
 *                   rulesName: "firstDuty"
 *                   apiId: "67b32661425c6067035df2f7"
 *                   departmentId: "67b32661425c6067035df2f7"
 *                   deletedAt: null
 *                   deletedBy: null
 *                   createdBy: "67b5c5f8b16bd2ccf5927d31"
 *                   editedBy: null
 *                   isActive: false
 *                   companyId: "67b32661425c6067035df2f7"
 *                   createdAt: "2025-02-24T09:30:39.657Z"
 *                   updatedAt: "2025-02-24T10:28:52.398Z"
 *                   __v: 0
 *                 - _id: "67bc3c4dd0fc20776adab0ba"
 *                   rulesName: "secondDuty"
 *                   apiId: "67b32661425c6067035df2f7"
 *                   departmentId: "67b32661425c6067035df2f7"
 *                   deletedAt: null
 *                   deletedBy: null
 *                   createdBy: "67b5c5f8b16bd2ccf5927d31"
 *                   editedBy: null
 *                   isActive: false
 *                   companyId: "67b32661425c6067035df2f7"
 *                   createdAt: "2025-02-24T09:30:53.500Z"
 *                   updatedAt: "2025-02-24T09:30:53.500Z"
 *                   __v: 0
 *                 - _id: "67bc3c58d0fc20776adab0bc"
 *                   rulesName: "thirdDuty"
 *                   apiId: "67b32661425c6067035df2f7"
 *                   departmentId: "67b32661425c6067035df2f7"
 *                   deletedAt: null
 *                   deletedBy: null
 *                   createdBy: "67b5c5f8b16bd2ccf5927d31"
 *                   editedBy: null
 *                   isActive: false
 *                   companyId: "67b32661425c6067035df2f7"
 *                   createdAt: "2025-02-24T09:31:04.896Z"
 *                   updatedAt: "2025-02-24T09:31:04.896Z"
 *                   __v: 0
 *       400:
 *         description: Bad request. Missing or invalid parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid request parameters."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */
/**
 * @swagger
 * /pagesMaster/getOnePageMaster/{pageId}/{clientId}:
 *   get:
 *     summary: Get a specific pageMaster by pageId and clientId
 *     description: Fetches details of a specific pageMaster using the provided pageId and clientId.
 *     tags:
 *       - Pages Master Management
 *     parameters:
 *       - in: path
 *         name: pageId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the pageMaster to retrieve.
 *         example: "67d13e214b19b8ceaf46ee8d"
 *       - in: path
 *         name: clientId
 *         required: true
 *         schema:
 *           type: string
 *         description: The client ID associated with the pageMaster.
 *         example: "6788abe40db7c3b61ed93c70"
 *     responses:
 *       200:
 *         description: Requested pageMaster fetched successfully.
 *         content:
 *           application/json:
 *             example:
 *               status: true
 *               message: "Requested pageMaster fetched successfully"
 *               data:
 *                 _id: "67d13e214b19b8ceaf46ee8d"
 *                 menuName: "testMenu2"
 *                 pathName: "testPathName2"
 *                 reporting: "reporting"
 *                 companyId: "67b04146e8875393e56abbd6"
 *                 isActive: true
 *                 createdBy: "67c944517f8fcf7d12e92f1d"
 *                 deletedAt: null
 *                 oldId: null
 *                 createdAt: "2025-03-12T07:56:17.181Z"
 *                 updatedAt: "2025-03-12T07:56:17.181Z"
 *                 __v: 0
 *       400:
 *         description: Invalid or missing parameters.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Invalid pageId or clientId."
 *       404:
 *         description: PageMaster not found.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "PageMaster not found."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             example:
 *               status: false
 *               message: "Internal server error."
 */

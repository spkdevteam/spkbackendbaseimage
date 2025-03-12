/** 
* @swagger 
* /users/delete/{clientId}/{id}: 
*   delete: 
*     summary: Delete a user
*     description: Deletes an existing user based on the provided `clientId` and `id`. This action cannot be undone.
*     tags:
*       - Authentication
*     security:
*       - BearerAuth: []
*     parameters:
*       - name: clientId
*         in: path
*         required: true
*         description: The client ID associated with the user to be deleted.
*         schema:
*           type: string
*           example: "6788abe40db7c3b61ed93c70"
*       - name: id
*         in: path
*         required: true
*         description: The unique user ID of the user to be deleted.
*         schema:
*           type: string
*           example: "67b82524487ffc049f1f868a"
*     responses:
*       200:
*         description: User successfully deleted
*         content:
*           application/json:
*             example:
*               status: true
*               message: "User deleted successfully"
*       404:
*         description: User not found
*         content:
*           application/json:
*             example:
*               status: false
*               message: "User not found"
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

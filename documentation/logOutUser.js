/** 
* @swagger 
* /users/logout: 
*   post: 
*     summary: Log out the user
*     description: Logs out the currently authenticated user by invalidating their session or token.
*     tags:
*       - Authentication
*     security:
*       - BearerAuth: []
*     responses:
*       200:
*         description: User successfully logged out
*         content:
*           application/json:
*             example:
*               status: true
*               message: "User logged out successfully"
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

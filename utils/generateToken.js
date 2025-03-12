const setTokenCookie = (res, token) => {
    res.cookie("token", token, {
        httpOnly: true, 
        secure: process.env.NODE_ENV === "production", // Secure in production
        sameSite: "strict", // Prevent CSRF attacks
        maxAge: 7 * 24 * 60 * 60 * 1000, // Token expiry (7 days)
    });
};

module.exports = setTokenCookie;

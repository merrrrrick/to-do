import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export function getUserIdFromToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Authorization token missing or invalid' });
    }
    // Bearer sdbkvjbkdnfsv ["Bearer", "kgdshvofds"]

    const token = authHeader.split(' ')[1]; 

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
}

import { UmiApiRequest, UmiApiResponse } from "umi";
import { PrismaClient } from '@prisma/client';
// import { Redis } from "@upstash/redis";
//
// const redis = new Redis({
//     url: 'https://apn1-guided-humpback-33571.upstash.io',
//     token: 'AYMjASQgODI1M2ZiNzUtMThiMS00YWM5LTkzMWItYjcxYWM3MmQxYzg1Nzk1OGI4MWNkYmNhNDY1NWJlZmVkY2U0MzA5NDczNDA=',
// })
import Redis from "ioredis";

let redis = new Redis("rediss://:7958b81cdbca4655befedce430947340@apn1-guided-humpback-33571.upstash.io:33571");
export default async function handler(req: UmiApiRequest, res: UmiApiResponse) {
    let prisma: PrismaClient;
    switch (req.method) {
        case 'GET':
            // const redis = Redis.fromEnv();
            let post = await redis.get('post-' + req.params.postId);
            if (post) {
                res.status(200).json(JSON.parse(post));
                return;
            }
            if (!post) {
                prisma = new PrismaClient();
                post = await prisma.post.findUnique({
                    where: { id: +req.params.postId },
                    include: { author: true }
                });
                if (post) {
                    res.status(200).json(post);
                } else {
                    res.status(404).json({ error: 'Post not found.' });
                }
                await redis.set('post-' + req.params.postId, JSON.stringify(post));
                await prisma.$disconnect();
            }
            break;
        default:
            res.status(405).json({ error: 'Method not allowed' })
    }
}

import S3 from 'aws-sdk/clients/s3';
import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
});

const s3 = new S3({
  region: 'ap-northeast-2',
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  signatureVersion: 'v4',
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, type } = req.body;

    const fileParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: name,
      Expires: 600,
      ContentType: type,
    };

    const url = await s3.getSignedUrlPromise('putObject', fileParams);

    res.status(200).json({ url });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '15mb', // Set desired value here
    },
  },
};

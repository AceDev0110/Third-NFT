import { Request, Response, Router } from 'express';
import { getConnection } from "typeorm";
import { Auction } from './model/auction';
import { Collection } from './model/collection';
import { mintNft } from './service/mintService';
import { purchaseNft, sendNft } from './service/transferService';


const router = Router();


router.get('/collections', async (req: Request, res: Response) => {
    const collections = await getConnection()
        .getRepository(Collection)
        .createQueryBuilder("collections")
        .getMany();
    return res.status(200).json({collections});
});


router.get('/auctions', async (req: Request, res: Response) => {
    const auctions = await getConnection()
        .getRepository(Auction)
        .createQueryBuilder("auctions")
        .getMany();
    return res.status(200).json({auctions});
});


// router.get('/my-nfts', async (req: Request, res: Response) => {
//     // TODO
// });


// router.get('/connect-wallet', async (req: Request, res: Response) => {
//     // TODO
// });


/**
 * @requestBody primaryChain: "",
 * @requestBody secondaryChains: ["", ""] 
 */
router.post('/mint', async (req: Request, res: Response) => {
    let primaryChain: string = req.body.primaryChain ?? null;
    let secondaryChains: string[] = req.body.secondaryChains ?? null;
    let mintResponse = await mintNft(primaryChain, secondaryChains);
    return res.status(200).json({mintResponse});
});


/**
 * @requestBody chain: "",
 * @requestBody tokenAddress: "" 
 * @requestBody purchasePrice: 0
 */
router.post('/purchase', async (req: Request, res: Response) => {
    let chain: string = req.body.chain ?? null;
    let tokenAddress: string = req.body.tokenAddress ?? null;
    let purchasePrice: number = req.body.purchasePrice ?? null;
    let purchaseResponse = await purchaseNft(chain, tokenAddress, purchasePrice);
    return res.status(200).json({purchaseResponse});
});


/**
 * @requestBody chain: "",
 * @requestBody tokenAddress: "" 
 * @requestBody recipientAddress: ""
 */
router.post('/send', async (req: Request, res: Response) => {
    let chain: string = req.body.chain ?? null;
    let tokenAddress: string = req.body.tokenAddress ?? null;
    let recipientAddress: string = req.body.recipientAddress ?? null;
    let sendResponse = await sendNft(chain, tokenAddress, recipientAddress);
    return res.status(200).json({sendResponse});
});


export = router;
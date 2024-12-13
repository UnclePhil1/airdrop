import { Keypair } from "@solana/web3.js";

let kp = Keypair.generate();
console.log(`You generated a sol wallet: ${kp.publicKey.toBase58()}`);
console.log(`Solana wallet sectouch keygenret key: ${kp.secretKey}`);

import { Transaction, SystemProgram, Connection, Keypair, LAMPORTS_PER_SOL, sendAndConfirmTransaction, PublicKey } from "@solana/web3.js";
import wallet from "./dev-wallet.json";
import "dotenv/config";

// Import our dev wallet keypair
const from = Keypair.fromSecretKey(new Uint8Array(wallet));

// Get recipient public key from command-line argument
const suppliedToPubKey = process.argv[2];

if (!suppliedToPubKey) {
    console.error("Error: Missing recipient public key. Usage: yarn ts-node transfer.ts <recipientPublicKey>");
    process.exit(1);
}

let to: PublicKey;
try {
    to = new PublicKey(suppliedToPubKey);
} catch (e) {
    console.error("Error: Invalid public key provided.");
    process.exit(1);
}

// Create a Solana devnet connection
const connection = new Connection("https://api.devnet.solana.com");

(async () => {
    try {
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: from.publicKey,
                toPubkey: to,
                lamports: LAMPORTS_PER_SOL / 100,
            })
        );

        transaction.recentBlockhash = (await connection.getLatestBlockhash('confirmed')).blockhash;
        transaction.feePayer = from.publicKey;

        // Sign transaction, broadcast, and confirm
        const signature = await sendAndConfirmTransaction(
            connection,
            transaction,
            [from]
        );

        console.log(`Success! Check out your TX here: 
        https://explorer.solana.com/tx/${signature}?cluster=devnet`);
    } catch (e) {
        console.error(`Oops, something went wrong: ${e}`);
    }
})();

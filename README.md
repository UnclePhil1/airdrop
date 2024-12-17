TX: https://explorer.solana.com/tx/FagwRNHDFHRwWi9v55gWWLiFrpPLK9gkYgtHjqMMbW6UStwLWEDh7Rik4iJwjWbikqiWZpMnxdD9iUJbgyBEyD1?cluster=devnet

# Solana Prerequisite Completion  

**Transaction Proof:** [View Transaction on Solana Explorer]([https://explorer.solana.com/tx/<transaction-hash>?cluster=devnet](https://explorer.solana.com/tx/FagwRNHDFHRwWi9v55gWWLiFrpPLK9gkYgtHjqMMbW6UStwLWEDh7Rik4iJwjWbikqiWZpMnxdD9iUJbgyBEyD1?cluster=devnet))  

---

## Project Overview  
This project is part of the Web3 Builders Alliance (WBA) program and demonstrates how to interact with a Solana on-chain program using the Anchor framework. The main objective of this project is to prove that the prerequisites of the program have been completed by submitting a GitHub username on-chain.  

The program utilizes a Program Derived Address (PDA) to store the data, ensuring a deterministic and secure way to interact with the Solana blockchain.  

---

## Files in the Repository  

1. **`programs/wba_prereq.ts`**  
   - This file contains the Interface Definition Language (IDL) for the WBA program.  
   - The IDL is used to define the program’s structure, including the methods, accounts, and types.  

2. **`enroll.ts`**  
   - The main script used to submit the GitHub username to the Solana blockchain.  
   - It:  
     - Creates a connection to the Solana devnet.  
     - Generates a PDA (Program Derived Address) based on predefined seeds.  
     - Sends a transaction to the WBA program, recording the GitHub username on-chain.  

---

## How to Run the Project  

Follow these steps to set up and run the project:  

### 1. Clone the Repository  
```bash  
git clone https://github.com/<your-username>/<repository-name>.git  
cd <repository-name>

```
### 2. Install Dependencies
Ensure you have Node.js and Yarn installed on your machine, then run:
```bash
yarn install  

```
### 3. Add Your Wallet Keypair
Generate a Solana wallet if you don’t already have one:
```bash
solana-keygen new --outfile dev-wallet.json  

```
### 4. Update the GitHub Username
Edit the enroll.ts file and replace <your github account> with your actual GitHub username. For example:
```bash
const github = Buffer.from("UnclePhil1", "utf8");  

```
### 5. Run the Script
Run the following command to execute the **`enroll.ts`** script:
```bash
ts-node enroll.ts  
```
### 6. Verify the Transaction
Once the transaction is successful, the script will output a transaction hash. Use the provided link to verify the transaction on the Solana Explorer:




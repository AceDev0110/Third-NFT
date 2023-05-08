# Swap native SOL for native ETH (lamports for gwei)
### Create a Solana account
```shell
solana-keygen new --no-bip39-passphrase -o ./_solana/sol-test-acct.json
solana config set --keypair $HOME/Wormhole-Hackathon/_solana/sol-test-acct.json
solana config set --url https://api.devnet.solana.com/
solana airdrop 2
```
https://docs.solana.com/cli

### Import the account into Solflare
Select "Import Wallet" then "Import private key" and copy the contents of:
```shell
cat $HOME/Wormhole-Hackathon/_solana/sol-test-acct.json
```
https://solflare.com/

### -- Create a Solana SPL Token & wrap it with SOL
```shell
spl-token create-token
spl-token create-account <token id>
```
https://spl.solana.com/token

### -- Create a token account for an existing token & wrap it with SOL
```shell
spl-token create-account <token id>
```
https://docs.wormholenetwork.com/wormhole/overview-liquid-markets#target-chain-solana
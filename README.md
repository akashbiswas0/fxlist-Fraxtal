# FxList ~ Dcentralized Initial Coin Offering Platform  on Fraxtal 

## Introduction

FxList is a  decentralized Initial Coin Offering (ICO) platform built on the Fraxtal blockchain. It empowers businesses to offer their shares directly to the public in a transparent and efficient manner, marking a step towards widespread adoption of decentralized finance (DeFi).

## Why FxList Matters ?

- **`DeFi Adoption`:** FxList serves as a gateway for traditional businesses to enter the DeFi space. By offering a familiar concept (share offerings) on a decentralized platform, it lowers the barrier to entry for companies hesitant to explore blockchain-based finance.
- **`Alternative to Traditional Finance`:** FxList provides businesses with a compelling alternative to traditional banking and fundraising methods. The platform's efficiency, transparency, and reduced costs incentivize companies to choose Fraxtal and FxList over conventional financial institutions.
- **`Cascade Effect`:** As more businesses adopt FxList and Fraxtal for their financial operations, it creates a ripple effect. Partners, suppliers, and customers of these businesses are exposed to the benefits of DeFi, potentially leading to wider adoption of Frax Finance ecosystem.
- **`Democratization of Investment`:** FxList opens up investment opportunities to a global pool of investors, democratizing access to promising ventures that may have been limited to select groups in traditional finance.
- **`Ecosystem Growth`:** The increased activity on FxList contributes to the overall growth and stability of the Fraxtal ecosystem, further establishing it as a go-to platform for decentralized financial services.


## Key Features

- Decentralized **ICO platform**
- Built on **Fraxtal blockchain**
- **Direct share offerings** for businesses
- Transparent and efficient process
- Seamless **integration with Frax Finance** ecosystem
- **Global accessibility** for investors



## Benefits of Building on Fraxtal Mainnet

Building this project on the Fraxtal mainnet offers several key advantages:


1. `Scalability`: The Fraxtal mainnet is designed to handle a large number of transactions, ensuring smooth and efficient operation even during high traffic periods.
2. `Interoperability`: Fraxtal's infrastructure supports interoperability with other blockchain networks, enhancing the flexibility and reach of your ICO.
3. `Lower Transaction Fees`: Enjoy lower transaction fees compared to other blockchain networks, making it cost-effective to launch and manage ICOs.


## Getting Started

### Installation

1. run locally:

   ```bash
   git clone https://github.com/priyanshur66/fxlist.git
   
   cd fxlist
   
   create and populate .env based on sample.env
   
   npm install 
   
   npm run dev


## Contract details
- `Contract Address` : **0xa79a6326251b0051788dca2337137afc678c2a7b**
- Explorer URL : https://fraxscan.com/address/0xa79a6326251b0051788dca2337137afc678c2a7b

## Sequence Diagram of FxList
```mermaid
sequenceDiagram
    actor User
    participant Frontend
    participant ERC20Contract
    participant FxListContract
    participant Marketplace

    User->>Frontend: Connect wallet
    Frontend->>User: Wallet connected

    User->>Frontend: Issue shares (Create ERC20 token)
    Frontend->>ERC20Contract: Deploy custom ERC20 token
    ERC20Contract->>User: Transfer all tokens to creator

    User->>Frontend: Create ICO
    Frontend->>FxListContract: Create pre-sale (token address, initial price)
    FxListContract->>Marketplace: Add token to marketplace

    User->>ERC20Contract: Transfer shares to FxList contract
    ERC20Contract->>FxListContract: Receive tokens

    Note over Marketplace: ICO visible in marketplace

    actor Buyer
    Buyer->>Marketplace: View available ICOs
    Buyer->>Frontend: Buy tokens
    Frontend->>FxListContract: Buy tokens (token address, amount)
    FxListContract->>User: Transfer payment
    FxListContract->>Buyer: Transfer tokens

    User->>Frontend: Withdraw unsold tokens
    Frontend->>FxListContract: Withdraw tokens (token address, amount)
    FxListContract->>User: Transfer unsold tokens
